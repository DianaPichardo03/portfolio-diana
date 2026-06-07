function Projects() {
  return (
    <section
      id="proyectos"
      style={{
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(28px, 6vw, 40px)",
          marginBottom: "50px",
        }}
      >
        Mis Proyectos
      </h2>

      <div
        style={{
          display: "flex",
          gap: 45,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a href="https://proyecto-joyeria.vercel.app/" 
        target="_blank" 
        style={{ 
          textDecoration: "none", 
          color: "white", }} >
        <div
          style={{
            width: 300,
            background: "#1e1e1e",
            padding: 20,
            borderRadius: 20,
            transition: "0.3s", 
            cursor: "pointer", 
            }} 
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = "scale(1.2)"; 
              }} 
              onMouseOut={(e) => { 
                e.currentTarget.style.transform = "scale(1)"; 
                }} >

          <h3>💎 Ecommerce Joyería</h3>

          <p style={{ marginTop: 10, color: "#aaa" }}>
            Ecommerce fullstack con React, Node.js,
            Express y MySQL.
          </p>
           </div>
          </a>
          <a href="https://frontend-tareas-eight.vercel.app/" 
          target="_blank" 
          style={{ 
            textDecoration: "none", 
            color: "white", 
            }} >
        <div
          style={{
            width: 300,
            background: "#1e1e1e",
            padding: 20,
            borderRadius: 20,
            transition: "0.3s", 
            cursor: "pointer", 
            }} 
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = "scale(1.2)"; 
              }} 
              onMouseOut={(e) => { 
                e.currentTarget.style.transform = "scale(1)"; 
                }} >
          <h3>📝 Tareas Fullstack</h3>

          <p style={{ marginTop: 10, color: "#aaa" }}>
            CRUD de tareas con JWT, MySQL y JavaScript.
          </p>
        </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;