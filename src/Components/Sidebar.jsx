import React from 'react'
import styles from'./Styles/BodyTabination.module.css'
const Sidebar = () => {
  return (
    <div>
        <div className={styles.tableLeft}>
            <h3>
                <i className='fa-solid fa-list-ul'></i>
                Out Line
            </h3>
            <br/>
            <hr/>
            <br/>
            <h4>
                <i className='fa-solid fa-diagram-next'></i>
                Group Rows
            </h4>
            <input type='text' placeholder="Search" className={styles.searchBar2}/>
            <br/><br/><br/>
            <hr/>
            <br/>
            <h4>
                <i className='fa-solid fa-chart-simple'></i>
                Columns
            </h4>
            <select name='Name' className={styles.sideBarDropDown}>
                <option value="1">Search...</option>
                <option value="2">Name</option>
                <option value="3">Last Name</option>
                <option value="4">E-Mail</option>
                <option value="5">Leads</option>
            </select>
            <br/><br/>
            <button className={styles.SidebarBtns}><span>Name</span><i className="fa-solid fa-x"></i></button>
            <br/>
            <button className={styles.SidebarBtns}><span>E-mail ID</span><i className="fa-solid fa-x"></i></button>
            <br/>
            <button className={styles.SidebarBtns}><span>Leads</span><i className="fa-solid fa-x"></i></button>
            
            <br/><br/>

        </div>
    </div>
  )
}

export default Sidebar