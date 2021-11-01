import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./SubMenu.css";

const SubMenuBar = () => {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        className="fixed-top navbar-container-sub"
        style={{ margin: "60px 0", padding: "10px 280px" }}
      >
        <Navbar.Brand href="#home">All Category</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button variant="danger">Shop Now</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SubMenuBar;
