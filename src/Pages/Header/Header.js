import '../../App.css';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'animate.css';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="container">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" className="font2 lh-1 fw-bold animate__animated animate__flip">TravelDoor<br /><small className="fs-6 color1">Explore the World</small></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 me-3 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
                            <Nav.Link as={Link} to="/destinations">Our All Destinations</Nav.Link>
                            {/* <Nav.Link as={Link} to="/allUsers">Manage All Trips</Nav.Link> */}
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/cart"><i className="fas fa-cart-plus"></i></Nav.Link>
                        </Nav>

                        {user?.email ?
                            <Button onClick={logOut} className="btn border-0 color11 ms-3">log Out</Button> :
                            <Button as={Link} to="/login" className="btn border-0 color11 ms-3">Login</Button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;