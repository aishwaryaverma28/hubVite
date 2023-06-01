import React, { useState } from 'react';
import table from './table';
import styles from'./Styles/BodyTabination.module.css'
import Tab1 from './Tab1';
import Sidebar from './Sidebar';
const tabs = table
const BodyTabination = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabClick = (index) => {
    setActiveTab(index);
    setEmployees(tabs[activeTab]?.data);
    // console.log(activeTab);
    // console.log(index);
  };
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
   };
  const filteredItems = ((tabs[activeTab]?.data||[]).filter((item) =>
   item.Name.toLowerCase().includes(searchTerm.toLowerCase())
  ));
  
  
  return (
    <div className={styles.tabBox}>
      <div className={styles.tabButtons}>
        <div className={styles.tabs}>
          <button className={styles.tab1} disabled/>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${styles.tab} ${index === activeTab ? styles.activeTab : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
          <button className={styles.tab3} disabled>+ Add View (3/3)</button>
          <button className={styles.tab3} disabled>All View (3/3)</button>
        </div>
        
      </div>
      <div className={styles.tabContent}>
        <div className={styles.tab1DropDown}>
        {tabs[activeTab].title === 'All Contacts' && <Tab1 />}
      </div>
      <div className={styles.tableDataBox}>
        <Sidebar />
        <div className={styles.tableData}>
          <input
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={handleSearchTermChange}
            className={styles.searchBar}
          />
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Title</th>
                <th>E-Mail Address</th>
                <th>Company/Account</th>
                <th>Position</th>
                <th>Office</th>
                <th>Leads</th>
                <th>Start Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.Name}</td>
                  <td>{row.LastName}</td>
                  <td>{row.Title}</td>
                  <td>{row.Email}</td>
                  <td>{row.Company}</td>
                  <td>{row.Position}</td>
                  <td>{row.Office}</td>
                  <td>{row.Leads}</td>
                  <td>{row.StartDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default BodyTabination;



