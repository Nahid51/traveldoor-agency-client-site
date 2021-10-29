import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../Images/2093110 (1).jpg'

const NotFound = () => {
    return (
        <div>
            <Card className="my-5 bg-dark text-white w-50 mx-auto">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay className="row">
                    <Button as={Link} to="/" className="mt-auto" variant="danger">Go Back Home</Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default NotFound;