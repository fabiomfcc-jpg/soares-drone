function Gallery() {
  const estilo = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  };

  const card = {
    textAlign: "center",
  };

  return (
    <section
      id="Fotos"
      style={{
        background: "#111",
        padding: "80px 30px",
        color: "#fff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        Nossas Fotos
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#bbb",
          marginBottom: "50px",
          fontSize: "18px",
        }}
      >
        Conheça alguns dos trabalhos realizados pela Soares Drone.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "25px",
        }}
      >
        <div style={card}>
          <img src="/imagens/foto1.jpg" alt="Foto 1" style={estilo} />
          <h3>Vista Aérea do Rio Riviera Guaraci sp</h3>
        </div>

        <div style={card}>
          <img src="/imagens/foto2.jpg" alt="Foto 2" style={estilo} />
          <h3>Rampa do Riviera </h3>
        </div>

        <div style={card}>
          <img src="/imagens/foto3.jpg" alt="Foto 3" style={estilo} />
          <h3>Braço do Rio Grande Riviera</h3>
        </div>

        <div style={card}>
          <img src="/imagens/foto4.jpg" alt="Foto 4" style={estilo} />
          <h3>Prainha Riviera Guaraci <span></span></h3>
        </div>

        <div style={card}>
          <img src="/imagens/foto5.jpg" alt="Foto 5" style={estilo} />
          <h3>Natureza Vista do Alto</h3>
        </div>

        <div style={card}>
          <img src="/imagens/foto6.jpg" alt="Foto 6" style={estilo} />
          <h3>Desembarque de Canoa Rampa Riviera</h3>
        </div>

        <div style={card}>
          <img src="/imagens/centro.jpg" alt="Centro da cidade" style={estilo} />
          <h3>Vista Aérea do Centro</h3>
        </div>

        <div style={card}>
          <img src="/imagens/pista-skate.jpg" alt="Pista de Skate" style={estilo} />
          <h3>Pista de Skate</h3>
        </div>

        <div style={card}>
          <img src="/imagens/lago.jpg" alt="Lago" style={estilo} />
          <h3>Lago e Parque</h3>
        </div>
      </div>
    </section>
  );
}

export default Gallery;