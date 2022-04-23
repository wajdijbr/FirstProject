import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';





export default function Menu() {

  
  return (
      
   <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="home">GALLERY</Navbar.Brand>
     <Nav className="me-auto">
      <Nav.Link href="home" >Home</Nav.Link>
      <Nav.Link href="products">Products</Nav.Link>
      <Nav.Link href="contact" >Contact</Nav.Link>
      <Nav.Link href="about">About US</Nav.Link>
      <Nav.Link href="checkout">Checkout</Nav.Link>
    </Nav>

    </Container>
  </Navbar>


 

  )

  
}
