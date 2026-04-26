import { Container } from "./styles";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>

      <div className="projects">

        {/* Project 1 */}
        <div className="project">
          <header>
            <h3>Document Management System</h3>
          </header>

          <div className="body">
            <p>
              Developed a scalable document management system handling 1.4L+ records using server-side DataTables.
              Implemented advanced search, filtering, role-based access, and document upload with metadata tagging.
              Improved performance by 60–70% using SQL optimization and indexing.
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>PHP</li>
              <li>CodeIgniter</li>
              <li>MySQL</li>
              <li>JavaScript</li>
            </ul>
          </footer>
        </div>

        {/* Project 2 */}
        <div className="project">
          <header>
            <h3>File Tracker System</h3>
          </header>

          <div className="body">
            <p>
              Built a real-time file tracking system with approval workflows, audit logs, and barcode-based tracking.
              Enabled status monitoring and improved document visibility across departments.
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>PHP</li>
              <li>CodeIgniter</li>
              <li>MySQL</li>
            </ul>
          </footer>
        </div>

        {/* Project 3 */}
        <div className="project">
          <header>
            <h3>ERP & CRM Management System</h3>
          </header>

          <div className="body">
            <p>
              Developed ERP modules for attendance, fee management, and transactions.
              Built CRM features including lead tracking, follow-ups, and performance optimization.
              Improved system efficiency and reliability.
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>PHP</li>
              <li>MySQL</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
            </ul>
          </footer>
        </div>

      </div>
    </Container>
  );
}