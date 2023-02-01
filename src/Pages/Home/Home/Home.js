import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <h1 className='mt-10 font-bold text-gray-500 text-4xl text-center'>This is an Home</h1>
           <Banner />
           <About />
           <Services />
        </div>
    );
};

export default Home;