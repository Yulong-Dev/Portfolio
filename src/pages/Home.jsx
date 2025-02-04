import React from 'react';
import '../components/Navbar/Navbar.css';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div id='home'>
        <Navbar/>
        <Hero/>
        <Footer/>
 
    </div>
  )
}

export default Home
