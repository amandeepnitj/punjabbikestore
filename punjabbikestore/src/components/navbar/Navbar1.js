import React from 'react';
import './index.css';
import { Navbar, Nav, Container,Form, FormControl,Button,NavDropdown } from 'react-bootstrap';

/**
* @author
* @function Navbar1
**/

const Navbar1 = () => {
  return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Punjab Bike Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Motorcycles">Motorcycles</Nav.Link>
      <Nav.Link href="/Scooters">Scooters</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      */}
    </Nav>
    <Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/signup">SignUp</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 
  
    
    </>
   )

 }

export default Navbar1;