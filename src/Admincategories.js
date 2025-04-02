import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Table, Modal, Pagination, Dropdown } from "react-bootstrap";
import { FaEye, FaEdit, FaTrash, FaPlus, FaFileExport } from "react-icons/fa";
import { FaFileCsv, FaFilePdf, FaFileExcel } from "react-icons/fa";
import axios from 'axios';
import * as XLSX from 'xlsx';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";



const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


const [productsPerPage] = useState(5); // Changed to 5 items per page

const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

const [newCategory, setNewCategory] = useState({
  category: "",
  subCategory: ""
});

// Fetch categories from backend
const fetchCategories = async () => {
  try {
    setLoading(true);
    const response = await axios.get("http://localhost:7000/api/categories");
    setCategories(response.data);
    setError("");
  } catch (err) {
    setError("Failed to fetch categories");
    console.error("Fetch error:", err);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchCategories();
}, []);

// Create Category
const handleAddCategory = async () => {
  try {
    const response = await axios.post("http://localhost:7000/api/categories", newCategory);
    setCategories([response.data, ...categories]);
    setShowAddModal(false);
    setNewCategory({ category: "", subCategory: "" });
  } catch (err) {
    setError("Failed to add category");
    console.error("Create error:", err);
  }
};

// Update Category
const handleEditCategory = async () => {
  try {
    const response = await axios.put(
      `http://localhost:7000/api/categories/${selectedCategory._id}`,
      selectedCategory
    );
    const updatedCategories = categories.map(cat =>
      cat._id === selectedCategory._id ? response.data : cat
    );
    setCategories(updatedCategories);
    setShowEditModal(false);
  } catch (err) {
    setError("Failed to update category");
    console.error("Update error:", err);
  }
};

// Delete Category
const handleDeleteCategory = async () => {
  try {
    await axios.delete(`http://localhost:7000/api/categories/${selectedCategory._id}`);
    const updatedCategories = categories.filter(cat => cat._id !== selectedCategory._id);
    setCategories(updatedCategories);
    setShowDeleteModal(false);
  } catch (err) {
    setError("Failed to delete category");
    console.error("Delete error:", err);
  }
};

const handleCategorySelection = (categoryId) => {
  setSelectedCategories(prevSelected =>
    prevSelected.includes(categoryId)
      ? prevSelected.filter(id => id !== categoryId)
      : [...prevSelected, categoryId]
  );
};

