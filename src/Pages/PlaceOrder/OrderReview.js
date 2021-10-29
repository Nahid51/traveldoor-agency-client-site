import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const OrderReview = () => {
    const { orderId } = useParams();
    const [locationDetails, setLocationDetails] = useState([]);
    const [singleLocation, setSingleLocation] = useState([]);

    // data loaded
    useEffect(() => {
        fetch("http://localhost:5000/locations")
            .then(res => res.json())
            .then(data => setLocationDetails(data))
    }, []);

    // data loaded after calling and set depandency
    useEffect(() => {
        const foundBlog = locationDetails.find(location => location.id == orderId);
        setSingleLocation(foundBlog);
    }, [locationDetails, orderId]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className='my-5'>
                        <Card className='mx-auto'>
                            <Card.Img className="animate__animated animate__backInLeft" variant="top" src={singleLocation?.img} />
                            <Card.Body>
                                <Card.Title>Name: {singleLocation?.name}</Card.Title>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Card.Text className="text-start text-dark mt-2 fs-6 ms-3">Price: &#36;{singleLocation?.price}/person</Card.Text>
                                    <Card.Text className="text-start text-dark fs-6 ms-2 me-2"><i className="fas fa-user-clock me-1"></i>Duration: {singleLocation?.time}</Card.Text>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Card.Text className="text-start text-dark mt-2 fs-6 ms-3">Maximum People: {singleLocation?.maxPeople}</Card.Text>
                                    <Card.Text className="text-start text-dark fs-6 ms-2 me-2"><i className="fas fa-user me-1"></i>Minimum Age: {singleLocation?.minAge}</Card.Text>
                                </div>
                                <Card.Text style={{ textAlign: 'justify' }}><b>About:</b> {singleLocation?.highlights}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="col-4 mt-5">
                    <h2 className="font2 color2" >Love this tour?</h2>
                    <h1 className="fw-bold mb-3">Book Now</h1>
                    <Card>
                        <Form className="p-2">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Enter Your Address" required />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control placeholder="City Name" required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control placeholder="State Name" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPeople">
                                    <Form.Label>People</Form.Label>
                                    <Form.Control placeholder="Number of People" required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label>Total Price</Form.Label>
                                    <Form.Control placeholder="Total Price" />
                                </Form.Group>
                            </Row>

                            <Button as={Link} to="/orderComplete" variant="primary" type="submit">Book Now</Button>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;