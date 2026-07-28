import ProjectCard from "./ProjectCard";

import joyeriaReact from "../assets/joyeria-react.png";
import joyeriaPhp from "../assets/joyeria-php.png";
import tareas from "../assets/tareas.png";

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
          fontSize: "clamp(28px,6vw,40px)",
          marginBottom: 50,
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
        <ProjectCard
          imagen={joyeriaPhp}
          titulo="💎 Joyería Diana"
          descripcion="Ecommerce desarrollado con PHP, PostgreSQL, Aiven, Cloudinary y Render. Incluye panel de administración, carrito de compras y gestión de pedidos."
          tecnologias="PHP • PostgreSQL • Cloudinary • Render"
          demo="https://joyeria-diana.onrender.com"
          github="https://github.com/DianaPichardo03/Joyeria-Diana"
        />

        <ProjectCard
          imagen={joyeriaReact}
          titulo="💎 Ecommerce Joyería"
          descripcion="Ecommerce fullstack desarrollado con React, Node.js, Express y MySQL."
          tecnologias="React • Node • Express • MySQL • Vercel"
          demo="https://proyecto-joyeria.vercel.app/"
          github="https://github.com/DianaPichardo03/Proyecto-Joyeria"
        />

        <ProjectCard
          imagen={tareas}
          titulo="📝 Tareas Fullstack"
          descripcion="Sistema CRUD de tareas con autenticación JWT y base de datos MySQL."
          tecnologias="JavaScript • Node • JWT • MySQL • Vercel"
          demo="https://frontend-tareas-eight.vercel.app/"
          github="https://github.com/DianaPichardo03/frontend-tareas"
        />
      </div>
    </section>
  );
}

export default Projects;
