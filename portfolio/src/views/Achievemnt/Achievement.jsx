import React from 'react';
import styles from './Achievement.module.css';
import { SiGithub } from 'react-icons/si';

function Achievements () {
  const achievementsData = [
    {
      title: 'Version Control',
      description: 'Version-controlled using Git & GitHub',
      year: 'July 2023',
      link: 'https://github.com/Jim-03/git_test/commit/c65e933607ba5edf21ac166fc482b3ccd1a17c64'
    }, {
      title: 'Web Development Foundations',
      description: 'Built my first webpage using HTML, laying the foundation for frontend development skills',
      year: 'July 2023',
      link: 'https://github.com/Jim-03/odin-recipes/commit/a9bbdd0ef8271c91f04613c665765b8ae807c933'
    }, {
      title: 'Bash Scripting',
      description: 'Created automation scripts using Bash',
      year: 'August 2023',
      link: 'https://github.com/Jim-03/odin-recipes/commit/a9bbdd0ef8271c91f04613c665765b8ae807c933'
    }, {
      title: 'Python Development',
      description: 'Developed Python programs',
      year: 'November 2023',
      link: 'https://github.com/Jim-03/alx-higher_level_programming/commit/a3df78604f70386235ae3efcf594d0be6057d60f'
    }, {
      title: 'Java Application',
      description: 'Built my first Java-based application',
      year: 'June 2024',
      link: 'https://github.com/Jim-03/alx-higher_level_programming/commit/a3df78604f70386235ae3efcf594d0be6057d60f'
    }, {
      title: 'JavaScript Development',
      description: 'Created an interactive JavaScript project',
      year: 'December 2024',
      link: 'https://github.com/Jim-03/shop-e/commit/46bfab2eb43780e15eeac4e4098eb72c72535792'
    }, {
      title: 'Team Project Contribution',
      description: 'Collaborated on a school-based project, contributing to backend development with JavaScript',
      year: 'February 2025',
      link: 'https://github.com/Jim-03/restaurant/commit/5ec92b231c155b4f001a1828393ae821057001cc'
    }, {
      title: 'React Development',
      description: 'Built my first component-based frontend project using React',
      year: 'February 2025',
      link: 'https://github.com/Jim-03/shop-e/commit/4b73c61d72a16227c856f27ba108264da7986f05'
    }, {
      title: 'Full-Stack Project',
      description: 'Developed a complete Spring-Boot and React stack application with backend APIs and frontend integration',
      year: 'April 2025',
      link: 'https://github.com/Jim-03/Local-Clinic/commit/2b786efd1d0a2a2a8f7dd42ba0083a8725697c95'
    }, {
      title: 'TypeScript Development',
      description: 'Developed a TypeScript-based React frontend',
      year: 'April 2025',
      link: 'https://github.com/Jim-03/Local-Clinic/commit/2b786efd1d0a2a2a8f7dd42ba0083a8725697c95'
    }, {
      title: 'Deployment',
      description: 'Deployed a full-stack project for presentation',
      year: 'June 2025',
      link: 'https://github.com/Jim-03/Local-Clinic/commit/2b786efd1d0a2a2a8f7dd42ba0083a8725697c95'
    }, {
      title: 'AI Chatbot',
      description: 'Created a Rasa-based chatbot that clusters Kenyan foods for nutrition-based recommendations',
      year: 'July 2025',
      link: 'https://github.com/Jim-03/Local-Clinic/commit/2b786efd1d0a2a2a8f7dd42ba0083a8725697c95'
    }, {
      title: 'Open-Source Contribution',
      description: 'Made my first GitHub pull request to improve documentation and code quality',
      year: 'July 2025',
      link: 'https://github.com/Vicmuratha/messagingproject/pull/1'
    }
  ];

  return (
    <div className={styles.background}>
      <div className={styles.achievementsContainer}>
        {achievementsData.map((achievement, index) => (
          <div key={index} className={styles.achievementCard}>
            <h2>{achievement.title}</h2>
            <p>{achievement.description}</p>
            <span className={styles.year}>{achievement.year}</span>
            <button
              title='GitHub repo'
              onClick={() => window.open(achievement.link, '_blank')}
            >
              <SiGithub color='orange' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
