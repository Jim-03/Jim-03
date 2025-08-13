import styles from './Home.module.css';
import {
  FaDocker,
  FaExternalLinkAlt,
  FaGithub,
  FaNodeJs,
  FaReact
} from 'react-icons/fa';
import {
  SiExpress,
  SiFastapi,
  SiFlask,
  SiFlutter,
  SiMysql,
  SiPostgresql,
  SiRasa,
  SiSpringboot
} from 'react-icons/si';
import clinic from '../../assets/local-clinic.png';
import portfolio from '../../assets/portfolio.png';

function Home () {
  return (
    <div className={styles.background}>
      <section className={styles.heroSection}>
        <h1>Hello 👋, I'm Jimmy</h1>
        <p>A backend focused full-stack developer 🙂</p>
      </section>
      <h2>Skills</h2>
      <section className={styles.skillsSection}>
        <div className={styles.skill}>
          <SiSpringboot color='green' />
          <p>Spring Boot</p>
        </div>
        <div className={styles.skill}>
          <FaNodeJs color='green' />
          <p>Node.js</p>
        </div>
        <div className={styles.skill}>
          <SiExpress color='yellow' />
          <p>Express</p>
        </div>
        <div className={styles.skill}>
          <FaReact color='dodgerblue' />
          <p>React</p>
        </div>
        <div className={styles.skill}>
          <SiMysql color='navy' />
          <p>MySQL</p>
        </div>
        <div className={styles.skill}>
          <SiFlask color='red' />
          <p>Flask</p>
        </div>
        <div className={styles.skill}>
          <SiFastapi color='darkgreen' />
          <p>FastApi</p>
        </div>
        <div className={styles.skill}>
          <SiPostgresql color='navy' />
          <p>PostgreSQL</p>
        </div>
        <div className={styles.skill}>
          <SiRasa color='purple' />
          <p>Rasa</p>
        </div>
        <div className={styles.skill}>
          <SiFlutter color='dodgerblue' />
          <p>Flutter</p>
        </div>
        <div className={styles.skill}>
          <FaDocker color='dodgerblue' />
          <p>Docker</p>
        </div>
      </section>
      <h2>Projects</h2>
      <section className={styles.projectSection}>
        <div className={styles.project}>
          <img src={clinic} alt='Clinic Management System' />
          <p className={styles.projectName}>Clinicnet</p>
          <p>A system that digitizes
            operations in a clinic
          </p>
          <div className={styles.projectArchitecture}>
            <p><FaReact color='dodgerblue' /></p>
            <p><SiSpringboot color='green' /></p>
            <p><FaDocker color='dodgerblue' /></p>
            <p><SiPostgresql color='blue' /></p>
          </div>
          <div className={styles.links}>
            <p onClick={() => {
              window.open('https://jims-local-clinic.vercel.app');
            }}
            ><span><FaExternalLinkAlt /></span> Live demo
            </p>
            <p onClick={() => {
              window.open('https://github.com/Jim-03/Local-Clinic', '_blank');
            }}
            >
              <span><FaGithub /></span> GitHub repo
            </p>
          </div>
        </div>
        <div className={styles.project}>
          <img src={portfolio} alt='Portfolio' />
          <p className={styles.projectName}>Portfolio</p>
          <p>A website to showcase my skills to potential recruiters</p>
          <div className={styles.projectArchitecture}>
            <p><FaReact color='dodgerblue' /></p>
          </div>
          <div className={styles.links}>
            <p onClick={() => {
              window.open('https://jims-portfolio.vercel.app');
            }}
            ><span><FaExternalLinkAlt /></span> Live demo
            </p>
            <p onClick={() => {
              window.open('https://github.com/Jim-03/Jim-03', '_blank');
            }}
            >
              <span><FaGithub /></span> GitHub repo
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
