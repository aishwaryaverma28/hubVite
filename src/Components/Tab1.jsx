import React from 'react'
import styles from './Styles/BodyTabination.module.css';

const Tab1 = () => {
  return (
    <div className={styles.tab1Header}> 
        <select>
            <option>Contact Owner</option>
            <option>Me</option>
            <option>Abhijit Das</option>
            <option>Unassigned</option>
        </select>
        <select>
            <option>Create Data</option>
            <option>Today</option>
            <option>Yesterday</option>
            <option>Tomorrow</option>
            <option>This Week</option>
        </select>
        <select>
            <option>Last Activity Data</option>
            <option>New</option>            
        </select>
        <select>
            <option>Last Status</option>
            <option>New</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Open Deal</option>
            <option>Unqualified</option>
        </select>
        <p className={styles.AdvancedFilters}><i className="fa-solid fa-filter"></i>Advanced Filters (0)</p>
       <button className={styles.tab1HeaderRightBtn}><i className="fa-solid fa-cloud-arrow-down"></i>
        Export Data
        </button>
        <button className={styles.tab1HeaderRightBtn}><i className="fa-solid fa-cloud-arrow-up"></i>
            Import Data
        </button>
        <button className={styles.tab1HeaderRightBtn}><i className="fa-solid fa-floppy-disk"></i>
            Save Data
        </button>
    </div>
  )
}

export default Tab1