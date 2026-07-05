const WHATSAPP_NUMERO = "5500000000000"; // troque pelo número real, com DDI+DDD

function WhatsAppButton() {
  const mensagem = encodeURIComponent(
    "Olá! Vi o site da Soares Drone e gostaria de saber mais sobre os serviços."
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
        zIndex: 10000,
        textDecoration: "none",
      }}
    >
      💬
    </a>
  );
}

export default WhatsAppButton;
