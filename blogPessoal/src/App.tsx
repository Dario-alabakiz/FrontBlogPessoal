import React from "react";
import "./App.css";
import Navbar from "./Components/estaticos/Navbar/Navbar";
import Footer from "./Components/estaticos/Footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaPostagens from "./Components/Postagens/listaPostagens/ListaPostagens";
import ListaTema from "./Components/Temas/listaTema/ListaTema";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          {" "}
          // Antigo Switch
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/cadastroUsuario" element={<CadastroUsuario />}/>

          <Route path="/Postagens" element={<ListaPostagens/>}/>

          <Route path="/Temas" element={<ListaTema/>}/>
          
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

/*  <Route path="/cadastro" element={<CadastroUsuario />} /> */
