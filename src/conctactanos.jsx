function contact() {
  return (
    <section id="contact">
      <div
        style={{
          backgroundColor: "rgb(247,244,233",
          padding: "10px, 0",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ padding: "30px 30px 0 0", justifyContent: "center" }}>
            <h1
              style={{
                color: "rgb(88, 84, 66)",
                textAlign: "center",
                fontSize: "60px",
                fontFamily: "Lilita One, serif",
              }}
            >
              {" "}
              Contactanos
            </h1>
          </div>
        </div>
        <div style={{ padding: "25px", justifyContent: "center" }}>
          <p
            style={{
              textAlign: "justify",
              fontFamily: "Roboto, serif",
              fontSize: "24px",
              color: "rgb(85, 80, 73)",
              margin: "0 10vw",
            }}
          >
            {" "}
            Si deseas formar parte de la familia Zea Pet House, adoptar una
            mascota o colaborar con nuestra fundación, puedes comunicarte con
            nosotros a través de este formulario. ¡Estamos ansiosos por
            escucharte! :
          </p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(192, 186, 167, 0.43)",
            padding: "20px",
            justifyContent: "center",
            margin: "0 20vw",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "20px",
          }}
        >
          <form
            className="contact-form"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <label
              style={{
                fontFamily: "Lilita One, serif",
                color: "rgb(88, 84, 66)",
              }}
            >
              Nombres
            </label>
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre"
              required
              style={{
                border: "1px solid  rgba(0,0,0,0.1)",
                borderRadius: "10px",
                padding: "7px",
              }}
            />
            <label
              style={{
                fontFamily: "Lilita One, serif",
                color: "rgb(88, 84, 66)",
              }}
            >
              Apellidos
            </label>
            <input
              type="text"
              name="Apellido"
              placeholder="Apellido"
              required
              style={{
                border: "1px solid  rgba(0,0,0,0.1)",
                borderRadius: "10px",
                padding: "7px",
              }}
            />
            <label
              style={{
                fontFamily: "Lilita One, serif",
                color: "rgb(88, 84, 66)",
              }}
            >
              Telefono
            </label>
            <input
              type="number"
              name="Telefono"
              placeholder="Telefono"
              required
              style={{
                border: "1px solid  rgba(0,0,0,0.1)",
                borderRadius: "10px",
                padding: "7px",
              }}
            />
            <label
              style={{
                fontFamily: "Lilita One, serif",
                color: "rgb(88, 84, 66)",
              }}
            >
              Correo
            </label>
            <input
              type="email"
              name="email"
              placeholder="Correo"
              required
              style={{
                border: "1px solid  rgba(0,0,0,0.1)",
                borderRadius: "10px",
                padding: "7px",
              }}
            />
            <label
              style={{
                fontFamily: "Lilita One, serif",
                color: "rgb(88, 84, 66)",
              }}
            >
              Motivo
            </label>
            <textarea
              type="text"
              name="Motivo"
              placeholder="Motivo"
              required
              style={{
                border: "1px solid  rgba(0,0,0,0.1)",
                borderRadius: "10px",
                padding: "25px",
              }}
            />

            <button
              style={{
                backgroundColor: "rgb(156,97,240)",
                margin: "10px",
                borderRadius: "10px",
                color: "white",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              Enviar{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default contact;
