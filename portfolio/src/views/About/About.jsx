import styles from './About.module.css';
import { FaJava, FaNode } from 'react-icons/fa';
import {
  SiExpress,
  SiFastapi,
  SiFlask,
  SiFlutter,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRasa,
  SiReact
} from 'react-icons/si';
import { NavLink } from 'react-router';

function About () {
  return (
    <div className={styles.background}>
      <div className={styles.descriptionDiv}>
        <h1>Introduction</h1>
        <p>
          I am a computer science student 👨🏾‍🎓 passionate about building
          full-stack applications,
          focusing mostly on backend development.
        </p>
        <p>
          I primarily work on backend systems using technologies such as{' '}
          <strong>Spring Boot</strong> and integrate them with frontend
          frameworks like{' '}
          <strong>React</strong> to deliver complete, functional solutions.
        </p>
        <p>I also work with desktop technologies such
          as <strong>JavaFX </strong> <FaJava color='orange' /> and mobile
          technologies such as <strong>Flutter </strong> <SiFlutter
            color='dodgerblue'
                                                         />.
        </p>
      </div>

      <div className={styles.descriptionDiv}>
        <h2>Technical Skills</h2>
        <section className={styles.skillSection}>
          <h3>Backend 🖥</h3>
          <p>
            My go-to framework in backend development is Java's{' '}
            <FaJava color='orange' /> Spring Boot because of its enterprise-level
            features.
            I find it simple to use due to its vast ecosystem, predefined
            modules,
            and built-in features such as validation, security, and database
            integration.
          </p>
          <p>Other notable frameworks I have worked with include:</p>
          <ul className={styles.skillList}>
            <li>
              <SiFastapi color='green' /> FastAPI
            </li>
            <li>
              <FaNode color='green' /> Node.js with{' '}
              <SiExpress color='yellow' /> Express
            </li>
            <li>
              <SiFlask color='red' /> Flask
            </li>
          </ul>
        </section>

        <section className={styles.skillSection}>
          <h3>Frontend 🎨</h3>
          <p>
            <SiReact color='dodgerblue' /> React is my preferred frontend
            library,
            as it simplifies building modern web applications using reusable
            components
            compared to traditional HTML structures.
          </p>
          <p>
            <SiFlutter color='dodgerblue' /> Flutter is a close second for me,
            mainly when building mobile-first solutions with the occasional web
            deployment.
          </p>
          <p>
            Vanilla JS is my least chosen stack for large-scale projects due to
            repetitive code and lack of structure.
          </p>
        </section>

        <section className={styles.skillSection}>
          <h3>Database 💾</h3>
          <p>
            Databases are the heart of most backend applications, and I enjoy
            working with both SQL and NoSQL solutions.
          </p>
          <p>Some databases I've worked with include:</p>
          <ul className={styles.skillList}>
            <li>
              <SiMysql color='orange' /> MySQL — my default choice for
              structured,
              relational data.
            </li>
            <li>
              <SiPostgresql color='dodgerblue' /> PostgreSQL — for projects
              requiring advanced queries and scalability.
            </li>
            <li>
              <SiMongodb color='green' /> MongoDB — when working with
              document-based, flexible data models.
            </li>
          </ul>
        </section>
        <section className={styles.skillSection}>
          <h3>Desktop 🖥️ and Mobile 📱</h3>
          <p>Modern computing is mostly done via websites but for some reasons such as performance, internet connectivity and security, some institutions prefer desktop apps.</p>
          <p>One technology I have interacted with for desktop development is Java's <strong>JavaFX</strong> <FaJava color='orange' /> framework. It being a Java based framework comes with Java's advantage, Write Once Run anywhere.</p>
          <p><strong>Flutter</strong> <SiFlutter color='dodgerblue' /> joins this list as a dual-killer for both desktop and mobile. However, I prefer it as a mobile framework. </p>
        </section>
      </div>
      <div className={styles.descriptionDiv}>
        <h2>Soft Skills</h2>
        <p>
          Through my projects, I have developed not only technical abilities but
          also important professional skills 😁:
        </p>
        <ul className={styles.skillList}>
          <li>
            <strong>Problem solving:</strong>{' '}
            <NavLink to='https://github.com/Jim-03/Local-Clinic'>
              Clinic System
            </NavLink>{' '}
            addresses workflow inefficiencies in local clinics.
          </li>
          <li>
            <strong>Assertive thinking:</strong> Broke down the clinic system
            into smaller departmental modules for simpler developmental stages.
          </li>
          <li>
            <strong>Adaptability:</strong> Learned to use{' '}
            <SiRasa color='purple' /> Rasa framework to adapt with latest AI
            trends.
          </li>
          <li>
            <strong>Collaboration:</strong> Experience working with fellow
            students
            on Git-based projects.
          </li>
          <li>
            <strong>Communication:</strong> Explaining technical concepts
            clearly
            to non-technical audiences.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
