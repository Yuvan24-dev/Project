import React, { useEffect, useState } from "react";
import {FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { FaExclamationTriangle, FaExclamationCircle,FaFileExport} from "react-icons/fa";
import { FaFileCsv, FaFilePdf, FaFileExcel } from "react-icons/fa";
import { Container, Row, Col, Button, Form, Table,  Modal, Dropdown,InputGroup  } from "react-bootstrap";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from 'jspdf-autotable';
import axios from 'axios';
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";



const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [currentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState("");


  const [editFormData, setEditFormData] = useState({
    Category: "",
    eventName: "",
    price: "",
    date: "",
    time: "05:30 AM",  
    location:"",
    tickettype: "",
    status: "",
  });
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const filteredProducts = products.filter((product) => {
    const category = product.Category?.toLowerCase() || "";
    const subCategory = product.subCategory?.toLowerCase() || "";
    const status = product.status?.toLowerCase() || "";
  
    const matchesSearch =
      category.includes(searchQuery.toLowerCase()) ||
      subCategory.includes(searchQuery.toLowerCase()) ||
      status.includes(searchQuery.toLowerCase());
  
    const matchesStatus = filterStatus === "All" || product.status === filterStatus;
  
    return matchesSearch && matchesStatus;
  });

  const handleCheckboxChange = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(currentProducts.map((product) => product._id));
    } else {
      setSelectedProducts([]);
    }
  };

  
  const handleTimeChange = (value) => {
    setEditFormData((prevData) => ({
      ...prevData,
      time: value,
    }));
  };
