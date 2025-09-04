import { useState } from "react";
import "./header.css";
import Body from "./body";

function Header() {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div>
      {/* Barra de navegación */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "10vh",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginLeft: "25px" }}>Zea Pet House</div>
        <div>
          <nav>
            <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
              <li>
                <a
                  href="#inicio"
                  className="nav-link"
                  onClick={() => handleClick(0)}
                  style={{
                    backgroundColor:
                      selected === 0 ? "rgb(156,97,240)" : "transparent",
                    color: selected === 0 ? "white" : "black",
                  }}
                  onMouseEnter={(e) => {
                    if (selected !== 0) {
                      e.target.style.backgroundColor = "rgb(156,97,240)";
                      e.target.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selected !== 0) {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "black";
                    }
                  }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#adopta"
                  className="nav-link"
                  onClick={() => handleClick(1)}
                  style={{
                    backgroundColor:
                      selected === 1 ? "rgb(156,97,240)" : "transparent",
                    color: selected === 1 ? "white" : "black",
                  }}
                  onMouseEnter={(e) => {
                    if (selected !== 1) {
                      e.target.style.backgroundColor = "rgb(156,97,240)";
                      e.target.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selected !== 1) {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "black";
                    }
                  }}
                >
                  Adopta
                </a>
              </li>
              <li>
                <a
                  href="#colabora"
                  className="nav-link"
                  onClick={() => handleClick(2)}
                  style={{
                    backgroundColor:
                      selected === 2 ? "rgb(156,97,240)" : "transparent",
                    color: selected === 2 ? "white" : "black",
                  }}
                  onMouseEnter={(e) => {
                    if (selected !== 2) {
                      e.target.style.backgroundColor = "rgb(156,97,240)";
                      e.target.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selected !== 2) {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "black";
                    }
                  }}
                >
                  Colabora
                </a>
              </li>
              <li>
                <a
                  href="#acerca_de"
                  className="nav-link"
                  onClick={() => handleClick(3)}
                  style={{
                    backgroundColor:
                      selected === 3 ? "rgb(156,97,240)" : "transparent",
                    color: selected === 3 ? "white" : "black",
                  }}
                  onMouseEnter={(e) => {
                    if (selected !== 3) {
                      e.target.style.backgroundColor = "rgb(156,97,240)";
                      e.target.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selected !== 3) {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "black";
                    }
                  }}
                >
                  Acerca de
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <a
            href="#contact"
            className="contact-link"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgb(156,97,240)";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "black";
            }}
          >
            Contactanos
          </a>
        </div>
      </div>

      {/* Componente Body fuera de la barra de navegación */}
      <Body />
    </div>
  );
}

export default Header;
