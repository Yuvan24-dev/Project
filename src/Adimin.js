import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { FaUserCircle, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";

const orders = [
  { id: 1, category: "Mobile App", subCategory: "IOS", fees: 200000, duration: "3 months", start: "2025-02-01", end: "2025-05-01" },
  { id: 2, category: "Full stack development", subCategory: "MERN STACK", fees: 30000, duration: "4 months", start: "2025-02-01", end: "2025-06-01" },
  { id: 3, category: "Marketing", subCategory: "SMO", fees: 40000, duration: "6 months", start: "2025-02-01", end: "2025-07-01" },
];

const AdminDashboard = () => {
  return (
      <Container fluid>
        {/* Header */}
        <Row className="bg-primary text-white py-2 px-3 d-flex align-items-center">
          <Col md={6}>
            <h3>Administration</h3>
          </Col>
          <Col md={6} className="text-end">
            <FaUserCircle size={25} /> <span>Demo User</span>
            <Button variant="outline-light" size="sm" className="ms-3">Logout</Button>
          </Col>
        </Row>

        {/* Sidebar & Content */}
        <Row>
          {/* Sidebar */}
          <Col md={2} className="bg-dark text-white vh-100 p-3">
            <ul className="list-unstyled">
              <li className="my-2"><Link to="/dashboard" className="text-white text-decoration-none">Dashboard</Link></li>
              <li className="my-2"><Link to="/catalog" className="text-white text-decoration-none">Catalog</Link></li>
              <li className="my-2"><Link to="/users" className="text-white text-decoration-none">Users</Link></li>
              <li className="my-2"><Link to="/orders" className="text-white text-decoration-none">Manage Orders</Link></li>
            </ul>
          </Col>
          
          {/* Content */}
          <Col md={10} className="p-4">
            <h4>Orders List</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Main Category</th>
                  <th>Sub Category</th>
                  <th>Course Fees</th>
                  <th>Course Duration</th>
                  <th>Starting Date</th>
                  <th>Ending Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.id}>
                    <td>{index + 1}</td>
                    <td>{order.category}</td>
                    <td>{order.subCategory}</td>
                    <td>{order.fees}</td>
                    <td>{order.duration}</td>
                    <td>{order.start}</td>
                    <td>{order.end}</td>
                    <td>
                      <Button variant="success" size="sm" className="me-2"><FaEye /></Button>
                      <Button variant="warning" size="sm" className="me-2"><FaEdit /></Button>
                      <Button variant="danger" size="sm"><FaTrash /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
  );
};

export default AdminDashboard;
