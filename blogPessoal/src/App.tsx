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
import DeletarPostagem from "./Components/Postagens/deletarPostagem/DeletarPostagem";
import CadastroTema from "./Components/Temas/cadastroTema/CadastroTema";
import CadastroPostagem from "./Components/Postagens/cadastroPostagem/CadastroPostagem";
import DeletarTema from "./Components/Temas/deletarTema/DeletarTema";
import { Provider } from "react-redux";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
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

          <Route path="/formularioPostagem" element={<CadastroPostagem/>}/>

          <Route path="/formularioPostagem/:id" element={<CadastroPostagem/>}/>
          
          <Route path="/formularioTema" element={<CadastroTema/>}/>

          <Route path="/formularioTema/:id" element={<CadastroTema/>}/>

          <Route path="/deletarPostagens/:id" element={<DeletarPostagem/>}/>

          <Route path="/deletarTema/:id" element={<DeletarTema/>}/>


        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;

/*  <Route path="/cadastro" element={<CadastroUsuario />} /> */
