import styles from './LandingPage.module.css';
import { HiDownload } from 'react-icons/hi';
import { FaComputerMouse } from 'react-icons/fa6';
import { FaTerminal } from 'react-icons/fa';
import { useNavigate } from 'react-router';

/**
 * A reusable component that displays the portfolios landing page
 */
function LandingPage () {
  const nav = useNavigate();

  return (
    <div className={styles.landingBackground}>
      <div className={styles.header}>
        <button className={styles.cvButton}>
          <HiDownload /> Download CV
        </button>
      </div>

      <div className={styles.centerContent}>
        <p className={styles.greeting}>
          Hello <span className={styles.wave}>👋</span>, I'm{' '}
          <span className={styles.nameHighlight}>Jimmy</span>
        </p>
        <p className={styles.tagline}>
          Full-Stack Developer | AI Enthusiast | Problem Solver
        </p>

        <div className={styles.modeSelection}>
          <button
            className={styles.guiButton} onClick={() => {
              nav('/gui');
            }}
          >
            <FaComputerMouse /> GUI
          </button>
          <button
            className={styles.cliButton} onClick={() => {
              nav('/cli');
            }}
          >
            <FaTerminal /> CLI
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
