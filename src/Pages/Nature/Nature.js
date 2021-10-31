import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nature.css';

const Nature = () => {
    return (
        <div>
            <Card className="text-white my-5 border-0">
                <Card.Img className="bg-img" src="https://i.ibb.co/2WnWCMF/full-shot-couple-holding-hands-nature.jpg" alt="Card image" />
                <Card.ImgOverlay className="text-center">
                    <Card.Title className="font2 fw-bold color2 font3 ">Special offer from us.</Card.Title>
                    <Card.Title className="font2 fw-bold color1 font3 ">Weekend tour in Europe, Paris.</Card.Title>
                    <Card.Text style={{ fontWeight: "300" }} className=" font4">
                        We declare a special offer last year and we got a big response from that. <br /> Because of that, we give another special offer this year. This special offer for every couple.
                    </Card.Text>
                    <Card.Text className="font4">Meet us and Book this special offer.</Card.Text>
                </Card.ImgOverlay>
                <Button as={Link} to="/error" className="btn mx-auto color11">Booking Now</Button>
            </Card>
        </div>
    );
};

export default Nature;