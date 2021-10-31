import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/user/${id}`)
            .then(res => res.json())
            .then(result => setUser(result))
    }, [id]);

    // Update User
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, email: user?.email, contact: user?.contact, address: user?.address, count: user?.count, location: user?.location };
        setUser(updatedUser);
    }

    const handleEmailChange = e => {
        const updatedEmail = e.target.value;
        const updatedUser = { name: user?.name, email: updatedEmail, contact: user?.contact, address: user?.address, count: user?.count, location: user?.location };
        setUser(updatedUser);
    }
    const handleContactChange = e => {
        const updatedContact = e.target.value;
        const updatedUser = { name: user?.name, email: user?.email, contact: updatedContact, address: user?.address, count: user?.count, location: user?.location };
        setUser(updatedUser);
    }
    const handleAddressChange = e => {
        const updatedAddress = e.target.value;
        const updatedUser = { name: user?.name, email: user?.email, contact: user?.contact, address: updatedAddress, count: user?.count, location: user?.location };
        setUser(updatedUser);
    }
    const handleTripMember = e => {
        const updateCount = e.target.value;
        const updatedUser = { name: user.name, email: user?.email, contact: user?.contact, address: user?.address, count: updateCount, location: user?.location };
        setUser(updatedUser);
    }

    const handleUpdateUser = e => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Updated successfully')
                    setUser({});
                }
            })

        e.preventDefault();
    }



    return (
        <div>
            <h2>This is single user: {id}</h2>
            <h2>User Name: {user?.name}</h2>
            <Card>
                <Form className="w-50 mx-auto">
                    <Form.Group as={Row} className="my-3" controlId="formHorizontalAddress">
                        <Col className="mx-auto" sm={6}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={handleNameChange} value={user?.name || ''} type="text" placeholder="Name" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="my-3" controlId="formHorizontalAddress">
                        <Col className="mx-auto" sm={6}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={handleEmailChange} value={user?.email || ''} type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="my-3" controlId="formHorizontalAddress">
                        <Col className="mx-auto" sm={6}>
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control onChange={handleContactChange} value={user?.contact || ''} type="email" placeholder="Contact Number" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="my-3" controlId="formHorizontalAddress">
                        <Col className="mx-auto" sm={6}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={handleAddressChange} value={user?.address || ''} type="text" placeholder="Address" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="row my-3" controlId="formHorizontalAddress">
                        <Col className="mx-auto" sm={4}>
                            <Form.Label>Trip Member</Form.Label>
                            <Form.Control onChange={handleTripMember} value={user?.count || ''} type="number" placeholder="Number of people" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="row my-3" controlId="formHorizontalAddress">
                        <Col className="mx-auto" sm={6}>
                            <Form.Label>Selected Location</Form.Label>
                            <Form.Control type="number" placeholder={user?.location || ''} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button onClick={handleUpdateUser} className="color22" type="submit">Update</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    );
};

export default SingleUser;