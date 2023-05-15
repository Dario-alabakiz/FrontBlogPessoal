import React from 'react';
import Navbar from './Components/estaticos/Navbar/Navbar';
import Footer from './Components/estaticos/Footer/Footer';
import Home from "./paginas/home/Home";
import './App.css';


function App() {
  return (
    <>
  <Navbar/>

  <Home/>

  <Footer/>
    </>
  );
}

export default App;