const exportData = (type) => {
  let exportItems = selectedCategories.length > 0 
    ? categories.filter(cat => selectedCategories.includes(cat.id))
    : filteredCategories;

  switch(type) {
    case 'csv':
      exportToCSV(exportItems);
      break;
    case 'excel':
      exportToExcel(exportItems);
      break;
    case 'pdf':
      exportToPDF(exportItems);
      break;
    default:
      break;
  }
};
  // Get unique sorted categories
  const uniqueCategories = [...new Set(categories.map(cat => cat.main))]
    .sort((a, b) => b.localeCompare(a)); // Descending order

  // Filter logic
  const filteredCategories = categories.filter(cat => {
    const matchesSearch = (
      cat.main.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.sub.toLowerCase().includes(searchQuery.toLowerCase()) 
    );

    const matchesFilter = selectedFilter === "All" || cat.main === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const exportToCSV = (data) => {
    const csvHeaders = ["Category", "Sub Category"];
    const csvContent = [
      csvHeaders.join(','),
      ...data.map(cat => 
        `"${cat.main.replace(/"/g, '""')}","${cat.sub.replace(/"/g, '""')}"`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'categories.csv');
    link.click();
  };

  const exportToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data.map(cat => ({
      "Category": cat.main,
      "Sub Category": cat.sub,
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Categories");
    XLSX.writeFile(workbook, "categories.xlsx");
  };

  const exportToPDF = (categories) => {
    const doc = new jsPDF();
    const tableColumn = ["#", "Categories ", "Sub Categories"];
    const tableRows = [];
  
    categories.forEach((category, index) => {
      tableRows.push([index + 1, category.main, category.sub]);
    });
  
    doc.text("Category List", 14, 15);
    
    // Ensure autoTable function is called correctly
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20
    });
  
    doc.save("categories.pdf");
  };
  
  
  // Pagination items
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Container fluid className="bg-light min-vh-100 p-4">
      <Row className="g-4">
        <Col xs={12}>
          <div className="bg-white rounded-3 shadow-sm p-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
              <h2 className="text-dark mb-3 mb-md-0">Category Management</h2>
              <div className="d-flex gap-2">
                <Button 
                  variant="primary" 
                  className="rounded-pill px-4"
                  onClick={() => setShowAddModal(true)}
                >
                  <FaPlus className="me-2" /> Add Category
                </Button>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3 p-3 mb-4">
              <Row className="g-3">
                <Col md={4}>
                  <Form.Control
                    type="text"
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-pill"
                  />
                </Col>
                
                <Col md={4}>
                  <Form.Select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="rounded-pill"
                  >
                    <option value="All">All Categories</option>
                    {uniqueCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </Form.Select>
                </Col>

                <Col md={4}>
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" 
                    className="rounded-pill w-100">
                    <option className="d-inline" >Export</option>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      <Dropdown.Item onClick={() => exportData('csv')}>
                        <FaFileCsv className="me-2" /> CSV
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => exportData('pdf')}>
                        <FaFilePdf className="me-2" /> PDF
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => exportData('excel')}>
                        <FaFileExcel className="me-2" /> Excel
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </div>

            <div className="bg-white rounded-3 shadow-sm p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="text-dark mb-0">Category List</h5>
                <span className="text-secondary">
                  Showing {currentItems.length} of {filteredCategories.length} entries
                </span>
              </div>
              
              <Table hover className="align-middle">
  <thead className="bg-primary text-white">
    <tr>
      <th>
        <Form.Check
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedCategories(currentItems.map(cat => cat.id));
            } else {
              setSelectedCategories([]);
            }
          }}
          checked={selectedCategories.length === currentItems.length && currentItems.length > 0}
        />
      </th>
      <th>#</th>
      <th>Categories</th>
      <th>Sub Categories</th>
      <th className="text-center">Actions</th>
    </tr>
  </thead>
  <tbody>
    {currentItems.map((category, index) => (
      <tr key={category.id}>
        <td>
          <Form.Check
            type="checkbox"
            checked={selectedCategories.includes(category.id)}
            onChange={() => handleCategorySelection(category.id)}
          />
        </td>
        <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
        <td>{category.main}</td>
        <td>{category.sub}</td>
        <td className="text-center">
          <div className="d-flex justify-content-center gap-2">
            <Button 
              variant="light" 
              size="sm" 
              className="text-info border-0"
              onClick={() => {
                setSelectedCategory(category);
                setShowViewModal(true);
              }}
            >
              <FaEye size={18} />
            </Button>
            <Button 
              variant="light" 
              size="sm" 
              className="text-warning border-0"
              onClick={() => {
                setSelectedCategory(category);
                setShowEditModal(true);
              }}
            >
              <FaEdit size={18} />
            </Button>
            <Button 
              variant="light" 
              size="sm" 
              className="text-danger border-0"
              onClick={() => {
                setSelectedCategory(category);
                setShowDeleteModal(true);
              }}
            >
              <FaTrash size={18} />
            </Button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</Table>
<div className="d-flex justify-content-center mt-4">
  <Pagination>
    <Pagination.Prev 
      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
      disabled={currentPage === 1}
    />
    
    {Array.from({length: Math.ceil(filteredCategories.length / productsPerPage)}, (_, i) => (
      <Pagination.Item
        key={i + 1}
        active={i + 1 === currentPage}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </Pagination.Item>
    ))}
    
    <Pagination.Next 
      onClick={() => setCurrentPage(p => Math.min(
        Math.ceil(filteredCategories.length / productsPerPage), 
        p + 1
      ))}
      disabled={currentPage === Math.ceil(filteredCategories.length / productsPerPage)}
    />
  </Pagination>
</div>
            </div>
          </div>
        </Col>
      </Row>

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header className="bg-primary text-white">
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control 
                type="text" 
                value={newCategory.mainCategory}
                onChange={(e) => setNewCategory({...newCategory, mainCategory: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event name</Form.Label>
              <Form.Control 
                type="text" 
                value={newCategory.subCategory}
                onChange={(e) => setNewCategory({...newCategory, subCategory: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>

      {/* View Category Modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered>
        <Modal.Header className="bg-primary text-white">
          <Modal.Title>View Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCategory && (
            <>
              <p><strong>Category:</strong> {selectedCategory.main}</p>
              <p><strong>Event name:</strong> {selectedCategory.sub}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowViewModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Category Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header className="bg-warning text-white">
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCategory && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control 
                  type="text" 
                  value={selectedCategory.main}
                  onChange={(e) => setSelectedCategory({...selectedCategory, main: e.target.value})}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Event name</Form.Label>
                <Form.Control 
                  type="text" 
                  value={selectedCategory.sub}
                  onChange={(e) => setSelectedCategory({...selectedCategory, sub: e.target.value})}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleEditCategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header className="bg-danger text-white">
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this category? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteCategory}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>    
      </Container>
  );
};

export default CategoryManager;