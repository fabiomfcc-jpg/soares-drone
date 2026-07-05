const WHATSAPP_NUMERO = "5500000000000"; // troque pelo número real, com DDI+DDD

function Contato() {
  const mensagem = encodeURIComponent(
    "Olá! Vi o site da Soares Drone e gostaria de saber mais sobre os serviços."
  );

  return (
    <section
      id="contato"
      style={{
        background: "#111",
        color: "#fff",
        padding: "80px 30px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>
        Vamos conversar?
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 35px",
          fontSize: "18px",
          lineHeight: "30px",
          color: "#ccc",
        }}
      >
        Conte pra gente sobre o seu projeto e receba um orçamento rápido,
        sem compromisso.
      </p>

      <a
        href={`https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "#25D366",
          color: "#fff",
          padding: "18px 35px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        💬 Falar no WhatsApp
      </a>

      <p style={{ marginTop: "30px", color: "#999", fontSize: "16px" }}>
        Ou envie um e-mail para{" "}
        <a href="mailto:contato@soaresdrone.com" style={{ color: "#00ff88" }}>
          contato@soaresdrone.com
        </a>
      </p>
    </section>
  );
}

export default Contato;
