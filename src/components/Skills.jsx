import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub, } from "react-icons/fa"; 
import { SiExpress, SiMysql, } from "react-icons/si";


function Skills() {
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
          fontSize: "clamp(28px, 6vw, 40px)",
          marginBottom: 40,
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          flexWrap: "wrap",
        }}

      >
        <div
          style={{ 
            transition: "0.3s", 
            cursor: "pointer", 
            }} 
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = "scale(1.2)"; 
              }} 
              onMouseOut={(e) => { 
                e.currentTarget.style.transform = "scale(1)"; 
                }} >
          <FaHtml5 size={60} color="#E34F26" />
          <p>HTML</p>
        </div>

        <div
          style={{ 
            transition: "0.3s", 
            cursor: "pointer", 
            }} 
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = "scale(1.2)"; 
              }} 
              onMouseOut={(e) => { 
                e.currentTarget.style.transform = "scale(1)"; 
                }} >
          <FaCss3Alt size={60} color="#1572B6" />
          <p>CSS</p>
        </div>

        <div
          style={{ 
            transition: "0.3s", 
            cursor: "pointer", 
            }} 
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = "scale(1.2)"; 
              }} 
              onMouseOut={(e) => { 
                e.currentTarget.style.transform = "scale(1)"; 
                }} >
          <FaJs size={60} color="#F7DF1E" />
          <p>JavaScript</p>
        </div>

        <div
          style={{ 
            transition: "0.3s", 
            cursor: "pointer", 
            }} 
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = "scale(1.2)"; 
              }} 
              onMouseOut={(e) => { 
                e.currentTarget.style.transform = "scale(1)"; 
                }} >
          <FaReact size={60} color="#61DBFB" />
          <p>React</p>
        </div>

        <div
          style={{ 
            transition: "0.3s", 
            cursor: "pointer", 
            }} 
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = "scale(1.2)"; 
              }} 
              onMouseOut={(e) => { 
                e.currentTarget.style.transform = "scale(1)"; 
                }} >
          <FaNodeJs size={60} color="#3C873A" />
          <p>Node.js</p>
        </div>

        <div
          style={{ 
            transition: "0.3s", 
            cursor: "pointer", 
            }} 
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = "scale(1.2)"; 
              }} 
              onMouseOut={(e) => { 
                e.currentTarget.style.transform = "scale(1)"; 
                }} >
          <SiExpress size={60} color="white" />
          <p>Express</p>
        </div>

        <div
          style={{ 
            transition: "0.3s", 
            cursor: "pointer", 
            }} 
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = "scale(1.2)"; 
              }} 
              onMouseOut={(e) => { 
                e.currentTarget.style.transform = "scale(1)"; 
                }} >
          <SiMysql size={60} color="#00758F" />
          <p>MySQL</p>
        </div>

        <div
          style={{ 
            transition: "0.3s", 
            cursor: "pointer", 
            }} 
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = "scale(1.2)"; 
              }} 
              onMouseOut={(e) => { 
                e.currentTarget.style.transform = "scale(1)"; 
                }} >
          <FaGithub size={60} color="white" />
          <p>GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;

