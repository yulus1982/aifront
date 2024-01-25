import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';

const Navigation = React.memo(() => (
  <div id="navigation">
    <Navbar expand="md">
      <Container>
        <Nav>
          <Navbar.Brand href="/">FreeAI</Navbar.Brand>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="generators">Tools</Nav.Link>
            
            <Nav.Link href="generators">Contact Us</Nav.Link>
            <ThemeToggle /> {/* Add the ThemeToggle component here */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
));

export default Navigation;