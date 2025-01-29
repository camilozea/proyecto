import React, { Fragment } from "react";
import Footer from "./Footer";
import Contact from "./conctactanos";
function acerca_de() {
  return (
    <section id="acerca_de">
      <div
        className="container-principal"
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          margin: "0 10 vw",
        }}
      >
        <div className="container-tilte" style={{ margin: "50px" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "60px",
              fontFamily: "Lilita One, serif",
              color: "rgb(88, 84, 66)",
              padding: "22px",
            }}
          >
            {" "}
            Acerca de Nosotros{" "}
          </h1>
        </div>
        <div
          className="container-conten"
          style={{ display: "flex", margin: "0 10vw" }}
        >
          <img
            style={{ height: "20%", width: "20%" }}
            src="./src/assets/img/dog.png"
            alt=""
          />
          <p
            style={{
              textAlign: "justify",
              fontFamily: "Roboto, serif",
              fontSize: "24px",
              color: "rgb(85, 80, 73)",
              margin: "0 5vw",
            }}
          >
            Zea Pet Foster es una fundación dedicada a brindar una segunda
            oportunidad a animales en situación de abandono, maltrato o riesgo,
            conectándolos con familias temporales amorosas mientras encuentran
            su hogar definitivo. Nuestra misión es promover la adopción
            responsable, garantizando el bienestar de cada mascota a través de
            programas de acogida, rehabilitación y educación sobre el cuidado
            animal. Trabajamos en estrecha colaboración con rescatistas,
            veterinarios y voluntarios para asegurar que cada perro y gato
            reciba la atención médica y emocional que necesita antes de ser
            adoptado. Además, ofrecemos asesoramiento a las familias interesadas
            en adoptar, garantizando una integración exitosa del nuevo miembro
            en su hogar. En Pet Foster, creemos que cada mascota merece una vida
            llena de amor y seguridad. ¡Únete a nuestra causa y ayúdanos a
            darles una nueva oportunidad!
          </p>
        </div>
        <div className="container-tilte" style={{}}>
          <h3
            style={{
              textAlign: "center",
              fontSize: "60px",
              fontFamily: "Lilita One, serif",
              color: "rgb(88, 84, 66)",
              padding: "25px",
              margin: "0 10vw",
            }}
          >
            {" "}
            Nuestra Misión{" "}
          </h3>

          <div style={{ display: "flex", margin: "0 10vw" }}>
            <p
              style={{
                textAlign: "left",
                fontFamily: "Roboto, serif",
                fontSize: "24px",
                color: "rgb(85, 80, 73)",
              }}
            >
              {" "}
              <ul style={{ textAlign: "justify", margin: "0 5vw" }}>
                <li>
                  1.Rescatar animales en condiciones vulnerables y
                  proporcionarles los cuidados médicos necesarios.
                </li>
                <br />
                <li>
                  2.Fomentar la adopción responsable asegurándonos de que cada
                  mascota encuentre el hogar adecuado.
                </li>
                <br />
                <li>
                  3.Sensibilizar a la comunidad sobre la importancia del
                  bienestar animal a través de campañas educativas.
                </li>
                <br />
                <li>
                  4.Promover la esterilización como una solución efectiva para
                  reducir la sobrepoblación de animales callejeros.
                </li>
                <br />
                <li>
                  5.Brindar apoyo continuo a las familias adoptivas y de acogida
                  para garantizar el bienestar de cada mascota.
                </li>
                <br />
              </ul>
            </p>

            <img
              style={{ height: "20%", width: "20%" }}
              src="./src/assets/img/dog.png"
              alt=""
            />
          </div>
        </div>

        <div>
          <div>
            <h3
              style={{
                textAlign: "center",
                fontSize: "60px",
                fontFamily: "Lilita One, serif",
                color: "rgb(88, 84, 66)",
                padding: "25px",
                margin: "0 10vw",
              }}
            >
              {" "}
              Nuestro Servicio{" "}
            </h3>
          </div>

          <div style={{ display: "flex", margin: "0 10vw" }}>
            <img
              style={{ height: "20%", width: "20%" }}
              src="./src/assets/img/dog.png"
              alt=""
            />

            <p
              style={{
                textAlign: "justify",
                fontFamily: "Roboto, serif",
                fontSize: "24px",
                color: "rgb(85, 80, 73)",
              }}
            >
              En Zea Pet Foster Trabajamos para :
              <ol
                style={{
                  textAlign: "justify",
                  fontFamily: "Roboto, serif",
                  fontSize: "24px",
                  color: "rgb(85, 80, 73)",
                  margin: "0 5vw",
                }}
              >
                <br />
                <li>
                  1. Programas de Acogida Temporal Las familias de acogida
                  juegan un papel fundamental en el proceso de rehabilitación de
                  los animales rescatados. Proporcionamos recursos y
                  capacitación para asegurar que las mascotas reciban el amor y
                  los cuidados adecuados mientras esperan su adopción
                  definitiva.
                </li>

                <br />
                <li>
                  2. Rescate y Rehabilitación Contamos con un equipo de
                  voluntarios y veterinarios que trabajan en el rescate de
                  animales en peligro, brindándoles atención médica,
                  vacunaciones, desparasitación, esterilización y rehabilitación
                  emocional.
                </li>

                <br />
                <li>
                  3. Proceso de Adopción Responsable Llevamos a cabo un riguroso
                  proceso de adopción que incluye entrevistas, visitas
                  domiciliarias y seguimiento post-adopción para garantizar que
                  cada mascota encuentre un hogar seguro y amoroso.
                </li>

                <br />

                <li>
                  4. Educación y Concienciación Realizamos talleres, charlas y
                  campañas en redes sociales para educar a la comunidad sobre
                  tenencia responsable, derechos de los animales y la
                  importancia de la adopción.
                </li>

                <br />

                <li>
                  5. Eventos de Adopción y Recaudación de Fondos Organizamos
                  eventos periódicos donde las personas pueden conocer a
                  nuestras mascotas disponibles para adopción y contribuir con
                  donaciones que permiten continuar nuestra labor.
                </li>
              </ol>
            </p>
            <br />
          </div>
        </div>

        <div>
          <h3
            style={{
              textAlign: "center",
              fontSize: "60px",
              fontFamily: "Lilita One, serif",
              color: "rgb(88, 84, 66)",
              padding: "25px",
              margin: "0 10vw",
            }}
          >
            Como Puedes Ayudar{" "}
          </h3>
          <div style={{ display: "flex", margin: "0 10vw" }}>
            <p
              style={{
                textAlign: "justify",
                fontFamily: "Roboto, serif",
                fontSize: "24px",
                color: "rgb(85, 80, 73)",
                margin: "0 5vw",
              }}
            >
              Existen muchas formas de apoyar nuestra causa:
              <ul
                style={{
                  textAlign: "justify",
                  fontFamily: "Roboto, serif",
                  fontSize: "24px",
                  color: "rgb(85, 80, 73)",
                  margin: "0 5vw",
                }}
              >
                <br />
                <li>Adoptando: Dale un hogar a una mascota necesitada.</li>
                <br />
                <li>
                  Acogiendo: Brinda un espacio temporal a un animal mientras
                  encuentra su familia definitiva.
                </li>
                <br />
                <li>
                  Donando: Contribuye con alimentos, insumos médicos o recursos
                  económicos.
                </li>
                <br />
                <li>
                  Voluntariado: Únete a nuestro equipo y ayuda en el rescate,
                  cuidado y eventos de adopción.
                </li>
                <br />
                <li>
                  Difundiendo: Comparte nuestras publicaciones en redes sociales
                  para llegar a más personas. Contáctanos
                </li>
                <br />
              </ul>
            </p>

            <img
              style={{ height: "20%", width: "20%" }}
              src="./src/assets/img/dog.png"
              alt=""
            />
          </div>
          <Contact />
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default acerca_de;
