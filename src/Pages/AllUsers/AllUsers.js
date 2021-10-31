import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(result => setUsers(result))
    }, [count]);
    console.log(users);
    const handleDelete = id => {
        const procced = window.confirm('Are you sure to delete this user?')
        if (procced) {
            fetch(`http://localhost:5000/user/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
            })
                .then(res => res.json())
                .then(result => setCount(result))
        }
    }

    return (
        <div>
            <h2>All Booking User list</h2>
            <div>
                <Row xs={3} md={6} className="g-4">
                    {users.map(user => <div key={user?._id}>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Name: {user?.name}</Card.Title>
                                    <Card.Text>Email: {user.email}</Card.Text>
                                    <Card.Text>Contact Number: {user.contact}</Card.Text>
                                    <Card.Text>Address: {user.address}</Card.Text>
                                    <Card.Text>Booking {user.count} sits for - ({user.location}) - trip.</Card.Text>
                                </Card.Body>
                                <Button onClick={() => handleDelete(user._id)} className="btn color11 mx-auto mb-2">Delete</Button>
                                <Link to={`/singleUser/${user._id}`}><Button className="btn color22 mx-auto mb-2">Update</Button></Link>
                            </Card>
                        </Col>
                    </div>)}
                </Row>
            </div>
        </div >
    );
};

export default AllUsers;