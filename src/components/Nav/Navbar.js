import React from "react";
import { NavDropdown, Nav, Container, Navbar } from 'react-bootstrap';
import './Nav.css'; 
import Logo from '../../images/carelogo.jpg';


const Navbars = () =>{
    return(
        <Navbar expand="lg" className="custom-navbar">
        <Container>
            <Navbar.Brand className="logo-brand">
                <img src={Logo} alt="CareCoders Healthcare" className="logo-img"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link className="active">Home</Nav.Link>
                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">FAQ’s</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Booking</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Login / Register</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Services Details</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Blog" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Blog Details</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>Contact Us</Nav.Link>
                </Nav>
                <Nav className="navbar-actions">
                    <Nav.Link><i className="fa-solid fa-magnifying-glass"></i></Nav.Link>
                    <Nav.Link><i className="fa-solid fa-phone"></i> (+01) 999 888 777</Nav.Link>
                    <Nav.Link>
                        <button className="contact-btn" onClick={() => window.location.href = '#contact'}>
                            Contact Us <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
export default Navbars ;
