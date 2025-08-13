import Sidebar from '../../components/Sidebar.jsx';
import styles from './Gui.module.css';
import { FaHome, FaUser } from 'react-icons/fa';
import { BsDatabaseGear } from 'react-icons/bs';
import { TbFileCertificate } from 'react-icons/tb';
import { useState } from 'react';
import Home from '../../views/Home/Home.jsx';
import Header from '../../components/Header.jsx';

function Gui () {
  const [view, setView] = useState(<Home />);
  const [showSidebar, setShowSidebar] = useState(false);
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
          if (window.length < 768) {
            setShowSidebar(false);
          }
        }}
      >{view}
      </section>
    </div>
  );
}

export default Gui;
