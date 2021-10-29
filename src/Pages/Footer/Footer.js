import React from 'react';
import { Card, Container, Form, ListGroup, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Card style={{ backgroundColor: "#F3F3F3" }} className="text-dark mt-5">
                <Card.Body className='row d-flex justify-content-between align-items-center p-3'>
                    <div className="col-12 col-md-4">
                        <Navbar.Brand as={Link} to="/" className="font2 lh-1 fw-bold">TravelDoor<br /><small className="fs-6 color1">Explore the World</small></Navbar.Brand>
                        <Card.Text style={{ fontWeight: "300" }}>
                            We Offer You A Greate World Tour.
                            <br /><br />
                            As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the host to your journey; without Her we could not find the unfolding adventures that attract and feed our souls. I have found some valuable resources for us to use and publisize.
                        </Card.Text>
                    </div>
                    <div className="col-12 col-md-4">
                        <Form className="font color2 text-center mb-2 fs-3">Working Hour</Form>
                        <Form>
                            <Card className="login-card">
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Monday to Friday: 9am - 5pm</ListGroup.Item>
                                    <ListGroup.Item>Saturday: 9am - 1pm</ListGroup.Item>
                                    <ListGroup.Item>Sunday: Closed</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Form>
                    </div>
                    <div className="col-12 col-md-4">
                        <Card.Text className="text-start"><small className="font text-primary">Contact Us</small><br />
                            Phone: +151017***** <br /> Email: codder94@gmail.com <br /> Locatoion: 6281 Liana Extensions, Lemkeport, NY
                        </Card.Text>
                        <Container className="text-start">
                            <Link to="logo" className="far fa-envelope fa-lg"></Link>
                            <Link to="logo" className="fab fa-facebook-square fa-lg mx-5"></Link>
                            <Link to="logo" className="fab fa-whatsapp fa-lg"></Link>
                            <Link to="logo" className="fab fa-twitter fa-lg mx-5"></Link>
                            <Link to="logo" className="fab fa-youtube fa-lg"></Link>
                        </Container>
                    </div>

                </Card.Body>
                <small className="text-center">&copy;2021 by TravelDoor Agency. Proudly created by myself.</small>
            </Card>
        </>
    );
};

export default Footer;