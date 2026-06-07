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
          Me gusta crear aplicaciones modernas,
          funcionales y seguir desarrollando nuevas
          habilidades tecnológicas.
        </p>

        <p>
          Me considero una persona responsable,
          organizada, adaptable y con facilidad para
          trabajar en equipo. Disfruto resolver problemas, 
          aprender nuevas tecnologías y buscar soluciones 
          de manera autónoma ante nuevos retos.
        </p>

        <p>
          Actualmente continúo fortaleciendo mis conocimientos 
          en desarrollo fullstack y desarrollando proyectos 
          personales.
        </p>
        <p>
          Tengo disponibilidad para cambio de
          residencia y entusiasmo por seguir creciendo
          profesionalmente en el área de tecnología.
        </p>
        <p>
          También disfruto actividades como el ciclismo 
          y la natación, ya que me ayudan a mantener 
          disciplina, constancia y equilibrio personal.
        </p>
      </div>

      {/* FOTO COMPUTADORA */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        <img
          src={compu}
          alt="Programando"
          style={{
            width: "100%", 
            maxWidth: 400,
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
    Hobbies 
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
        Actividad ☺
        </p>
    </div>
    </div>
    </section>
  );
}

export default About;

