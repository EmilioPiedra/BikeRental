import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoImage from "./imagenes/rueda-dentada.png";
import { Icon } from '@iconify/react';
import "./styles.css";
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary custom-navbar">
            <div className="container-fluid" >
                <div className="navbar-brand d-flex align-items-center">
                    <img
                        src={logoImage}
                        alt="Logo"
                        style={{ width: "50px", height: "50px", marginRight: "15px" }}
                    />
                    <Link to="/home" className="nav-link">
                        <h1 style={{ display: "inline", color: "black" }}>BikeRental</h1>
                    </Link>
                </div>
                <div className="d-flex align-items-center">
                    <Icon icon="bx:user" className="icono-usuario" style={{ color: 'white' }} />
                    <Link to="/iniciar-sesion" className="nav-link mx-3" style={{ color: 'white' }}>
                        <h2>Iniciar Sesión</h2>
                    </Link>

                    <Link to="/registrarse" className="nav-link" style={{ color: 'white' }}>
                        <h2>Registrarse</h2>
                    </Link>
                </div>
            </div >
        </nav >
    );
};
export default Navbar;