import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Locations from '../Locations/Locations';
import Nature from '../Nature/Nature';
import Places from '../Places/Places';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Locations></Locations>
            <Places></Places>
            <Nature></Nature>
        </div>
    );
};

export default Home;