import clinic from '../../assets/local-clinic.png';
import portfolio from '../../assets/portfolio.png';
import styles from './Project.module.css';
import { useState } from 'react';
import {
  SiDocker,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTypescript
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import ProjectDetails from './ProjectDetails.jsx';

function Project () {
  const [project, setProject] = useState({
    photo: null,
    name: '',
    description: '',
    completeFeatures: [''],
    futureFeatures: [''],
    techStack: [
      {
        stackName: '',
        stackIcon: null
      }],
    languages: [
      {
        languageName: '',
        languageIcon: null
      }],
    liveUrl: '',
    gitHubUrl: ''
  });
  const [showProject, setShowProject] = useState(false);
  return (
    <div className={styles.background}>
      {showProject && <ProjectDetails
        project={project}
        closeFunction={() => setShowProject(
          false)}
                      />}
      <section
        className={styles.project} onClick={() => {
          setProject({
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
                stackName: 'React', stackIcon: <SiReact color='dodgerblue' />
              },
              { stackName: 'Spring-Boot', stackIcon: <SiSpringboot color='green' /> },
              { stackName: 'Docker', stackIcon: <SiDocker color='dodgerblue' /> },
              { stackName: 'PostgresSQL', stackIcon: <SiPostgresql color='blue' /> }
            ],
            languages: [
              { languageName: 'Java', languageIcon: <FaJava color='orange' /> },
              {
                languageName: 'TypeScript',
                languageIcon: <SiTypescript color='dodgerblue' />
              }
            ],
            liveUrl: 'https://jims-local-clinic.vercel.app',
            gitHubUrl: 'https://github.com/Jim-03/Local-Clinic'
          });
          setShowProject(true);
        }}
      >
        <img src={clinic} alt='Clinic System' />
        <h2>Clinicnet</h2>
      </section>
      <section
        className={styles.project} onClick={() => {
          setProject({
            photo: portfolio,
            name: 'Portfolio',
            description: 'My portfolio website that showcases my skills to potential recruiters',
            completeFeatures: [
              'GUI',
              'Home view',
              'Projects view',
              'About view'
            ],
            futureFeatures: [
              'Achievement view',
              'CLI'
            ],
            techStack: [
              { stackName: 'React', stackIcon: <SiReact color='dodgerblue' /> }
            ],
            languages: [
              {
                languageName: 'JavaScript',
                languageIcon: <SiJavascript color='yellow' />
              }],
            liveUrl: 'https://jims-portfolio.vercel.app',
            gitHubUrl: 'https://github.com/Jim-03/Jim-03'
          });
          setShowProject(true);
        }}
      >
        <img src={portfolio} alt='Portfolio' />
        <h2>Portfolio</h2>
      </section>
    </div>
  );
}

export default Project;
