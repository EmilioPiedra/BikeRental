import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import IniciarSesion from "./IniciarSesion";
import Registrarse from "./Registrarse";
import Home from "./Home";
import "./styles.css";
const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/iniciar-sesion" element={<IniciarSesion />} />
                    <Route path="/registrarse" element={<Registrarse />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
