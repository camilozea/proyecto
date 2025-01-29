function Footer() {
  return (
    <section id="footer">
      <div
        style={{
          backgroundColor: "rgb(88, 84, 66)",
          color: "white",
          margin: " 100 px 0 0 0",
        }}
      >
        <footer>
          <div
            style={{
              padding: "3vh 0",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <h5
              style={{
                textAlign: "left",
                margin: "5px",
                fontFamily: "Lilita One, serif",
              }}
            >
              {" "}
              Zea Pet House © 2025{" "}
            </h5>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                style={{ margin: "0 10px" }}
                href="https://www.facebook.com/"
                target="_blank"
              >
                <img
                  src="./src/assets/img/facebook.png"
                  alt="Facebook"
                  style={{ width: "2em", height: "2em", filter: "invert(1)" }}
                />
              </a>
              <a
                style={{ margin: "0 10px" }}
                href="https://whatsapp.com/"
                target="_blank"
              >
                <img
                  src="./src/assets/img/whatsapp.png"
                  alt="Twitter"
                  style={{ width: "2em", height: "2em", filter: "invert(1)" }}
                />
              </a>
              <a
                style={{ margin: "0 10px" }}
                href="https://www.instagram.com/"
                target="_blank"
              >
                <img
                  src="./src/assets/img/instagram.png"
                  alt="Instagram"
                  style={{ width: "2em", height: "2em", filter: "invert(1)" }}
                />
              </a>
            </div>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5px",
                fontFamily: "Lilita One, serif",
              }}
            >
              Todos los Derechos Reservados
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
