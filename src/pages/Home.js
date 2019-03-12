import React, { Component } from 'react';
import resumeData from '../resumeData';
import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="App">
            <Header resumeData={resumeData}/>
            <About resumeData={resumeData}/>
            <Resume resumeData={resumeData}/>
            <Portfolio resumeData={resumeData}/>
            <ContactUs resumeData={resumeData}/>
            <Footer resumeData={resumeData}/>
      </div>
    )
}

export default Home;