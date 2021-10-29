import React from 'react';
import { Card, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import 'animate.css';

const Blog = ({ place }) => {
    const { img, name } = place;
    return (
        <div>
            <Col className="container mx-auto">
                <Card>
                    <Card.Img className="rounded animate__animated animate__backInRight p-2" style={{ height: "25rem" }} variant="top" src={img} />
                    <Card.ImgOverlay>
                        <div className="position-absolute bottom-0 start-50 translate-middle-x">
                            <Card.Text className="font2 fw-bold text-white fs-2 mb-2">{name}</Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </div>
    );
};

export default Blog;
// as = { Link } to = {`/blog/${id}`}