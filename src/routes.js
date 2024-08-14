import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/home/index.js";
import Cadastro from "./paginas/cadastro/index.js";
import Login from "./paginas/login/index.js";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Cadastro/>} />
        <Route exact={true} path="/home" element={<Home/>} />
        <Route exact={true} path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;
