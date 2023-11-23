import React from "react";
import imagen from "./imagenes/imagen.jpg";
import imagen1 from "./imagenes/urban bike.jpg";
import Footer from "./Footer"; // Importa el componente Footer

const Home = () => {
    return (
        <div>
            <h2 className="texto-izquierda">ALQUILER DE BICICLETAS</h2>
            <img
                src={imagen}
                alt="imagen1"
                style={{ width: "100%", height: "170px", objectFit: "cover", objectPosition: "90% 90%" }}
            />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ flex: 1 }}>
                    <h2 className="texto-izquierda">Renta una bici y <span style={{ color: '#C5A76A' }}>#QueNadaTeDetenga</span></h2>
                    <p className="texto-grande texto-izquierda ">BikeRenta te ofrece servicio de alquiler de bicicletas para montaña, ruta y/o ciclo paseo en la modalidad que prefieras para disfrutar del ciclismo sin preocupaciones.</p>
                </div>

                <div style={{ flex: 1 }}>
                    <h2 className="texto-derecha">Beneficios para tí:</h2>
                    <div className="texto-grande texto-derecha">
                        <li>Vida mas saludable</li>
                        <li>Ayudas a la naturaleza</li>
                        <li>Previene enfermedades</li>
                        <li>Te ayuda a bajar de peso.</li>
                        <li>Disminuye la tensión arterial.</li>
                        <li>Te ayuda a perder peso.</li>
                        <li>Fortalece los músculos.</li>
                        <li>Ahorrás en combustible.</li>
                        <li>Disminuye la ansiedad.</li>
                    </div>
                    <div style={{ flex: 1 }} >
                        <h2 className="texto-izquierda">Requisitos:</h2>
                        <div className="texto-grande texto-izquierda">
                            <li>Tener más de 14 años</li>
                            <li>Recepción de datos personales y firma</li>
                            <li>Documento cédula y licencia de conducir *Entregar en la tienda</li>
                            <li>Para uso entrega de garantía obligatoria reembolsable</li>
                            <li>Contrato (Leer)</li>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={imagen1}
                alt="imagen2"
                style={{ width: "430px", height: "215px", borderRadius: "12px" }}
            />
            <Footer />
        </div>
    );
};

export default Home;
