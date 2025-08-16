import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './Cli.module.css';
import ProjectDetails from '../../views/Project/ProjectDetails.jsx';
import clinic from '../../assets/local-clinic.png';
import portfolio from '../../assets/portfolio.png';
import {Link} from 'react-router';
import {
  SiDocker,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTypescript
} from 'react-icons/si';
import {FaJava} from 'react-icons/fa';

const COMMAND_OUTPUTS = {
  help: (
    <>
      <table>
        <thead>
        <tr>
          <th colSpan={2}>Basic Commands</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>projects</td>
          <td>Display all projects</td>
        </tr>
        <tr>
          <td>project [project_name]</td>
          <td>Launches a project description</td>
        </tr>
        <tr>
          <td>about</td>
          <td>Describes who I am</td>
        </tr>
        <tr>
          <td>achievement</td>
          <td>Lists all my achievements</td>
        </tr>
        <tr>
          <td>contacts</td>
          <td>Lists my publicly available contact information</td>
        </tr>
        </tbody>
      </table>
      <table>
        <thead>
        <tr>
          <th colSpan={2}>Utilities</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>clear</td>
          <td>Clears the terminal</td>
        </tr>
        <tr>
          <td>exit</td>
          <td>Returns to the landing page</td>
        </tr>
        </tbody>
      </table>
    </>
  ),
  about: (
    <div>
      <p>> <strong>INTRODUCTION</strong></p>
      <p>Computer science student passionate about full-stack development
        with backend focus. Primary stack: Spring Boot (Java) + React. Also
        experienced with JavaFX (desktop) and Flutter (mobile).</p>

      <p>> <strong>TECHNICAL SKILLS</strong></p>
      <p><strong>Backend:</strong> Spring Boot (enterprise Java), FastAPI,
        Node.js/Express, Flask</p>
      <p><strong>Frontend:</strong> React (component-based web), Flutter
        (mobile-first)</p>
      <p><strong>Databases:</strong> MySQL (structured), PostgresSQL
        (scalable), MongoDB (flexible)</p>
      <p><strong>Desktop/Mobile:</strong> JavaFX (cross-platform desktop),
        Flutter (mobile & desktop)</p>

      <p>> <strong>SOFT SKILLS</strong></p>
      <p>Problem-solving (built clinic workflow system), modular design
        thinking, adaptability (learned Rasa for AI), Git collaboration,
        technical communication</p>

      <p>Type <strong>'projects'</strong> to see implementations
        or <strong>'contact'</strong> for connection details.</p>
    </div>
  ),
  achievement: (
    <div>
      <p>> <strong>ACHIEVEMENT TIMELINE (2023-2025)</strong></p>

      <p><strong>2023</strong></p>
      <p>• Jul: Version control mastery (Git/GitHub)</p>
      <p>• Jul: First HTML webpage</p>
      <p>• Aug: Bash automation scripts</p>
      <p>• Nov: Python program development</p>

      <p><strong>2024</strong></p>
      <p>• Jun: First Java application</p>
      <p>• Dec: Interactive JavaScript project</p>

      <p><strong>2025</strong></p>
      <p>• Feb: Team backend collaboration (JavaScript)</p>
      <p>• Feb: First React component project</p>
      <p>• Apr: Full-stack Spring Boot + React app</p>
      <p>• Apr: TypeScript React implementation</p>
      <p>• Jun: Production deployment</p>
      <p>• Jul: AI nutrition chatbot (Rasa)</p>
      <p>• Jul: Open-source contribution</p>
    </div>
  ),
  projects: (
    <ul>
      <li>Clinicnet: A system that digitizes clinic operations</li>
      <li>Portfolio: My professional portfolio site</li>
    </ul>
  ),
  contacts: (
    <div>
      <ul>
        <li>Email: <Link
          to={'mailto:chemuku.jimmy@gmail.com'}>chemuku.jimmy@gmail.com</Link>
        </li>
        <li>GitHub: <Link to={'https://github.com/Jim-03'}>Jim-03</Link></li>
      </ul>
    </div>
  )
};

