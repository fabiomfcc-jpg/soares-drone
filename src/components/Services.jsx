function Services() {
  return (
    <section
      id="servicos"
      style={{
        padding: "80px 20px",
        background: "#181818",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>
        Nossos Serviços
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "40px auto",
        }}
      >
        <div>
          <h3>📸 Fotos Aéreas</h3>
          <p>Imagens profissionais em alta resolução.</p>
        </div>

        <div>
          <h3>🎥 Filmagens com Drone</h3>
          <p>Vídeos em 4K para eventos, fazendas e empresas.</p>
        </div>

        <div>
          <h3>🏡 Imóveis</h3>
          <p>Apresentações aéreas para venda e divulgação.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;