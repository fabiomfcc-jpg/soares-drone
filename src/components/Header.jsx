import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);

  const link = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "rgba(0,0,0,0.90)",
        padding: "15px 20px",
        zIndex: 9999,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "#00ff88",
            margin: 0,
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          SOARES DRONE
        </h2>

        <button
          onClick={() => setMenu(!menu)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "35px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </div>

      {menu && (
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <Link to="/" style={link} onClick={() => setMenu(false)}>
            Início
          </Link>

          <Link to="/#servicos" style={link} onClick={() => setMenu(false)}>
            Serviços
          </Link>

          <Link to="/#sobre" style={link} onClick={() => setMenu(false)}>
            Sobre
          </Link>

          <Link to="/fotos" style={link} onClick={() => setMenu(false)}>
            Fotos
          </Link>

          <Link to="/videos" style={link} onClick={() => setMenu(false)}>
            Vídeos
          </Link>

          <Link to="/#contato" style={link} onClick={() => setMenu(false)}>
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;