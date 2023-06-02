import React, { useState, useEffect, useRef } from 'react';
import styles from '../Components/Styles/BodyButton.module.css'
const BodyButton = () => {
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


  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('click', handleClickOutside2);
    return () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('click', handleClickOutside2);
    };
}, []);
  return (
    <div className={styles.bodyBtns}>

        <div className={styles.dropdown} ref={dropdownRef}>
            <button className={styles.dropdownToggle} onClick={dropDownMenu}>
              Contacts <i className="fa-sharp fa-solid fa-angle-down"></i>
            </button>
            {isOpen && (
              <ul className={styles.dropdownMenu}>
                <li>Calls</li>
                <li>Companies</li>
                <li>Contacts</li>
                <li>Dals</li>
                <li>Invoice</li>
                <li>Marketing Events</li>
                <li>Tickets</li>
              </ul>
            )}
        </div>
        
        <div className={styles.bodyBtnRight}>
            <span className={styles.dataQuality}>
                <i className="fa-solid fa-lock"></i>
                Data Quality
            </span>


            <div className={styles.dropdown} ref={dropdownRef2}>
            <button className={styles.actionBtn} onClick={dropDownMenu2}>
            Actions<i className="fa-sharp fa-solid fa-angle-down"></i>
            </button>
            {isOpen2 && (
              <ul className={styles.dropdownMenu}>
                <li>Edit Properties</li>
                <li>Manager Duplicates</li>
                <li>Fix Formatting Issues</li>
                <li>Restore Records</li>
              </ul>
            )}
        </div>
            {/* <select className={styles.actionBtn}>
                <option>Actions</option>
                <option>Edit Properties</option>
                <option>Manager Duplicates</option>
                <option>Fix Formatting Issues</option>
                <option>Restore Records</option>
            </select> */}
            <button className={styles.actionBtn}>Import</button>
            <button className={styles.actionBtnOrange}><span className={styles.arrowOrange}><i className="fa-sharp fa-solid fa-arrow-right fa-xl"></i></span>Create Contact</button>
        </div>
    </div>
  )
}

export default BodyButton