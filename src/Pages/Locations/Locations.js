import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Location from '../Location/Location';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/locations")
            .then(res => res.json())
            .then(data => setLocations(data))
    }, []);
    return (
        <div className="container text-center py-5" style={{ backgroundColor: "#F7F7F7", overflow: "hidden" }}>
            <h2 className="font2 color2" >Take a Look at Our</h2>
            <h1 className="fw-bold mb-3">Featured Tours</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {locations.map((location) => (
                    <Location
                        key={location.id}
                        location={location}
                    ></Location>
                ))}
            </Row>
        </div>
    );
};

export default Locations;