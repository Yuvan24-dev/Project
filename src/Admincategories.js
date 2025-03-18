import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Table, Modal } from "react-bootstrap";
import { FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { FaFileCsv, FaFilePdf, FaFileExcel } from "react-icons/fa";


const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filters, setFilters] = useState({
    mainCategory: "",
    subCategory: "",
    status: ""
  });

  // Form states
  const [newCategory, setNewCategory] = useState({
    mainCategory: "",
    subCategory: "",
    status: "Available"
  });

  // Initial sample data
  useEffect(() => {
    setCategories([
      { id: 1, main: "Electronics", sub: "Mobile Phones", status: "Available" },
      { id: 2, main: "Clothing", sub: "Men's Wear", status: "Sold out" }
    ]);
  }, []);

  // Filter categories
  const filteredCategories = categories.filter(cat => {
    return (
      cat.main.toLowerCase().includes(filters.mainCategory.toLowerCase()) &&
      cat.sub.toLowerCase().includes(filters.subCategory.toLowerCase()) &&
      (filters.status === "" || cat.status === filters.status)
    );
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submit for filtering
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Filtering is already handled by the filteredCategories array
  };

  // Add new category
  const handleAddCategory = () => {
    const newCat = {
      id: categories.length + 1,
      main: newCategory.mainCategory,
      sub: newCategory.subCategory,
      status: newCategory.status
    };
    setCategories([...categories, newCat]);
    setShowAddModal(false);
    setNewCategory({ mainCategory: "", subCategory: "", status: "Available" });
  };

  // Edit category
  const handleEditCategory = () => {
    const updatedCategories = categories.map(cat =>
      cat.id === selectedCategory.id ? { ...cat, ...selectedCategory } : cat
    );
    setCategories(updatedCategories);
    setShowEditModal(false);
  };

  // Delete category
  const handleDeleteCategory = () => {
    const updatedCategories = categories.filter(cat => cat.id !== selectedCategory.id);
    setCategories(updatedCategories);
    setShowDeleteModal(false);
  };

  const exportToExcel = () => {
    alert("Export to Excel functionality is simulated.");
  };

  // Handle export to PDF (simulated)
  const exportToPDF = () => {
    alert("Export to PDF functionality is simulated.");
  };


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

            <Form onSubmit={handleFilterSubmit} className="bg-gray-100 rounded-3 p-3">
              <Row className="g-3">
                <Col md={4}>
                  <Form.Group controlId="mainCategoryFilter">
                    <Form.Label className="fw-medium text-secondary">Category</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="mainCategory"
                      value={filters.mainCategory}
                      onChange={handleFilterChange}
                      className="border-2 border-primary-subtle rounded-pill"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="subCategoryFilter">
                    <Form.Label className="fw-medium text-secondary">Event name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="subCategory"
                      value={filters.subCategory}
                      onChange={handleFilterChange}
                      className="border-2 border-primary-subtle rounded-pill"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="statusFilter">
                    <Form.Label className="fw-medium text-secondary">Status</Form.Label>
                    <Form.Select 
                      name="status"
                      value={filters.status}
                      onChange={handleFilterChange}
                      className="border-2 border-primary-subtle rounded-pill"
                    >
                      <option value="">All</option>
                      <option value="Available">Available</option>
                      <option value="Sold out">Sold out</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-flex justify-content-end mt-3">
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="rounded-pill px-4 fw-medium"
                >
                  Filter Results
                </Button>
              </div>
              <Row className="pt-1 ">
              <Col md={3} className="d-flex gap-2">
                  <Button 
                    variant="outline-success" 
                    className="rounded-pill px-4 d-flex align-items-center gap-2"
                  >
                    <FaFileCsv /> CSV
                  </Button>
                  <Button 
                    variant="outline-danger" 
                    className="rounded-pill px-4 d-flex align-items-center gap-2"
                    onClick={exportToPDF}
                  >
                    <FaFilePdf /> PDF
                  </Button>
                  <Button 
                    variant="outline-primary" 
                    className="rounded-pill px-4 d-flex align-items-center gap-2"
                    onClick={exportToExcel}
                  >
                    <FaFileExcel /> Excel
                  </Button>
                </Col>
                </Row>
            </Form>
          </div>
        </Col>

        <Col xs={12}>
          <div className="bg-white rounded-3 shadow-sm p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="text-dark mb-0">Category List</h5>
              <span className="text-secondary">
                Showing {filteredCategories.length} of {categories.length} entries
              </span>
            </div>
            
            <Table hover className="align-middle">
              <thead className="bg-primary text-white">
                <tr>
                  <th>#</th>
                  <th>Menu</th>
                  <th>Sub Menu</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.map((category, index) => (
                  <tr key={category.id}>
                    <td>{index + 1}</td>
                    <td>{category.main}</td>
                    <td>{category.sub}</td>
                    <td>
                      <span className={`badge ${category.status === 'Available' 
                        ? 'bg-success bg-opacity-10 text-success' 
                        : 'bg-danger bg-opacity-10 text-danger'}`}
                      >
                        {category.status}
                      </span>
                    </td>
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
          </div>
        </Col>
      </Row>

      {/* Add Category Modal */}
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
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select 
                value={newCategory.status}
                onChange={(e) => setNewCategory({...newCategory, status: e.target.value})}
              >
              <option value="Available">Available</option>
              <option value="Sold out">Sold out</option>
              </Form.Select>
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
              <p><strong>Status:</strong> {selectedCategory.status}</p>
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
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select 
                  value={selectedCategory.status}
                  onChange={(e) => setSelectedCategory({...selectedCategory, status: e.target.value})}
                >
                      <option value="Available">Available</option>
                      <option value="Sold out">Sold out</option>
                </Form.Select>
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