import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero.jpg"
        src="/drone.mp4"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,.45)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "clamp(48px, 10vw, 90px)",
            margin: 0,
            fontWeight: "bold",
          }}
        >
          SOARES DRONE
        </h1>

        <p
          style={{
            color: "#fff",
            fontSize: "clamp(22px,4vw,40px)",
            marginTop: "15px",
          }}
        >
          Seu mundo visto de outro ângulo
        </p>

        <p
          style={{
            color: "#ddd",
            fontSize: "clamp(16px,2vw,24px)",
            lineHeight: "1.5",
            marginTop: "20px",
          }}
        >
          Fotos e filmagens aéreas profissionais em 4K para imóveis,
          chácaras, fazendas, empresas, eventos e muito mais.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <Link
            to="/fotos"
            style={{
              background: "#12c48b",
              color: "#fff",
              padding: "18px 35px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            📷 Ver Galeria
          </Link>

          <Link
            to="/videos"
            style={{
              background: "#1f80e0",
              color: "#fff",
              padding: "18px 35px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            🎥 Assistir Vídeos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;