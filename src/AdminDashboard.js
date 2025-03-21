import { Container, Row, Col, Card } from "react-bootstrap";
import "./App.css";

function Dashboard() {

  return (
    <div className="dashboard-container d-flex flex-column">
        {/* Main Content */}
        <div className="main-content p-4 flex-grow-1" style={{ overflowX: "hidden" }}>
          <h2 className="mb-4">Dashboard</h2>
          <Container fluid>
            <Row className="g-4">
              <Col md={3}>
                <Card className="text-white bg-gradient-purple h-100 shadow">
                  <Card.Body>
                    <Card.Title>Total Events</Card.Title>
                    <Card.Text as="h3">7</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-white bg-gradient-teal h-100 shadow">
                  <Card.Body>
                    <Card.Title>Total Sales</Card.Title>
                    <Card.Text as="h3">$146.9K</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-white bg-gradient-orange h-100 shadow">
                  <Card.Body>
                    <Card.Title>Total Customers</Card.Title>
                    <Card.Text as="h3">900</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-white bg-gradient-pink h-100 shadow">
                  <Card.Body>
                    <Card.Title>People Online</Card.Title>
                    <Card.Text as="h3">7</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
  );
}

export default Dashboard;