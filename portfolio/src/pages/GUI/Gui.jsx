import Sidebar from '../../components/Sidebar.jsx';
import styles from './Gui.module.css';
import { FaHome, FaUser } from 'react-icons/fa';
import { BsDatabaseGear } from 'react-icons/bs';
import { TbFileCertificate } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import Home from '../../views/Home/Home.jsx';
import Header from '../../components/Header.jsx';

function Gui () {
  const [view, setView] = useState(<Home />);
  const [showSidebar, setShowSidebar] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

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
        <Sidebar buttons={[
          { name: 'Home', action: () => setView(<Home />), icon: <FaHome /> },
          {
            name: 'About',
            action: () => alert('Feature to be developed soon!'),
            icon: <FaUser />
          },
          {
            name: 'Achievements',
            action: () => alert('Feature to be developed soon!'),
            icon: <TbFileCertificate />
          },
          {
            name: 'Projects',
            action: () => alert('Feature to be developed soon!'),
            icon: <BsDatabaseGear />
          }
        ]}
        />}
      <section
        className={styles.viewSection} onClick={() => {
          if (windowSize < 768) {
            setShowSidebar(false);
          }
        }}
      >{view}
      </section>
    </div>
  );
}

export default Gui;
