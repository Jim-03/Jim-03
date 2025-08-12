import { FaUser } from 'react-icons/fa'
import { useState } from 'react'
import { HiDownload } from 'react-icons/hi'

/**
 * Reusable component that displays the sidebar
 * @param buttons Component props containing a list of buttons' details
 * @param buttons.name The name of the button
 * @param buttons.action Function to be called when the button is clicked
 * @param buttons.icon The button's Icon
 */
function Sidebar ({ buttons }) {
  const [activeButton, setActiveButton] = useState('Home')

  return (
    <div className="sidebar-container">
      <div className="sidebar-profile">
        <div className="sidebar-profile-photo">
          <FaUser className="profile"/>
        </div>
        <p className="fullName">Jimmy Chemuku Nyongesa</p>
        <p>Full-Stack Developer | AI enthusiast | Problem Solver</p>
      </div>
      <hr/>
      <div className="sidebar-buttons">
        {buttons.map((button, key) =>
          <button
            key={key}
            className={button.name === activeButton ? 'active' : null}
            onClick={() => {
              setActiveButton(button.name)
              button.action()
            }}
          >{button.icon} {button.name}
          </button>)}
      </div>
      <button className="cv-button">
        {/*TODO: Download CV */}
        <HiDownload/> Curriculum Vitae
      </button>
    </div>
  )
}

export default Sidebar
