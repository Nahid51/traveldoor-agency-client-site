import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const OrderReview = () => {
    const { orderId } = useParams();
    const [locationDetails, setLocationDetails] = useState([]);
    const [singleLocation, setSingleLocation] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("");
    const [count, setCount] = useState("");

    const price = count * singleLocation?.price;
    const totalPrice = parseInt(price);

    const location = singleLocation?.name;
    const tripPrice = singleLocation?.price;
    console.log(location, tripPrice);

    // data loaded
    useEffect(() => {
        fetch("https://shielded-anchorage-74382.herokuapp.com/locations")
            .then(res => res.json())
            .then(data => setLocationDetails(data))
    }, []);

    // data loaded after calling and set depandency
    useEffect(() => {
        const foundLocation = locationDetails.find(location => location.id == orderId);
        setSingleLocation(foundLocation);
    }, [locationDetails, orderId]);

    const getUserName = e => {
        setName(e.target.value);
    }
    const getUserEmail = e => {
        setEmail(e.target.value);
    }
    const getUserContactNumber = e => {
        setContact(e.target.value);
    }
    const getUserAddress = e => {
        setAddress(e.target.value);
    }
    const getTotalPeople = e => {
        setCount(e.target.value);
    }
    const handlePrice = e => {
        e.preventDefault();
    }

    const handleError = () => {
        alert('Please fill the gap first');
    }

    const handleAddUser = e => {
        const data = { name, email, contact, address, count, totalPrice, location };

        fetch('https://shielded-anchorage-74382.herokuapp.com/addUser', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged === true) {
                    alert('Added successfully')
                    setName("");
                    setEmail("");
                    setAddress("");
                    setContact("");
                    setCount("");
                }
                console.log(result);
            })
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8">
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
                <div className="col-12 col-lg-4 mt-5">
                    <h2 className="font2 color2" >Love this tour?</h2>
                    <h1 className="fw-bold mb-3">Book Now</h1>
                    <Card>
                        <Form>
                            <Form.Group as={Col} className="my-3" controlId="formHorizontalName">
                                <Col className="mx-auto" sm={10}>
                                    <Form.Text type="text" placeholder="Name" required >{`Booking for: ${singleLocation?.name}`}</Form.Text>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Col} className="my-3" controlId="formHorizontalName">
                                <Col className="mx-auto" sm={10}>
                                    <Form.Control onBlur={getUserName} type="text" placeholder="Name" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Col} className="my-3" controlId="formHorizontalEmail">
                                <Col className="mx-auto" sm={10}>
                                    <Form.Control onBlur={getUserEmail} type="email" placeholder="Email" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Col} className="my-3" controlId="formHorizontalContact">
                                <Col className="mx-auto" sm={10}>
                                    <Form.Control onBlur={getUserContactNumber} type="number" placeholder="Contact Number" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Col} className="my-3" controlId="formHorizontalAddress">
                                <Col className="mx-auto" sm={10}>
                                    <Form.Control onBlur={getUserAddress} type="text" placeholder="Address" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formHorizontalCount">
                                <Col className="mx-auto" sm={10}>
                                    <Form.Control onBlur={getTotalPeople} type="number" placeholder="Number of People" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Col sm={6}>
                                    <Button onClick={handlePrice} className="color11" type="submit">Price</Button>
                                </Col>
                                <Col sm={4}>
                                    <Form.Text required>ToTal Price: &#36;{totalPrice}</Form.Text>
                                </Col>
                                {/* <Form.Text required>Booking for: {location}</Form.Text> */}
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formHorizontalPrice">

                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    {name && address && count ?
                                        <Button onClick={handleAddUser} className="color22" type="submit">Booked</Button> :
                                        <Button onClick={handleError} className="color22">Booked</Button>
                                    }
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;