function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap: 15,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #333",
      }}
    >
      <h2>Diana</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#sobremi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#skills">Skills</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
