import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Location = ({ location }) => {
    const { id, price, time, img, name, minAge } = location;
    return (
        <div>
            <Col className="container mx-auto">
                <Card>
                    <div>
                        <Card.Img className="rounded animate__animated animate__backInRight p-2" style={{ height: "20rem" }} variant="top" src={img} />
                        <Card.ImgOverlay>
                            <div className="position-absolute bottom-0 start-0">
                                <Card.Text className="font2 fw-bold text-white fs-4 mb-2 ms-3">&#36;{price}</Card.Text>
                            </div>
                            <div className="position-absolute bottom-0 end-0">
                                <Card.Text className="font2 fw-bold text-white fs-2 mb-2 me-3">{time}</Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </div>
                </Card>
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Text className="text-start text-dark fw-bold mt-2 fs-6 ms-3">{name}</Card.Text>
                        <Card.Text className="text-start text-dark fs-6 ms-2 me-2"><i className="fas fa-user me-1"></i>{minAge}</Card.Text>
                    </div>
                    <Button as={Link} to={`/orderReview/${id}`} className="btn color11">Booking Now</Button>
                </div>
            </Col>
        </div>
    );
};

export default Location;