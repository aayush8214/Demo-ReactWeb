import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Home from './Home.js'
import Service from './Pages/Services';
import Error from './Pages/Error';


const App = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/services" element={<Service />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>
  )
}

export default App
