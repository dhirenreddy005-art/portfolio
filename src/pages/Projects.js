import "./Projects.css";

function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>

      {/* Project 1 */}
      <div className="card">
        <h3>Cyberbullying Detection System</h3>
        <p>
          Developed a machine learning-based system to detect cyberbullying in online text.
          The model analyzes user input and classifies whether the content is abusive or safe.
          Implemented using Python with NLP techniques and basic preprocessing.
        </p>

        <div className="project-links">
          <a
            href="https://github.com/dhirenreddy005-art/cyberbullying-detection"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Code ↗
          </a>
        </div>
      </div>

     {/* Project 2 */}
<div className="card">
  <h3>Student Management System</h3>
  <p>
    Developed a Java-based application to manage student records including
    add, update, delete, and view operations. Focused on OOP concepts and
    structured data handling.
  </p>

  <a 
    href="https://github.com/dhirenreddy005-art/Student-management-" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-link"
  >
    View Project →
  </a>
</div>

      
    </div>
  );
}

export default Projects;