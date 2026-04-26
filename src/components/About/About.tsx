import { Container } from "./styles";
import profileImg from "../../assets/profile2.png";

// ✅ React Icons
import { FaPhp, FaLaravel, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiCodeigniter, SiMysql, SiJavascript } from "react-icons/si";

export function About() {
  return (
    <Container id="about">
      <div className="about-text fade-in">

        <h2>About Me</h2>
        <h4>Software Engineer</h4>

        <p>
          Hi, I'm <strong>Tushar Bindal</strong>, a Software Engineer with 3.5+ years of experience in building scalable and high-performance web applications.
        </p>

        <p>
          I specialize in PHP, CodeIgniter, MySQL, REST API development, and optimizing large datasets (1L+ records).
        </p>

        <p>
          I have worked on enterprise-level systems like Document Management and ERP platforms and improved performance by up to 70% using query optimization and indexing.
        </p>

        {/* Education */}
        <div className="education">
          <h3>Education:</h3>
          <h4>Master of Computer Applications (MCA) </h4>
          <p>GLA University, Mathura (2021 - 2023)</p> <br></br>

          <h4>Bachelor of Computer Applications (BCA)</h4>
          <p>Dr. Bhimrao Ambedkar University, Agra (2018 - 2021)</p>
        </div>

        {/* Experience */}
        <div className="experience">
          <h3>Experience:</h3>

          <h4>Associate Software Development Engineer</h4>
          <p>Capital Record Center Pvt. Ltd. (May 2025 - Present)</p><br></br>

          <h4>Software Developer</h4>
          <p>Lloyd Group of Institutions (May 2023 - Apr 2025)</p><br></br>

          <h4>Trainee - R&D</h4>
          <p>Align Info Solutions Pvt. Ltd. (Oct 2022 - Apr 2023)</p>
        </div>

        {/* Skills */}
        <h3>Core Skills:</h3>

        <div className="hard-skills">

          <div className="hability">
            <FaPhp size={40} color="#777BB4" />
            <span>PHP</span>
          </div>

          <div className="hability">
            <SiCodeigniter size={40} color="#EE4623" />
            <span>CodeIgniter</span>
          </div>

          <div className="hability">
            <FaLaravel size={40} color="#FF2D20" />
            <span>Laravel</span>
          </div>

          <div className="hability">
            <SiMysql size={40} color="#00758F" />
            <span>MySQL</span>
          </div>

          <div className="hability">
            <SiJavascript size={40} color="#F7DF1E" />
            <span>JavaScript</span>
          </div>

          <div className="hability">
            <FaHtml5 size={40} color="#E34F26" />
            <span>HTML</span>
          </div>

          <div className="hability">
            <FaCss3Alt size={40} color="#1572B6" />
            <span>CSS</span>
          </div>

          <div className="hability">
            <FaBootstrap size={40} color="#7952B3" />
            <span>Bootstrap</span>
          </div>

        </div>

      </div>

      {/* Right Image */}
      <div className="about-image fade-in">
        <img src={profileImg} alt="Tushar Bindal" />
      </div>
    </Container>
  );
}