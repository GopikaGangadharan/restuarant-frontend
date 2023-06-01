import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
      <i class="fa-solid fa-utensils"></i>
           Restro Mate
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header