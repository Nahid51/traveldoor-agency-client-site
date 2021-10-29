import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Place from '../Place/Place'

const Blogs = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/destinations")
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, []);
    return (
        <div className="container text-center py-5" style={{ backgroundColor: "#F7F7F7", overflow: "hidden" }} >
            <h2 className="font2 color2" >Find A Tour By</h2>
            <h1 className="fw-bold mb-3">Destination</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {places.map((place) => (
                    <Place
                        key={place.id}
                        place={place}
                    ></Place>
                ))}
            </Row>
        </div>
    );
};

export default Blogs;