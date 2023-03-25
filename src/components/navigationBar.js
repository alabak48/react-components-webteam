import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">Toolbox</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Overview</Nav.Link>
            <Nav.Link href="#deets">Toolbox App</Nav.Link>
            <Button variant="outline-secondary">Secondary</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default App;
