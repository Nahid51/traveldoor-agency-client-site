import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Locations from '../Locations/Locations';
import Places from '../Places/Places';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Locations></Locations>
            <Places></Places>
        </div>
    );
};

export default Home;