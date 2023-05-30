import React, {useState} from 'react';
import styles from './Styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  return (
    <>
    <header className={styles.headerContainer}>
      <img src='https://www.leadplaner.com/dashboard/assets/img/logo.svg' className={styles.logo} alt="Logo" />
      <div className={styles.headerLeft}>
        

        <select className={styles.dropdownMenu}>
          <option value="#">Contacts</option>
          <option value="option2" className={styles.option}>Companies</option>
          <option value="option3" className={styles.option}>Calls</option>
          <option value="option4" className={styles.option}>Active Feed</option>
          <option value="option5" className={styles.option}>Lists</option>
        </select>

        <select className={styles.dropdownMenu}>
          <option value="#">Conversations</option>
          <option value="option2" className={styles.option}>About 1</option>
          <option value="option3" className={styles.option}>About 2</option>
        </select>

        <select className={styles.dropdownMenu}>
          <option value="#">Scale</option>
          <option value="option2" className={styles.option}>About 1</option>
          <option value="option3" className={styles.option}>About 2</option>
        </select>

        <select className={styles.dropdownMenu}>
          <option value="#">Service</option>
          <option value="option2" className={styles.option}>About 1</option>
          <option value="option3" className={styles.option}>About 2</option>
        </select>

        <select className={styles.dropdownMenu}>
          <option value="#">Automation</option>
          <option value="option2" className={styles.option}>About 1</option>
          <option value="option3" className={styles.option}>About 2</option>
        </select>

        <select className={styles.dropdownMenu}>
          <option value="#">Reports</option>
          <option value="option2" className={styles.option}>About 1</option>
          <option value="option3" className={styles.option}>About 2</option>
        </select>
      </div>

      <div className={styles.headerRight}>
        <ul className={styles.icons}>
          <li>
            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
          </li>
          <li>
            <a href="#"><i className="fa-solid fa-arrow-up-from-bracket"></i></a>
          </li>
          <li>
            <a href="#"><i className="fa-solid fa-house"></i></a>
          </li>
          <li>
            <a href="#"><i className="fa-solid fa-gear"></i></a>
          </li>
          <li>
            <a href="#"><i className="fa-solid fa-phone"></i></a>
          </li>
          <li>
            <a href="#"><i className="fa-solid fa-bell"></i></a>
          </li>
          <li>
            <div className="user-login-list">
              <img className={styles.userIcon} src="https://www.leadplaner.com/dashboard/assets/img/user.png" alt="User" />
              <select className={styles.loginDropdownMenu}>
                <option></option>
                <option>login</option>
                <option>register</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.hamburgerMenu}>
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <a href="#">
            <i className="fa-solid fa-bars"></i>
          </a>
        </button>

        
      </div>


    </header>
    {isMenuOpen && (
      <div className={styles.menuContent}>
        <select className={styles.dropdownMenu}>
          <option value="#">Contacts</option>
          <option value="option2" className={styles.option}>Companies</option>
          <option value="option3" className={styles.option}>Calls</option>
          <option value="option4" className={styles.option}>Active Feed</option>
          <option value="option5" className={styles.option}>Lists</option>
        </select>

        <select className={styles.dropdownMenu}>
          <option value="#">Conversations</option>
          <option value="option2" className={styles.option}>About 1</option>
          <option value="option3" className={styles.option}>About 2</option>
        </select>

        <select className={styles.dropdownMenu}>
          <option value="#">Scale</option>
          <option value="option2" className={styles.option}>About 1</option>
          <option value="option3" className={styles.option}>About 2</option>
        </select>

        <select className={styles.dropdownMenu}>
          <option value="#">Service</option>
          <option value="option2" className={styles.option}>About 1</option>
          <option value="option3" className={styles.option}>About 2</option>
        </select>

        <select className={styles.dropdownMenu}>
          <option value="#">Automation</option>
          <option value="option2" className={styles.option}>About 1</option>
          <option value="option3" className={styles.option}>About 2</option>
        </select>

        <select className={styles.dropdownMenu}>
          <option value="#">Reports</option>
          <option value="option2" className={styles.option}>About 1</option>
          <option value="option3" className={styles.option}>About 2</option>
        </select>
      </div>
    )}
    </>
  );
}

export default Header;
