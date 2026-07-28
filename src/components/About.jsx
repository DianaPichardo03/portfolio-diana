import perfil from "../assets/perfil.jpeg";
import compu from "../assets/compu.jpeg";
import natacion from "../assets/natacion.jpeg";
import bici from "../assets/bici.jpeg";
import gif from "../assets/gif.mp4";

function About() {
  return (
    <section
      id="sobre-mi"
      style={{
        padding: "60px 20px",
        background: "#111",
        color: "white",
      }}
    >
     
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(32px, 6vw, 42px)",
          marginBottom: 50,
        }}
      >
        Sobre mí ☺
      </h2>
         <p
            style={{
              textAlign: "center",
              color: "#00eeffe5",
              fontWeight: "bold",
              marginBottom: 40,
              fontSize: "clamp(18px,3vw,22px)",
            }}
          >
            Desarrolladora Fullstack | React • Node.js • PHP • PostgreSQL • Cloud Computing
          </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        <img
          src={perfil}
          alt="Diana"
          style={{
            width: "100%", 
            maxWidth: 300,
            height: "auto", 
            aspectRatio: "1/1",
            borderRadius: "50%",
            objectFit: "cover",
            transition: "0.3s ease",
            border: "5px solid #00eeffe5",
          }}
          onMouseOver={(e) => { 
            e.currentTarget.style.transform = "scale(1.05)"; 
        }} 
        onMouseOut={(e) => { 
            e.currentTarget.style.transform = "scale(1)"; 
        }}
        />
      </div>

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
          lineHeight: 1.9,
          fontSize: "clamp(16px, 3vw, 22px)",
          color: "#d6d6d6",
        }}
      >
        <p>
          Soy Ingeniera en Sistemas Computacionales
          apasionada por el desarrollo web y el
          aprendizaje continuo.
        </p>

        <p>
          Me gusta crear aplicaciones modernas, escalables 
          y funcionales, manteniéndome en constante aprendizaje 
          para incorporar nuevas tecnologías y buenas prácticas 
          de desarrollo.
        </p>

        <p>
          Me considero una persona responsable,
          organizada, adaptable y con facilidad para
          trabajar en equipo. Disfruto resolver problemas, 
          aprender nuevas tecnologías y buscar soluciones 
          de manera autónoma ante nuevos retos.
        </p>

        <p>
          Actualmente desarrollo aplicaciones fullstack
          utilizando React, Node.js, PHP y PostgreSQL,
          desplegando proyectos reales con tecnologías
          cloud como Render, Vercel, Aiven y Cloudinary,
          siempre buscando escribir código limpio,
          escalable y mantenible.
        </p>
        <p>
          Tengo disponibilidad para cambio de
          residencia y entusiasmo por seguir creciendo
          profesionalmente en el área de tecnología.
        </p>
        <p>
          Mi objetivo es formar parte de un equipo donde pueda aportar
          soluciones, seguir aprendiendo y crecer profesionalmente
          desarrollando software de calidad.
        </p>
        <p>
          También disfruto actividades como el ciclismo 
          y la natación, ya que me ayudan a mantener 
          disciplina, constancia y equilibrio personal.
        </p>
      </div>
        <div
          style={{
            marginTop: 70,
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "#00eeffe5",
              marginBottom: 25,
              fontSize: "clamp(22px,4vw,28px)",
            }}
          >
            Especialidades
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 18,
              flexWrap: "wrap",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {[
              "💻 Desarrollo Frontend",
              "⚙️ Desarrollo Backend",
              "🔗 APIs REST",
              "🗄️ Bases de Datos",
              "🛒 Ecommerce",
              "☁️ Cloud Computing",
              "🚀 Deploy en la nube",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#1e1e1e",
                  border: "2px solid #00eeffe5",
                  borderRadius: 30,
                  padding: "12px 20px",
                  color: "white",
                  fontWeight: "bold",
                  transition: "0.3s",
                  cursor: "default",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(0,238,255,.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
  
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 50,
        flexWrap: "wrap",
        marginTop: 60,
        marginBottom: 50,
        textAlign: "center",
      }}
    >
      <div>
        <h2
          style={{
            color: "#00eeffe5",
            fontSize: "clamp(30px,5vw,42px)",
            marginBottom: 5,
          }}
        >
          3+
        </h2>
        <p>Proyectos Fullstack</p>
      </div>

      <div>
        <h2
          style={{
            color: "#00eeffe5",
            fontSize: "clamp(30px,5vw,42px)",
            marginBottom: 5,
          }}
        >
          15+
        </h2>
        <p>Tecnologías dominadas</p>
      </div>

      <div>
        <h2
          style={{
            color: "#00eeffe5",
            fontSize: "clamp(30px,5vw,42px)",
            marginBottom: 5,
          }}
        >
          100%
        </h2>
        <p>Aprendizaje continuo</p>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 30,
      }}
    >
      <img
        src={compu}
        alt="Programando"
        style={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 20,
          transition: "0.3s ease",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      />
    </div>

    <h3
    style={{
        textAlign: "center",
        marginTop: 70,
        marginBottom: 30,
        fontSize: "clamp(24px, 5vw, 32px)",
    }}
    >
    Más allá del código 
    <br />
    🚴‍♀️🏊‍♀️
    </h3>

    <div
    style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 30,
    }}
    >
    <img
        src={bici}
        alt="Bicicleta"
        style={{
        width: "100%",
        maxWidth: 400,
        borderRadius: 20,
        objectFit: "cover",
        transition: "0.3s ease",
        }}

        onMouseOver={(e) => { 
            e.currentTarget.style.transform = "scale(1.05)"; 
        }} 
        onMouseOut={(e) => { 
            e.currentTarget.style.transform = "scale(1)"; 
        }}
    />
    </div>

    <div
    style={{
        display: "flex",
        justifyContent: "center",
        gap: 25,
        flexWrap: "wrap",
    }}
    >
    <div>
        <img
        src={natacion}
        alt="Natación"
        style={{
            width: "100%", 
            maxWidth: 400,
            borderRadius: 20,
            transition: "0.3s ease",
        }}
        onMouseOver={(e) => { 
            e.currentTarget.style.transform = "scale(1.05)"; 
        }} 
        onMouseOut={(e) => { 
            e.currentTarget.style.transform = "scale(1)"; 
        }}
        />

        <p style={{ textAlign: "center" }}>
        Natación 🏊‍♀️
        </p>
    </div>

    <div>
        <video
        autoPlay
        muted
        loop
        playsInline
        style={{
            width: "100%", 
            maxWidth: 300,
            borderRadius: 20,
            objectFit: "cover",
            transition: "0.3s ease",
        }}
        onMouseOver={(e) => { 
            e.currentTarget.style.transform = "scale(1.05)"; 
        }} 
        onMouseOut={(e) => { 
            e.currentTarget.style.transform = "scale(1)"; 
        }}
        >
        <source src={gif} type="video/mp4" />
        </video>

        <p style={{ textAlign: "center" }}>
        Momentos que disfruto ☺
        </p>
    </div>
    </div>
    </section>
  );
}

export default About;

