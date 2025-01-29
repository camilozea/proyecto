import React from "react";

function Adopta() {
  const animales = [
    {
      nombre: "Barbie",
      tipo: "Perra",
      edad: "3 años",
      raza: "Chanda",
      descripcion:
        "Barbie es un perra cariñoso y enérgica con muchos papas . Le encanta jugar, hacer nuevos amigos y disfrutar de largas caminatas en el Parque .",
      img: "https://cdn.pixabay.com/photo/2019/08/19/07/46/pets-4415653_1280.jpg",
    },
    {
      nombre: "Luna",
      tipo: "Gato",
      edad: "2 años",
      raza: "Siamés",
      descripcion:
        "Luna es una gata tranquila y elegante. Le encanta descansar en lugares soleados y es muy cariñosa con su familia.",
      img: "https://cdn.pixabay.com/photo/2016/11/04/03/20/cat-1796834_1280.jpg",
    },
    {
      nombre: "Rocky",
      tipo: "Conejo",
      edad: "1 año",
      raza: "Enano Holandés",
      descripcion:
        "Rocky es un conejito juguetón y simpático que adora explorar su entorno y disfrutar de verduras frescas.",
      img: "https://cdn.pixabay.com/photo/2015/05/20/07/11/hare-774906_960_720.jpg",
    },
    {
      nombre: "Coco",
      tipo: "Perico",
      edad: "1 año",
      raza: "Perico Australiano",
      descripcion:
        "Coco es un perico parlante y lleno de energía. Le encanta interactuar y puede aprender trucos con paciencia.",
      img: "https://cdn.pixabay.com/photo/2018/09/06/15/52/parrots-3658580_960_720.jpg",
    },
    {
      nombre: "Bella",
      tipo: "Tortuga",
      edad: "5 años",
      raza: "Tortuga de Tierra",
      descripcion:
        "Bella es una tortuga tranquila y fácil de cuidar. Le gusta tomar el sol y disfrutar de su entorno sin prisas.",
      img: "https://cdn.pixabay.com/photo/2020/11/06/18/19/tortoise-5718544_1280.jpg",
    },
  ];
  return (
    <section id="adopta">
      <div
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          padding: "25px",
        }}
      >
        {/* Sección de invitación a la adopción */}
        <div style={{ textAlign: "center", gap: "20px" }}>
          <h1
            style={{
              fontFamily: "Lilita One, serif",
              fontSize: "60px",
              margin: "20px",
              color: "rgb(88, 84, 66)",
              padding: "20px",
            }}
          >
            ¡Adopta un amigo hoy!
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "25px",
              fontFamily: "Roboto, serif",
              color: "rgb(85, 80, 73)",
            }}
          >
            Dale una nueva oportunidad a un ser que te brindará amor y compañía.
            ¡Haz la diferencia y cambia una vida!
          </p>
        </div>

        {/* Cards de mascotas */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {animales.map((animal, index) => (
            <div key={index} style={cardStyle}>
              <img src={animal.img} alt={animal.nombre} style={imgStyle} />
              <h3>{animal.nombre}</h3>
              <p>
                <strong>Tipo:</strong> {animal.tipo}
              </p>
              <p>
                <strong>Edad:</strong> {animal.edad}
              </p>
              <p>
                <strong>Raza:</strong> {animal.raza}
              </p>
              <p>{animal.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Estilos para las cards
const cardStyle = {
  backgroundColor: "rgb(247,244,233)",
  borderRadius: "10px",
  width: "250px",
  margin: "10px",
  padding: "15px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
  fontfamily: "Roboto, serif",
  fontSize: " 20px",
  color: "rgb(85, 80, 73)",
  lineHeight: "1.2",
};

const imgStyle = {
  width: "100%",
  borderRadius: "8px",
  marginBottom: "10px",
};

export default Adopta;
