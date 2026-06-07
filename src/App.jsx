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
            fontSize: "60px",
            marginBottom: 20,
          }}
        >
          ISC Diana Laura Pichardo García
        </h1>

        <p
          style={{
            fontSize: "24px",
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
    </div>
  );
}

export default App;