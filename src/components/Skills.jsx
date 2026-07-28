import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaPhp,
  FaGitAlt,
  FaCloud,
  FaRocket,
  FaDatabase,
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";

function Skills() {
  const skillStyle = {
    transition: "0.3s",
    cursor: "pointer",
    width: 120,
  };

  return (
    <section
      id="skills"
      style={{
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(28px,6vw,40px)",
          marginBottom: 50,
        }}
      >
        Skills
      </h2>


      <h3 style={{ color: "#00eeffe5", marginBottom: 25 }}>
        Frontend
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          rowGap: 40,
          flexWrap: "wrap",
          marginBottom: 50,
        }}
      >
        {[
          { icon: <FaHtml5 size={60} color="#E34F26" />, text: "HTML" },
          { icon: <FaCss3Alt size={60} color="#1572B6" />, text: "CSS" },
          { icon: <FaJs size={60} color="#F7DF1E" />, text: "JavaScript" },
          { icon: <FaReact size={60} color="#61DBFB" />, text: "React" },
        ].map((item, index) => (
          <div
            key={index}
            style={skillStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <h3 style={{ color: "#00eeffe5", marginBottom: 25 }}>
        Backend
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          rowGap: 40,
          flexWrap: "wrap",
          marginBottom: 50,
        }}
      >
        {[
          { icon: <FaNodeJs size={60} color="#3C873A" />, text: "Node.js" },
          { icon: <SiExpress size={60} color="white" />, text: "Express" },
          { icon: <FaPhp size={60} color="#777BB4" />, text: "PHP" },
        ].map((item, index) => (
          <div
            key={index}
            style={skillStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>


      <h3 style={{ color: "#00eeffe5", marginBottom: 25 }}>
        Bases de datos
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          rowGap: 40,
          flexWrap: "wrap",
          marginBottom: 50,
        }}
      >
        {[
          { icon: <SiMysql size={60} color="#00758F" />, text: "MySQL" },
          { icon: <SiPostgresql size={60} color="#336791" />, text: "PostgreSQL" },
        ].map((item, index) => (
          <div
            key={index}
            style={skillStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>


      <h3 style={{ color: "#00eeffe5", marginBottom: 25 }}>
        Cloud
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          rowGap: 40,
          flexWrap: "wrap",
          marginBottom: 50,
        }}
      >
        {[
          { icon: <FaCloud size={60} color="#4FC3F7" />, text: "Cloudinary" },
          { icon: <FaDatabase size={60} color="#00BCD4" />, text: "Aiven" },
          { icon: <FaRocket size={60} color="#8B5CF6" />, text: "Render" },
          { icon: <SiVercel size={60} color="white" />, text: "Vercel" },
        ].map((item, index) => (
          <div
            key={index}
            style={skillStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>


      <h3 style={{ color: "#00eeffe5", marginBottom: 25 }}>
        Control de versiones
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          rowGap: 40,
          flexWrap: "wrap",
        }}
      >
        {[
          { icon: <FaGitAlt size={60} color="#F05032" />, text: "Git" },
          { icon: <FaGithub size={60} color="white" />, text: "GitHub" },
        ].map((item, index) => (
          <div
            key={index}
            style={skillStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;