const PROJECTS = {
  clinicnet: {
    photo: clinic,
    name: 'Clinicnet',
    description: 'A system that is designed to streamline and manage the operations of a local medical clinic. Built primarily with Java and TypeScript, this project aims to provide an efficient, user-friendly platform for both medical staff and administrators to oversee appointments, patient records, billing, and more',
    completeFeatures: [
      'Role based access',
      'Patient Management',
      'Reporting',
      'Appointment Scheduling',
      'Staff Management'
    ],
    futureFeatures: [
      'jwt authentication',
      'Billing and Invoicing'
    ],
    techStack: [
      {
        stackName: 'React', stackIcon: <SiReact color="dodgerblue"/>
      },
      {
        stackName: 'Spring-Boot',
        stackIcon: <SiSpringboot color="green"/>
      },
      {
        stackName: 'Docker',
        stackIcon: <SiDocker color="dodgerblue"/>
      },
      {
        stackName: 'PostgresSQL',
        stackIcon: <SiPostgresql color="blue"/>
      }
    ],
    languages: [
      {languageName: 'Java', languageIcon: <FaJava color="orange"/>},
      {
        languageName: 'TypeScript',
        languageIcon: <SiTypescript color="dodgerblue"/>
      }
    ],
    liveUrl: 'https://jims-local-clinic.vercel.app',
    gitHubUrl: 'https://github.com/Jim-03/Local-Clinic'
  },
  portfolio: {
    photo: portfolio,
    name: 'Portfolio',
    description: 'My portfolio website that showcases my skills to potential recruiters',
    completeFeatures: [
      'GUI',
      'Home view',
      'Projects view',
      'About view',
      'Achievement view'
    ],
    futureFeatures: [
      'CLI'
    ],
    techStack: [
      {stackName: 'React', stackIcon: <SiReact color="dodgerblue"/>}
    ],
    languages: [
      {
        languageName: 'JavaScript',
        languageIcon: <SiJavascript color="yellow"/>
      }],
    liveUrl: 'https://jims-portfolio.vercel.app',
    gitHubUrl: 'https://github.com/Jim-03/Jim-03'
  }
};

function Cli() {
  const [history, setHistory] = useState([]);
  const [entries, setEntries] = useState([]);
  const [commandIndex, setCommandIndex] = useState(0);
  const [clearCount, setClearCount] = useState(0);
  const [showProject, setShowProject] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const commandRef = useRef(null);
  const cliEndRef = useRef(null);

  useEffect(() => {
    commandRef.current?.focus();
    cliEndRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [entries, clearCount, showProject]);

  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'ArrowUp': {
        e.preventDefault();
        const previous = commandIndex - 1;
        if (previous >= 0) {
          setCommandIndex(previous);
          commandRef.current.value = history[previous];
        }
        break;
      }
      case 'Enter': {
        e.preventDefault();
        const input = commandRef.current.value.trim();
        if (!input) return;

        const output = executeCommand(input);

        if (input.toLowerCase() !== 'clear') {
          setHistory(prev => [...prev, input]);
          setEntries(prev => [...prev, {input, output}]);
        }

        setCommandIndex(history.length + 1);
        commandRef.current.value = '';
        break;
      }
      case 'ArrowDown': {
        e.preventDefault();
        const next = commandIndex + 1;
        if (next < history.length) {
          setCommandIndex(next);
          commandRef.current.value = history[next];
        } else if (next === history.length) {
          setCommandIndex(next);
          commandRef.current.value = '';
        }
        break;
      }
    }
  }, [commandIndex, history.length]);

  const executeCommand = useCallback((input) => {
    const [cmd, arg] = input.split(' ').map(s => s.trim().toLowerCase());

    switch (cmd) {
      case 'help':
      case 'about':
      case 'achievement':
      case 'projects':
      case 'contacts':
        return COMMAND_OUTPUTS[cmd];

      case 'clear':
        setEntries([]);
        setClearCount(c => c + 1);
        return '';

      case 'project':
        if (!arg) return <p>Usage: project [project_name]</p>;
        if (PROJECTS[arg]) {
          setCurrentProject(PROJECTS[arg]);
          setShowProject(true);
          return '';
        }
        return <p>{arg}: Unknown project</p>;

      case 'exit':
        window.open('/', '_self');
        return '';

      default:
        return `${cmd}: command not found`;
    }
  }, []);

  return (
    <div className={styles.background}
         onClick={() => commandRef.current.focus()}>
      {entries.length === 0 && clearCount === 0 && (
        <p>Welcome! Type 'help' for available commands</p>
      )}

      {showProject && (
        <ProjectDetails
          project={currentProject}
          closeFunction={() => setShowProject(false)}
        />
      )}

      {entries.map((entry, index) => (
        <div key={index}>
          <div className={styles.inputGroup}>
            <span className={styles.prompt}>guest@portfolio:~$ </span>
            <span className={styles.input}>{entry.input}</span>
          </div>
          {entry.output && <div className={styles.output}>{entry.output}</div>}
        </div>
      ))}

      <div className={styles.inputGroup}>
        <span className={styles.prompt}>guest@portfolio:~$ </span>
        <input
          type="text"
          ref={commandRef}
          className={styles.input}
          placeholder="Enter command here..."
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>

      <div ref={cliEndRef}/>
    </div>
  );
}

export default Cli;