import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './Landing_Page/Home'
import Aboutus from './About/Aboutus'
import AddHome from './Admission_Page/Add_home';
import Footer from './Footer';
import Nav from './Landing_Page/Nav'
import GalleryHome from './Gallery/GalleryHome';
import ContactHome from './Contact_us/ContactHome';
import CBY from './CBY';
// import GreenBot from './Bot';

const App = () => {


  return (
    <>
      <Nav />

      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='Aboutus' element={<Aboutus />}></Route>
        <Route path='AddHome' element={<AddHome />}></Route>
        <Route path='GalleryHome' element={<GalleryHome />}></Route>
        <Route path='ContactHome' element={<ContactHome />}></Route>
      </Routes>


      {/* <GreenBot /> */}
      <Footer />
      <CBY></CBY>
    </>
  );
}

export default App
