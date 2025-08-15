import Sidebar from '../../components/Sidebar.jsx';
import styles from './Gui.module.css';
import { FaHome, FaUser } from 'react-icons/fa';
import { BsDatabaseGear } from 'react-icons/bs';
import { TbFileCertificate } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import Home from '../../views/Home/Home.jsx';
import Header from '../../components/Header.jsx';
import About from '../../views/About/About.jsx';
import Project from '../../views/Project/Project.jsx';
import Achievement from '../../views/Achievemnt/Achievement.jsx';

function Gui () {
  const [view, setView] = useState(<Home />);
  const [showSidebar, setShowSidebar] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [activeView, setActiveView] = useState('Home');

  useEffect(() => {
    function changeOnResize () {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', changeOnResize);
    if (windowSize <= 768) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
    return () => window.removeEventListener('resize', changeOnResize);
  }, [windowSize]);

  return (
    <div className={styles.background}>
      <Header openSide={() => setShowSidebar(prev => !prev)} />
      {showSidebar &&
        <Sidebar
          buttons={[
            { name: 'Home', action: () => { setView(<Home />); setActiveView('Home'); }, icon: <FaHome /> },
            {
              name: 'About',
              action: () => { setView(<About />); setActiveView('About'); },
              icon: <FaUser />
            },
            {
              name: 'Achievements',
              action: () => {setView(<Achievement/>); setActiveView("Achievements");},
              icon: <TbFileCertificate />
            },
            {
              name: 'Projects',
              action: () => { setView(<Project />); setActiveView('Projects'); },
              icon: <BsDatabaseGear />
            }
          ]} activeView={activeView} showSideBar={() => setShowSidebar(false)}
        />}
      <div
        className={styles.viewSection} onClick={() => {
          if (windowSize < 768) {
            setShowSidebar(false);
          }
        }}
      >{view}
      </div>
    </div>
  );
}

export default Gui;
