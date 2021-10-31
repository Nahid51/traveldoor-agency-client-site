import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'animate.css';

const Contact = () => {
    return (
        <div className="my-5">
            <Row xs={1} md={2} className="g-4">
                <Card className=''>
                    <Card.Body className="mx-auto">
                        <Card.Title className='fs-1 text-center'>Get in Touch</Card.Title>
                        <Card.Text>Jigatola, Dhanmondi, Dhaka, Bangladesh</Card.Text>
                        <Card.Text>codder94@gmail.com</Card.Text>
                        <Card.Text>+88017********/ +88018********/ +88015********</Card.Text>
                        <Container className="my-3">
                            <Link to="logo" className="far fa-envelope fa-lg"></Link>
                            <Link to="logo" className="fab fa-facebook-square fa-lg mx-5"></Link>
                            <Link to="logo" className="fab fa-whatsapp fa-lg"></Link>
                            <Link to="logo" className="fab fa-twitter fa-lg mx-5"></Link>
                            <Link to="logo" className="fab fa-youtube fa-lg"></Link>
                        </Container>
                        <Button as={Link} to='/join' className="btn color11 animate__animated animate__backInUp">Join</Button>
                    </Card.Body>
                </Card>
                <Card className=''>
                    <Card.Body className="mx-auto">
                        <Card.Title className='fs-2 text-center'>Tell us Something?</Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Comment</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                        <Button as={Link} to='/submit' className="btn color11 animate__animated animate__backInUp">Submit</Button>
                    </Card.Body>
                </Card>
            </Row>
            { }

        </div>
    );
};

export default Contact;