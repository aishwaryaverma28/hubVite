import React, { useState, useEffect, useRef } from 'react';
import styles from './Styles/Header.module.css';

const Header = () => {
  // ======================================================================hamburger menu toggle button
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // ==============================================================================header drop down menu
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dropDownMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const dropdownRef2 = useRef(null);

  const dropDownMenu2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleClickOutside2 = (event) => {
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setIsOpen2(false);
    }
  };

  const [isOpen3, setIsOpen3] = useState(false);
  const dropdownRef3 = useRef(null);

  const dropDownMenu3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleClickOutside3 = (event) => {
    if (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) {
      setIsOpen3(false);
    }
  };

  const [isOpen4, setIsOpen4] = useState(false);
  const dropdownRef4 = useRef(null);

  const dropDownMenu4 = () => {
    setIsOpen4(!isOpen4);
  };

  const handleClickOutside4 = (event) => {
    if (dropdownRef4.current && !dropdownRef4.current.contains(event.target)) {
      setIsOpen4(false);
    }
  };

  const [isOpen5, setIsOpen5] = useState(false);
  const dropdownRef5 = useRef(null);

  const dropDownMenu5 = () => {
    setIsOpen5(!isOpen5);
  };

  const handleClickOutside5 = (event) => {
    if (dropdownRef5.current && !dropdownRef5.current.contains(event.target)) {
      setIsOpen5(false);
    }
  };

  const [isOpen6, setIsOpen6] = useState(false);
  const dropdownRef6 = useRef(null);

  const dropDownMenu6 = () => {
    setIsOpen6(!isOpen6);
  };

  const handleClickOutside6 = (event) => {
    if (dropdownRef6.current && !dropdownRef6.current.contains(event.target)) {
      setIsOpen6(false);
    }
  };

  const [isOpen7, setIsOpen7] = useState(false);
  const dropdownRef7 = useRef(null);

  const dropDownMenu7 = () => {
    setIsOpen7(!isOpen7);
  };

  const handleClickOutside7 = (event) => {
    if (dropdownRef7.current && !dropdownRef7.current.contains(event.target)) {
      setIsOpen7(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('click', handleClickOutside2);
    document.addEventListener('click', handleClickOutside3);
    document.addEventListener('click', handleClickOutside4);
    document.addEventListener('click', handleClickOutside5);
    document.addEventListener('click', handleClickOutside6);
    document.addEventListener('click', handleClickOutside7);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', handleClickOutside2);
      document.removeEventListener('click', handleClickOutside3);
      document.removeEventListener('click', handleClickOutside4);
      document.removeEventListener('click', handleClickOutside5);
      document.removeEventListener('click', handleClickOutside6);
      document.removeEventListener('click', handleClickOutside7);
    };
  }, []);

  return (
    <>
      <header className={styles.headerContainer}>
        <img src='https://www.leadplaner.com/assetmain/images/leadplaner_logo.png' className={styles.logo} alt="Logo" />
        <div className={styles.headerLeft}>
          <div className={styles.dropdown} ref={dropdownRef}>
            <button className={styles.dropdownToggle} onClick={dropDownMenu}>
              Contacts <i className="fa-sharp fa-solid fa-angle-down"></i>
            </button>
            {isOpen && (
              <ul className={styles.dropdownMenu}>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
                <li>Option 5</li>
              </ul>
            )}
          </div>
          <div className={styles.dropdown} ref={dropdownRef2}>
            <button className={styles.dropdownToggle} onClick={dropDownMenu2}>
              Conversations <i className="fa-sharp fa-solid fa-angle-down"></i>
            </button>
            {isOpen2 && (
              <ul className={styles.dropdownMenu}>
                <li>About 1</li>
                <li>About 2</li>
              </ul>
            )}
          </div>
          <div className={styles.dropdown} ref={dropdownRef3}>
            <button className={styles.dropdownToggle} onClick={dropDownMenu3}>
              Scale <i className="fa-sharp fa-solid fa-angle-down"></i>
            </button>
            {isOpen3 && (
              <ul className={styles.dropdownMenu}>
                <li>Option 1</li>
                <li>Option 2</li>
              </ul>
            )}
          </div>
          <div className={styles.dropdown} ref={dropdownRef4}>
            <button className={styles.dropdownToggle} onClick={dropDownMenu4}>
              Services <i className="fa-sharp fa-solid fa-angle-down"></i>
            </button>
            {isOpen4 && (
              <ul className={styles.dropdownMenu}>
                <li>About 1</li>
                <li>About 2</li>
              </ul>
            )}
          </div>

          <div className={styles.dropdown} ref={dropdownRef5}>
            <button className={styles.dropdownToggle} onClick={dropDownMenu5}>
            Automation <i className="fa-sharp fa-solid fa-angle-down"></i>
            </button>
            {isOpen5 && (
              <ul className={styles.dropdownMenu}>
                <li>About 1</li>
                <li>About 2</li>
              </ul>
            )}
          </div>

          
          <div className={styles.dropdown} ref={dropdownRef6}>
            <button className={styles.dropdownToggle} onClick={dropDownMenu6}>
            Reports <i className="fa-sharp fa-solid fa-angle-down"></i>
            </button>
            {isOpen6 && (
              <ul className={styles.dropdownMenu}>
                <li>About 1</li>
                <li>About 2</li>
              </ul>
            )}
          </div>
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
              
               <div className={styles.dropdown} ref={dropdownRef7}>
                <span onClick={dropDownMenu7} className={styles.dropdownToggle}>  
                  <img className={styles.userIcon} src="https://www.leadplaner.com/dashboard/assets/img/user.png" alt="User" />
                  <i className="fa-sharp fa-solid fa-angle-down"></i>
               </span>
            {isOpen7 && (
              <ul className={styles.dropdownMenu}>
                <li>Login</li>
                <li>Register</li>
              </ul>
            )}
          </div>
            </li>
          </ul>
        </div>
        <div className={styles.NavhamburgerMenu}>
          <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <a href="#">
              <i className="fa-solid fa-bars fa-2xl"></i>
            </a>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className={styles.hamburgerMenuContainer}>
          <div className={styles.menuContent}>
            <div className={styles.closeBtnCont}>
              <button className={styles.closeButton} onClick={closeMenu}>
                <i className="fa-sharp fa-solid fa-x fa-2xl"></i>
              </button>
            </div>
            <div className={styles.dropdown}>
              <select className={styles.dropdownMenu}>
                <option value="#">Contacts</option>
                <option value="option2" className={styles.option}>Companies</option>
                <option value="option3" className={styles.option}>Calls</option>
                <option value="option4" className={styles.option}>Active Feed</option>
                <option value="option5" className={styles.option}>Lists</option>
              </select>
            </div>

            <div className={styles.dropdown}>
              <select className={styles.dropdownMenu}>
                <option value="#">Conversations</option>
                <option value="option2" className={styles.option}>About 1</option>
                <option value="option3" className={styles.option}>About 2</option>
              </select>
            </div>

            <div className={styles.dropdown}>
              <select className={styles.dropdownMenu}>
                <option value="#">Scale</option>
                <option value="option2" className={styles.option}>About 1</option>
                <option value="option3" className={styles.option}>About 2</option>
              </select>
            </div>

            <div className={styles.dropdown}>
              <select className={styles.dropdownMenu}>
                <option value="#">Service</option>
                <option value="option2" className={styles.option}>About 1</option>
                <option value="option3" className={styles.option}>About 2</option>
              </select>
            </div>

            <div className={styles.dropdown}>
              <select className={styles.dropdownMenu}>
                <option value="#">Automation</option>
                <option value="option2" className={styles.option}>About 1</option>
                <option value="option3" className={styles.option}>About 2</option>
              </select>
            </div>

            <div className={styles.dropdown}>
              <select className={styles.dropdownMenu}>
                <option value="#">Reports</option>
                <option value="option2" className={styles.option}>About 1</option>
                <option value="option3" className={styles.option}>About 2</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
