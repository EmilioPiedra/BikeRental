// IniciarSesion.js

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "./Footer";
import "./styles.css";

const IniciarSesion = () => {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <div className="fondo-iniciar-sesion d-flex flex-grow-1 justify-content-center align-items-center">
                <Container>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            <h2 className="text-center mb-4">Iniciar Sesión</h2>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="email" placeholder="Ingresa tu correo electrónico" className="border-0 border-bottom mb-3" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Ingresa tu contraseña" className="border-0 border-bottom mb-3" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mi-boton-personalizado w-100">
                                    Iniciar Sesión
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default IniciarSesion;
