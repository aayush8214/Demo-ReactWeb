import React from 'react'
import HowItWorks from './HowItWorks.js'
import Header from './Header'
import NavBar from './navBar'
import AboutUs from './AboutUs'
import Services from './Services'
import Contact from './Contact.js'
import Footer from './Footer.js'
import { Route, Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    <NavBar />
    <Header />
    <HowItWorks />
    <AboutUs />
    <Services />
    <Contact />
    <Footer />
    </>
  )
}

export default Home
