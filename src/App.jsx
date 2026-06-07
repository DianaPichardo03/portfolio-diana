import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />

      <section
        id="inicio"
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 20,
        }}
      >
        <h1
          style={{
            fontSize:"clamp(35px, 8vw, 60px)",
            marginBottom: 20,
          }}
        >
          ISC Diana Laura Pichardo García
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 4vw, 24px)",
            color: "#aaa",
            maxWidth: 700,
          }}
        >
          Desarrolladora Fullstack Jr especializada en React,
          Node.js, Express y MySQL.
        </p>

        <a href="#proyectos">
        <button
          style={{
            marginTop: 30,
            padding: "15px 30px",
            border: "none",
            borderRadius: 30,
            background: "#00eeffe5",
            color: "black",
            fontWeight: "bold",
            fontSize: 16,
            transition: "0.3s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => { 
            e.currentTarget.style.transform = "scale(1.1)"; 
          }} 
          onMouseOut={(e) => { 
            e.currentTarget.style.transform = "scale(1)"; 
          }}
        >
          Ver Proyectos ➜
        </button>
      </a>
      </section>
      <section id="sobremi">
       <About /> 
      </section>
      <section id="proyectos">
        <Projects /> 
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contacto">
        <Contact />
      </section>
      <footer 
      style={{ 
        textAlign: "center", 
        padding: 20, 
        color: "#888", 
        borderTop: "1px solid #333", 
        marginTop: 50, 
        }} 
        > 
        © 2026 Diana Laura Pichardo García 
        </footer>
    </div>
  );
}

export default App;