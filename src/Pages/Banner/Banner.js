import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
import '../../App.css'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/HNg3h8D/b7.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Travel the World</h2>
                        <h1>ENJOY YOUR IDEAL JOURNEY</h1>
                        <Button as={Link} to="/about" className="btn color11">Know More</Button>{' '}
                        <Button as={Link} to="/contact" className="btn color22">Contact Us</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Xj84sHH/b9.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2>Travel The Worlds</h2>
                        <h1>ENJOY YOUR IDEAL JOURNEY</h1>
                        <Button as={Link} to="/about" className="btn color11">Our Company</Button>{' '}
                        <Button as={Link} to="/contact" className="btn color22">Contact Us</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/YTmtP62/b3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>Travel The Worlds</h2>
                        <h1>ENJOY YOUR IDEAL JOURNEY</h1>
                        <Button as={Link} to="/about" className="btn color11">Our Company</Button>{' '}
                        <Button as={Link} to="/contact" className="btn color22">Contact Us</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/smTS037/b5.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>Travel The Worlds</h2>
                        <h1>ENJOY YOUR IDEAL JOURNEY</h1>
                        <Button as={Link} to="/about" className="btn color11">Our Company</Button>{' '}
                        <Button as={Link} to="/contact" className="btn color22">Contact Us</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/PF5Bd3h/b6.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>Travel The Worlds</h2>
                        <h1>ENJOY YOUR IDEAL JOURNEY</h1>
                        <Button as={Link} to="/about" className="btn color11">Our Company</Button>{' '}
                        <Button as={Link} to="/contact" className="btn color22">Contact Us</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;