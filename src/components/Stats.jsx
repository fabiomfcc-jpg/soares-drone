const stats = [
  { numero: "150+", label: "Projetos entregues" },
  { numero: "5+", label: "Anos de experiência" },
  { numero: "4K", label: "Resolução das filmagens" },
  { numero: "100%", label: "Clientes satisfeitos" },
];

function Stats() {
  return (
    <section
      style={{
        background: "#0d0d0d",
        color: "#fff",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {stats.map((item) => (
          <div key={item.label}>
            <div
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: "bold",
                color: "#00ff88",
              }}
            >
              {item.numero}
            </div>
            <div style={{ color: "#ccc", fontSize: "16px", marginTop: "8px" }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
