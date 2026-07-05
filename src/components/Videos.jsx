function Videos() {
  const videos = [
    "8JYV1LzlOCg", // Vídeo 1
    "vZz8Fdks9M8", // Vídeo 2
    "HTuXE4hIkGA", // Vídeo 3
    "pYQmTc6Hg6w", // Vídeo 4
    "PlVBWupf2LI", // Vídeo 5
    "r0i2HTGKe4I", // Vídeo 6
  ];

  return (
    <section
      id="videos"
      style={{
        background: "#111827",
        color: "#fff",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        Nossos Vídeos
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#cbd5e1",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Confira alguns dos trabalhos realizados pela Soares Drone.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "25px",
        }}
      >
        {videos.map((video, index) => (
          <div key={index}>
            <iframe
              width="100%"
              height="250"
              src={`https://www.youtube.com/embed/${video}`}
              title={`Vídeo ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: "15px",
                boxShadow: "0 8px 25px rgba(0,0,0,.4)",
              }}
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Videos;