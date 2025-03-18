import React, { useState } from "react";
import { Outlet, Link,useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaBox, FaClipboardList, FaUserCircle } from "react-icons/fa";
import { Row, Col, Nav, Button } from "react-bootstrap";

function AdminLayout() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    const navigate = useNavigate(); 
  
    const logout = () => {
      localStorage.removeItem("admintoken"); 
      navigate("/adminlogin"); 
  }
  

  return (
    <div className="dashboard-container d-flex flex-column">
      <Row className="top-navbar bg-gradient-primary text-white py-3 px-4 align-items-center position-relative">
        <Col md={6}>
          <h3 className="mb-0">Administration</h3>
        </Col>
        <Col md={6} className="text-end">
          <FaUserCircle size={25} className="me-2" />
          <span className="me-3">Admin</span>
          <Button variant="outline-light" size="sm" onClick={logout}>
            Logout
          </Button>
        </Col>
      </Row>

      <div className="d-flex flex-grow-1">
        <div className="sidebar bg-gradient-dark text-white p-3" style={{ width: "250px", flexShrink: 0 }}>
          <h4 className="text-white mb-4">Menu</h4>
          <Nav className="flex-column">
            <Nav.Item>
              <Link to="dashboard" className="text-white text-decoration-none d-flex align-items-center p-2 nav-link">
                <FaTachometerAlt className="me-2" /> Dashboard
              </Link>
            </Nav.Item>
            <Nav.Item>
              <div
                className="text-white d-flex align-items-center p-2 nav-link cursor-pointer"
                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
              >
                <FaBox className="me-2 cursor-pointer" /> Catalog <span className="ms-auto">{isCatalogOpen ? "▼" : "▶"}</span>
              </div>
              {isCatalogOpen && (
                <Nav className="flex-column ms-4">
                  <Nav.Item>
                    <Link to="categories" className="text-white text-decoration-none d-block p-2 nav-link">
                      <FaClipboardList className="me-2" /> Categories
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="products" className="text-white text-decoration-none d-block p-2 nav-link">
                      <FaBox className="me-2" /> Products
                    </Link>
                  </Nav.Item>
                </Nav>
              )}
            </Nav.Item>
          </Nav>
        </div>

        <div className="main-content p-4 flex-grow-1" style={{ overflowX: "hidden" }}>
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
