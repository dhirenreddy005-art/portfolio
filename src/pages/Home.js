import "./Home.css";
import profile from "../assets/profile.jpg";
function Home() {
  return (
    <div className="container">

      {/* HERO */}
      <div className="hero">
        <img src={profile} alt="Profile" className="profile-img" />
        <h1>
          Dhiren <span>Reddy</span>
        </h1>

        <p className="subtitle">
          Artificial Intelligence Student (3rd Year)
        </p>

        <div className="btn-group">
          {/* VIEW RESUME */}
          <a
            href="/dhiren_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Resume
          </a>

          {/* DOWNLOAD RESUME */}
          <a
            href="/dhiren_resume.pdf"
            download
            className="btn btn-outline"
          >
            Download Resume
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/dhiren-reddy-palle-720729405/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-linkedin"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <div className="card">
        <h2>About Me</h2>
        <p>
          I am a 3rd-year B.Tech student in Artificial Intelligence at Mahindra University, Hyderabad.
          I am passionate about building intelligent systems and solving real-world problems using
          data-driven approaches. I enjoy working on practical applications of AI and continuously
          improving my technical skills.
        </p>
      </div>

      {/* INTERESTS */}
      <div className="card">
        <h2>Research Interests</h2>
        <ul>
          <li>Artificial Intelligence</li>
          <li>Machine Learning</li>
          <li>Data Science</li>
          <li>Web Development</li>
        </ul>
      </div>

      {/* SKILLS */}
      <div className="card">
        <h2>Skills</h2>
        <div className="skills">
          <span>Python</span>
          <span>C</span>
          <span>C++</span>
          <span>Java</span>
          <span>React</span>
          <span>Node.js</span>
        </div>
      </div>

      {/* CONTACT */}
      <div className="card">
        <h2>Contact</h2>
        <p>Email: dhirenreddy005@gmail.com</p>
        <p>Phone: +91 81795 85909</p>
        <p>Location: Hyderabad</p>
      </div>

      {/* FOOTER */}
      <div className="footer">
        © 2026 Dhiren Reddy · Built with React
      </div>

    </div>
  );
}

export default Home;