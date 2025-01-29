import React from "react";
import Acerca_de from "./acerca_de";
function Colabora() {
  return (
    <section id="colabora">
      <div style={{ backgroundColor: "rgb(247,244,233)", height: "100vh" }}>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Lilita One, serif",
            fontSize: "60px",
            margin: "20px",
            color: "rgb(88, 84, 66)",
            padding: "20px",
          }}
        >
          Colabora con Nosotros{" "}
        </h1>
        <p
          style={{
            textAlign: "justify",
            fontFamily: "Roboto, serif",
            fontSize: "25px",
            color: "rgb(85, 80, 73)",
            margin: "0 10vh",
          }}
        >
          {" "}
          La adopción de mascotas no solo cambia la vida de un animal, sino que
          también tiene un impacto positivo en nuestra comunidad. Si eres una
          persona con amor y compromiso, o una empresa que busca contribuir al
          bienestar animal, tu colaboración es invaluable. Puedes apoyar con
          donaciones, ofreciendo tu espacio como hogar temporal o ayudando a
          difundir el mensaje de adopción. Cada pequeño gesto cuenta, y juntos
          podemos darles a estas mascotas una segunda oportunidad para ser
          felices. ¡Colabora y transforma vidas hoy mismo!
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <div style={cardStyle}>
            <img
              src="https://www.shutterstock.com/shutterstock/photos/581080297/display_1500/stock-vector-dog-lover-vector-logo-template-vector-silhouette-of-people-with-dog-on-a-white-background-vector-581080297.jpg"
              alt=""
              style={img}
            />
          </div>

          <dic style={cardStyle}>
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2308018477/display_1500/stock-vector-dog-gradient-colorful-logo-vector-icon-illustration-2308018477.jpg"
              alt=""
              style={img}
            />
          </dic>

          <div style={cardStyle}>
            <img
              style={img}
              src="https://www.shutterstock.com/shutterstock/photos/1727867296/display_1500/stock-vector-vector-logo-illustration-dog-gradient-colorful-style-1727867296.jpg"
              alt=""
            />
          </div>

          <div style={cardStyle}>
            <img
              style={img}
              src="https://www.shutterstock.com/shutterstock/photos/2487019977/display_1500/stock-vector-vector-logo-illustration-phoenix-line-art-style-2487019977.jpg"
              alt=""
            />
          </div>

          <div style={cardStyle}>
            <img
              style={img}
              src="https://www.shutterstock.com/shutterstock/photos/2170494825/display_1500/stock-vector-cute-kitsune-logo-for-company-2170494825.jpg"
              alt=""
            ></img>
          </div>

          <div style={cardStyle}>
            <img
              style={img}
              src="https://www.shutterstock.com/shutterstock/photos/2472171127/display_1500/stock-vector-vector-logo-illustration-beaver-mascot-cartoon-style-2472171127.jpg"
              alt=""
            />
          </div>

          <div style={cardStyle}>
            <img
              style={img}
              src="https://www.shutterstock.com/shutterstock/photos/2223051841/display_1500/stock-vector-whale-with-splash-water-illustrated-as-icon-or-logo-2223051841.jpg"
              alt=""
            />
          </div>

          <div style={cardStyle}>
            <img
              style={img}
              src="https://www.shutterstock.com/shutterstock/photos/2475506059/display_1500/stock-vector-vector-logo-illustration-kitsune-mask-simple-mascot-style-2475506059.jpg"
              alt=""
            />
          </div>
        </div>
        <Acerca_de />
      </div>
    </section>
  );
}

const cardStyle = {
  padding: "30px",
  margin: "30px,30px",
};

const img = {
  width: "200px",
  height: "200px",
  borderRadius: "100%",
};
export default Colabora;