//------------------------------------------------------------for Fetching data-----------------------------------------------------------------------------------
const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:7000/api/products");

    if (response.status === 200 && Array.isArray(response.data)) {
      setProducts(response.data);
    } 
    else {
      console.error("Invalid response format:", response.data);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

useEffect(() => {
  fetchProducts();
}, []);

// ------------------------------------------------------------backend and front end logic for edit and add-------------------------------------------------------
//for edit
const handleEdit = (product) => {
  setSelectedProduct(product);
  setEditFormData({
    Category: product.Category,
    eventName: product.eventName,
    price: product.price,
    date: product.date,
    time:product.time,
    location:product.location,
    tickettype:product.tickettype,
    status: product.status,
    image: null,
  });
  setEditMode(true);
  setShowAddProductForm(true);
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  console.log(`Field: ${name}, Value: ${value}, Type: ${typeof value}`);

  setEditFormData((prevData) => ({
    ...prevData,
    [name]: value, // Make sure we're setting a string
  }));
};

const handleFileChange = (e) => {
  setEditFormData((prevData) => ({
    ...prevData,
    image: e.target.files[0],
  }));
};
//for add
const handleProductSubmit = async (e) => {
  e.preventDefault();

  if (!editFormData.Category || !editFormData.eventName || !editFormData.price || !editFormData.date || !editFormData.time ||!editFormData.location ||!editFormData.tickettype || !editFormData.status) {
    setError("All fields are required.");
    return;
  }

  try {

    let formData = new FormData();
    formData.append("Category", editFormData.Category);
    formData.append("eventName", editFormData.eventName);
    formData.append("price", parseFloat(editFormData.price)); 
    formData.append("date", editFormData.date);  
    formData.append("time", editFormData.time);
    formData.append("location", editFormData.location); 
    formData.append("tickettype", editFormData.tickettype);
    formData.append("status", editFormData.status);
    if (editFormData.image) formData.append("image", editFormData.image);

    let url = "http://localhost:7000/api/products"; 
    let method = "POST"; 

    if (editMode && selectedProduct) {
      url = `http://localhost:7000/update/${selectedProduct._id}`; 
      method = "PUT";
    }

    const response = await fetch(url, {
      method,
      body: formData, 
    });

    if (!response.ok) throw new Error(`Failed to ${editMode ? "update" : "add"} product`);

    console.log(`Product ${editMode ? "updated" : "added"} successfully`);
    
    setShowAddProductForm(false);
    // resetForm();
    fetchProducts(); 

  } catch (error) {
    console.error("Error saving product:", error);
    setError("Something went wrong. Please try again.");
  }
};

//for delete product
  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };
  
  const handleDelete = async () => {
    if (!selectedProduct) return; 
  
    const productId = selectedProduct._id;
  
    try {
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
  
      const response = await fetch(`http://localhost:7000/delete/${productId}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
  
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
      fetchProducts();
    } finally {
      setShowDeleteModal(false);
      setSelectedProduct(null); 
    }
  };
//-----------------------------------------------------------for export--------------------------------------------------------------------------
  const handleView = (product) => {
    setSelectedProduct(product);
    setShowViewModal(true);
  };

  const handleExport = (type) => (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (selectedProducts.length === 0) {
      setShowExportModal(true);
      return;
    }

    const exportData = products.filter(product => 
      selectedProducts.includes(product._id)
    );

    switch(type) {
      case 'csv':
        exportAsCSV(exportData);
        break;
      case 'excel':
        exportAsExcel(exportData);
        break;
      case 'pdf':
        exportAsPDF(exportData);
        break;
      default:
        break;
    }
  };

  // CSV Export Implementation
  const exportAsCSV = (data) => {
    const headers = ["Main Category", "Sub Category", "Price", "date","time","location","tickettype", "Status"];
    
    const csvData = [
      headers,
      ...data.map(item => [
        `"${item.Category}"`, 
        `"${item.eventName}"`, 
        `"${item.price}"`,  
        `"${item.date}"`, 
        `"${item.time}"`, 
        `"${item.location}"`,
        `"${item.tickettype}"`,
        `"${item.status}"`
      ])
    ];
  
    const csvContent = csvData.map(row => row.join(",")).join("\n");
  
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "products.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  

  // Excel Export 
  const exportAsExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data.map(item => ({
      "Main Category": item.Category,
      "Sub Category": item.eventName,
      "Price": item.price,
      "date": item.date,
      "time": item.time,
      "location":item.location,
      "tickettype":item.tickettype,
      "Status": item.status
    })));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
    XLSX.writeFile(workbook, "products.xlsx");
  };

  // PDF Export 
  const exportAsPDF = (data) => {
    const doc = new jsPDF();
    
    doc.setFontSize(16);
    doc.text("Product List", 14, 15);
    
    autoTable(doc, {
      head: [["Main Category", "Sub Category", "Price", "date","time","location,","tickettype", "Status"]],
      body: data.map(product => [
        product.Category,
        product.eventName,
        `$${product.price.toFixed(2)}`,
        product.date,
        product.time,
        product.location,
        product.tickettype,
        product.status
      ]),
      startY: 25,
      theme: 'grid',
      styles: { fontSize: 10 },
      headStyles: { 
        fillColor: [41, 128, 185],
        textColor: 255,
        fontStyle: 'bold'
      }
    });
  
    doc.save("products.pdf");
  };

  return (
    <Container fluid className="bg-light min-vh-100 p-4">
      <Row className="g-4">
        <Col xs={12}>
          <div className="bg-white rounded-3 shadow-sm p-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
              <h2 className="text-dark mb-3 mb-md-0">Product Management</h2>
              <div className="d-flex gap-2">
                <Button 
                  variant="primary" 
                  className="rounded-pill px-4"
                  onClick={() => {
                    setShowAddProductForm(!showAddProductForm);
                    setEditMode(false);
                  }}
                >
                  <FaPlus className="me-2" /> Add Product
                </Button>
              </div>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-gray-100 rounded-3 p-3 mb-4">
              <Row className="g-3">
                <Col md={6}>
                  <Form.Control
                    type="text"
                    placeholder="Search by category, price,location or status"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-pill"
                  />
                </Col>
                <Col >
                  <Dropdown>
                    <Dropdown.Toggle 
                      variant="outline-secondary" 
                      className="rounded-pill w-100"
                    >
                      Status: {filterStatus}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      <Dropdown.Item onClick={() => setFilterStatus("All")}>All</Dropdown.Item>
                      <Dropdown.Item onClick={() => setFilterStatus("Available")}>Available</Dropdown.Item>
                      <Dropdown.Item onClick={() => setFilterStatus("Out of Stock")}>Out of Stock</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col  className="d-flex gap-2">
  <Button 
    variant="outline-success" 
    className="rounded-pill px-4 d-flex align-items-center gap-2"
    onClick={handleExport('csv')}
    >
    <FaFileCsv /> CSV
  </Button>
  <Button 
    variant="outline-danger" 
    className="rounded-pill px-4 d-flex align-items-center gap-2"
    onClick={handleExport('pdf')}

  >
    <FaFilePdf /> PDF
  </Button>
  <Button 
    variant="outline-primary" 
    className="rounded-pill px-4 d-flex align-items-center gap-2"
    onClick={handleExport('excel')}

  >
    <FaFileExcel /> Excel
  </Button>
</Col>
              </Row>
            </div>

{/* Product Form */}
{showAddProductForm && (
  <div className="bg-gray-100 rounded-3 p-4 mb-4">
    <h5 className="mb-4">{editMode ? "Edit Product" : "Add Product"}</h5>
    {error && <div className="alert alert-danger">{error}</div>}

    <Form onSubmit={handleProductSubmit}> {/* 🔹 Use the optimized function */}
      <Row className="g-3 mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select 
              name="Category"
              value={editFormData.Category}
              onChange={handleInputChange}
              className="rounded-pill"
            >
              <option value="">Select</option>
              <option value="Music">Music</option>
              <option value="Adventure">Adventure</option>
              <option value="Marathon">Marathon</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group>
            <Form.Label>Event name</Form.Label>
            <Form.Control
              type="text"
              name="eventName"
              value={editFormData.eventName}
              onChange={handleInputChange}
              className="rounded-pill"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="g-3 mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Event Image</Form.Label>
            <Form.Control 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              className="rounded-pill"
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={editFormData.price}
              onChange={handleInputChange}
              className="rounded-pill"
            />
          </Form.Group>
        </Col>

        <Col md={6}>
  <Form.Group>
    <Form.Label>Date</Form.Label>
    <Form.Control
      type="date"
      name="date"
      value={editFormData.date}
      onChange={handleInputChange}
      className="rounded-pill"
    />
  </Form.Group>
</Col>

        <Col md={6}>
        <Form.Group>
        <Form.Label>Time</Form.Label>
        <InputGroup>
          <TimePicker
            onChange={handleTimeChange}
            value={editFormData.time}
            format="h:mm a"         
            disableClock={true} 
            className="form-control rounded-pill"
          />
        </InputGroup>
      </Form.Group>
    </Col>

    <Col md={6}>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={editFormData.location } 
              onChange={handleInputChange}
              className="rounded-pill"
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group>
            <Form.Label>Ticket type</Form.Label>
            <Form.Select 
              name="tickettype"
              value={editFormData.tickettype} 
              onChange={handleInputChange}
              className="rounded-pill"
            >
              <option value="">Select tickettype</option>
              <option value="Available">Available</option>
              <option value="Sold out">Sold out</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Select 
              name="status"
              value={editFormData.status} 
              onChange={handleInputChange}
              className="rounded-pill"
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Sold out">Sold out</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>



      <div className="d-flex justify-content-end gap-2 mt-4">
        <Button 
          variant="light" 
          className="rounded-pill px-4"
          onClick={() => {
            setShowAddProductForm(false);
            // resetForm();
          }}
        >
          Cancel
        </Button>
        <Button variant="primary" type="submit" className="rounded-pill px-4">
          {editMode ? "Update Product" : "Add Product"}
        </Button>
      </div>
    </Form>
  </div>
)}
            {/* Product List */}
            <div className="bg-white rounded-3 shadow-sm p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="text-dark mb-0">Product List</h5>
                <span className="text-secondary">
                  Showing {filteredProducts.length} of {products.length} entries
                </span>
              </div>

              <Table hover className="align-middle">
                <thead className="bg-primary text-white">
                  <tr>
                    <th style={{ width: '50px' }}>
                      <Form.Check 
                        type="checkbox" 
                        onChange={handleSelectAll}
                        className="form-check-light"
                      />
                    </th>
                    <th>#</th>
                    <th>Category</th>
                    <th>Event name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Ticket</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct).map((product, index) => (
                    <tr key={product._id}>
                      <td>
                        <Form.Check
                          type="checkbox"
                          checked={selectedProducts.includes(product._id)}
                          onChange={() => handleCheckboxChange(product._id)}
                        />
                      </td>
                      <td>{index + 1}</td>
                      <td>{product.Category}</td>
                      <td>{product.eventName}</td>
                      <td>
                        <img src={`http://localhost:7000/uploads/${product.image}`}
                        alt={product.Category}
                        className="img-thumbnail"
                        style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                        />
                      </td>
                      <td>{product.price}</td>
                      <td>
                     {new Date(product.date).toLocaleDateString('en-GB', {
                     day: 'numeric',
                     month: 'short'
                     })}
                    </td> 
                     <td>{product.time}</td>
                      <td>{product.location}</td>
                      <td>{product.tickettype}</td>
                      <td>{product.status}</td>
                      <td className="text-center">
                        <div className="d-flex justify-content-center gap-2">
                          <Button 
                            variant="light" 
                            size="sm" 
                            className="text-info border-0"
                            onClick={() => handleView(product)}
                          >
                            <FaEye size={18} />
                          </Button>
                          <Button 
                            variant="light" 
                            size="sm" 
                            className="text-warning border-0"
                            onClick={() => handleEdit(product)}
                          >
                            <FaEdit size={18} />
                          </Button>
                          <Button 
                            variant="light" 
                            size="sm" 
                            className="text-danger border-0"
                            onClick={() => handleDeleteClick(product)}
                          >
                            <FaTrash size={18} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>

{/* View Product Modal */}
<Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered>
  <Modal.Header className="bg-primary text-white">
    <Modal.Title>Product Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {selectedProduct && (
      <div className="container-fluid">
        <Row className="mb-3">
          <Col md={4} className="fw-medium">Category:</Col>
          <Col md={8}>{selectedProduct.Category}</Col>
        </Row>
        <Row className="mb-3">
          <Col md={4} className="fw-medium">Sub Category:</Col>
          <Col md={8}>{selectedProduct.eventName}</Col>
        </Row>
        <Row className="mb-3">
          <Col md={4} className="fw-medium">Price:</Col>
          <Col md={8}>${selectedProduct.price}</Col>
        </Row>
        <Row className="mb-3">
          <Col md={4} className="fw-medium">date:</Col>
          <Col md={8}>{selectedProduct.date}</Col>
        </Row>
        <Row className="mb-3">
          <Col md={4} className="fw-medium">time:</Col>
          <Col md={8}>{selectedProduct.time}</Col>
        </Row>
        <Row className="mb-3">
          <Col md={4} className="fw-medium">Status:</Col>
          <Col md={8}>
            <span className={`badge ${selectedProduct.status === 'Available' 
              ? 'bg-success bg-opacity-10 text-success' 
              : 'bg-danger bg-opacity-10 text-danger'}`}
            >
              {selectedProduct.status}
            </span>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="fw-medium">Product Image:</Col>
          <Col md={8}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.Category}
              className="img-thumbnail rounded-3"
              style={{ width: '150px', height: '100px', objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </div>
    )}
  </Modal.Body>
  <Modal.Footer>
    <Button 
      variant="secondary" 
      onClick={() => setShowViewModal(false)}
      className="rounded-pill px-4"
    >
      Close
    </Button>
  </Modal.Footer>
</Modal>

{/* Delete Confirmation Modal */}
<Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
  <Modal.Header className="bg-danger text-white">
    <Modal.Title>Confirm Delete</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="text-center py-4">
      <div className="mb-3">
        <FaExclamationTriangle size={40} className="text-danger" />
      </div>
      <h5>Are you sure you want to delete this product?</h5>
      <p className="text-muted mt-2">
        This action cannot be undone. All associated data will be permanently removed.
      </p>
    </div>
  </Modal.Body>
  <Modal.Footer className="justify-content-center">
    <Button 
      variant="secondary" 
      onClick={() => setShowDeleteModal(false)}
      className="rounded-pill px-4"
    >
      Cancel
    </Button>
    <Button 
      variant="danger" 
      onClick={handleDelete}
      className="rounded-pill px-4"
    >
      <FaTrash className="me-2" /> Delete Permanently
    </Button>
  </Modal.Footer>
</Modal>

{/* Export Confirmation Modal */}
<Modal show={showExportModal} onHide={() => setShowExportModal(false)} centered>
  <Modal.Header className="bg-warning text-white">
    <Modal.Title>Export Products</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="text-center py-3">
      <FaExclamationCircle size={40} className="text-warning mb-3" />
      <h5>No Products Selected</h5>
      <p className="text-muted">
        Please select at least one product from the list to export.
      </p>
      <p className="text-muted small mt-2">
        Use the checkboxes in the product list to select items for export.
      </p>
    </div>
  </Modal.Body>
  <Modal.Footer className="justify-content-center">
    <Button 
      variant="outline-secondary" 
      onClick={() => setShowExportModal(false)}
      className="rounded-pill px-4"
    >
      Close
    </Button>
    <Button 
      variant="warning" 
      onClick={() => {
        setShowExportModal(false);
      }}
      className="rounded-pill px-4 text-white"
    >
      <FaFileExport className="me-2" /> Start Export
    </Button>
  </Modal.Footer>
</Modal>
    </Container>
  );
};

export default ProductManagement;