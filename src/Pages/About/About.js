import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="my-5" style={{ backgroundColor: "#eee4e4" }}>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className="border-0" style={{ backgroundColor: "#eee4e4" }}>
                        <Card.Body className="p-5 fs-1 text-end my-auto text-justify">
                            It's Time for a new Adventure! Don't Wait Any Longer.
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0" style={{ backgroundColor: "#eee4e4" }}>
                        <Card.Body>
                            <Card.Text className="text-start p-5" style={{ fontWeight: "300" }}>
                                Our team of travel insiders is obsessed with finding the best things to do everywhere we travel. From Paris to Phuket to Perth, from traditional tours to once-in-a-lifetime experiences, we have something for every kind of traveler. And we are proud to say that after 10 experience-packed years, we are the world leader. When planning your trip, why start anywhere else?
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0" style={{ backgroundColor: "#eee4e4" }}>
                        <div className="p-5">
                            <Card.Img className="rounded border border-5" variant="top" src="https://i.ibb.co/k8HF9sr/about.jpg" />
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default About;