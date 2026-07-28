function ProjectCard({
  imagen,
  titulo,
  descripcion,
  tecnologias,
  demo,
  github,
}) {
  return (
    <div
      style={{
        width: 340,
        background: "#1e1e1e",
        padding: 20,
        borderRadius: 20,
        border: "2px solid #00eeffe5",
        boxShadow: "0 0 15px rgba(0,238,255,.15)",
        transition: "0.3s",
        cursor: "pointer",
        minHeight: 500,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <img
        src={imagen}
        alt={titulo}
        style={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderRadius: 12,
          marginBottom: 15,
        }}
      />

      <h3>{titulo}</h3>

      <p
        style={{
          marginTop: 10,
          color: "#aaa",
          lineHeight: 1.6,
        }}
      >
        {descripcion}
      </p>

      <p
        style={{
          color: "#00eeffe5",
          fontWeight: "bold",
          marginTop: 15,
          fontSize: 14,
        }}
      >
        {tecnologias}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 15,
          marginTop: 25,
          flexWrap: "wrap",
        }}
      >
        <a href={demo} target="_blank" rel="noreferrer">
          <button
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: 20,
              background: "#00eeffe5",
              color: "black",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🌐 Ver proyecto
          </button>
        </a>

        <a href={github} target="_blank" rel="noreferrer">
          <button
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: 20,
              background: "#fff",
              color: "black",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            💻 GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
