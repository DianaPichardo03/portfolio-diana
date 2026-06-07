import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contacto"
      style={{
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(28px, 6vw, 40px)",
          marginBottom: 30,
        }}
      >
        Contacto ☏
        </h2>

    <div style={{ 
      marginTop: 25, 
      lineHeight: 2, 
      }} >
        
      </div>
      <p style={{ 
        marginBottom: 10,
        fontSize: "clamp(16px, 3vw, 20px)",
      }}>
        📧 dianapigd94@gmail.com
      </p>

      <p style={{ 
        marginBottom: 10,
        fontSize: "clamp(16px, 3vw, 20px)",
        }}>
        📱 733 117 0412
      </p>

      <p style={{ 
        marginBottom: 30,
        fontSize: "clamp(16px, 3vw, 20px)",
        }}>
        📍 Iguala, Guerrero
      </p>

         <div
            style={{
              display: "flex",
              gap: 15,
              justifyContent: "center",
              marginTop: 20,
              flexWrap: "wrap",
            }}
          ></div>

      <a
        href="https://github.com/DianaPichardo03"
        target="_blank"
      >
        <button
          style={{
            padding: "12px 25px",
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
          GitHub <FaGithub />
        </button>
      </a>

      
      <a
        href="www.linkedin.com/in/diana-pichardo-g03"
        target="_blank"
      >
        <button
          style={{
            padding: "12px 25px",
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
          LinkedIn <FaLinkedin />
        </button>
      </a>

       <div
      style={{
        display: "flex",
        gap: 15,
        justifyContent: "center",
        marginTop: 20,
        flexWrap: "wrap",
      }}
    >
      
      <a
        href="/cv.pdf"
        target="_blank"
      >
        <button
          style={{
            padding: "12px 25px",
            borderRadius: 20,
            border: "none",
            background: "#00eeffe5",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: 15,
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
          Ver CV 👁
        </button>
      </a>

      <a href="/cv.pdf" download>
        <button
          style={{
            padding: "12px 25px",
            borderRadius: 20,
            border: "none",
            background: "#fff",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: 15,
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
          Descargar CV 📄
        </button>
      </a>
    </div>
    </section>
  );
}

export default Contact;