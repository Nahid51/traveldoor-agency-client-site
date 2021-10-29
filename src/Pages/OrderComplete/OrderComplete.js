import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../Images/Work_6.jpg';

const OrderComplete = () => {
    return (
        <div>
            <Card className="bg-dark text-white w-50 mx-auto">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay className="text-dark">
                    <Card.Title className="font2 color1 fs-3">You are successfully booking up your trip.</Card.Title>
                    <Card.Text className="font color2 fs-4">
                        Wish You a happy journey.
                    </Card.Text>
                    <Button as={Link} to="/" className="btn color11 mb-2 position-absolute bottom-0 start-50 translate-middle-x">Home</Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default OrderComplete;