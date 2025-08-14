import styles from './Project.module.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectDetails ({ project, closeFunction }) {
  const complete = project.completeFeatures.map((feature, key) => <li key={key}>{feature}</li>);
  const incomplete = project.futureFeatures.map((feature, key) => <li key={key}>{feature}</li>);
  return (
    <div
      className={styles.projectDetailsBackground}
      onClick={closeFunction}
    >
      <div className={styles.projectFormBackground}>
        <div className={styles.closeButton}>
          <p onClick={closeFunction}>&times;</p>
        </div>
        <div className={styles.projectForm} onClick={e => e.stopPropagation()}>
          <div className={styles.projectDetails}>
            <div className={styles.stackDiv}>
              <img src={project.photo} alt={project.name} />
              <h1>Tech Stack</h1>
              <div className={styles.techStack}>
                {project.techStack.map(
                  (tech, key) => <p key={key}>{tech.stackName} {tech.stackIcon}</p>)}
              </div>
              <h1>Programming languages</h1>
              <div className={styles.languageStack}>
                {project.languages.map((language, key) =>
                  <p key={key}>{language.languageName} {language.languageIcon}</p>)}
              </div>
              <h1>Links</h1>
              <div className={styles.projectLinks}>
                {project.liveUrl &&
                  <p onClick={() => window.open(project.liveUrl)}>Live Demo
                    <FaExternalLinkAlt />
                  </p>}
                <p onClick={() => window.open(project.gitHubUrl)}>GitHub
                  <FaGithub />
                </p>
              </div>
            </div>
            <div className={styles.descriptionDiv}>
              <h1>{project.name}</h1>
              <h2>Description</h2>
              <p>{project.description}</p>
              <h2>Features</h2>
              <ul>
                {complete}
                {incomplete}
              </ul>
              <h3>Currently Implemented</h3>
              <ol>{complete}</ol>
              <h3>Future Add-ons</h3>
              <ol>{incomplete}</ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
