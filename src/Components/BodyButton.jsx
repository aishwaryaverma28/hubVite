import React from 'react'
import styles from '../Components/Styles/BodyButton.module.css'
const BodyButton = () => {
  return (
    <div className={styles.bodyBtns}>
        <div className={styles.BodyButtonContacts}>
        <select className={styles.contactDropdown}>
            <option className={styles.contactHeading}>Contacts</option>
            <option className={styles.contact}>Calls</option>
            <option className={styles.contact}>Companies</option>
            <option className={styles.contact}>Dals</option>
            <option className={styles.contact}>Invoice</option>
            <option className={styles.contact}>Marketing Events</option>
            <option className={styles.contact}>Tickets</option>
        </select>
        </div>
        <div className={styles.bodyBtnRight}>
            <span className={styles.dataQuality}>
                <i className="fa-solid fa-lock"></i>
                Data Quality
            </span>
            <select className={styles.actionBtn}>
                <option>Actions</option>
                <option>Edit Properties</option>
                <option>Manager Duplicates</option>
                <option>Fix Formatting Issues</option>
                <option>Restore Records</option>
            </select>
            <button className={styles.actionBtn}>Import</button>
            <button className={styles.actionBtnOrange}>Create Contact</button>
        </div>
    </div>
  )
}

export default BodyButton