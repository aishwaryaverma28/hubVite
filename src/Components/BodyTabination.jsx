import React, { useState } from 'react';
import table from './table';
import styles from'./Styles/BodyTabination.module.css'
import Tab1 from './Tab1';
import Sidebar from './Sidebar';
const tabs = [
  {
    title: 'All Contacts',
    data: table,
  },
  {
    title: 'My Contacts',
    data: [
      {
        id: 1,
        Name: 'Tiger Nixon',
        LastName: 'Nixon',
        Title: 'N/A',
        Email: 'TigerNixon@gmail.com',
        Company: 'N/A',
        Position: 'System Architect',
        Office: 'Edinburgh',
        Leads: 'N/A',
        StartDate: '2011-04-25',
      },
      {
        id: 2,
        Name: 'Garrett Winters',
        LastName: 'Winters',
        Title: 'N/A',
        Email: 'GarrettWinters@gmail.com',
        Company: 'N/A',
        Position: 'Accountant',
        Office: 'Tokyo',
        Leads: 'N/A',
        StartDate: '2011-07-25',
      },
      {
        id: 3,
        Name: 'Ashton Cox',
        LastName: 'Cox',
        Title: 'N/A',
        Email: 'Vaneet.Gupta@ezuka.com',
        Company: 'N/A',
        Position: 'Junior Technical Author',
        Office: 'San Francisco',
        Leads: 'N/A',
        StartDate: '2009-01-12',
      },
    ],
  },
  {
    title: 'Unassigned Contacts',
    data: [
      {
        id: 1,
        Name: 'Tiger Nixon',
        LastName: 'Nixon',
        Title: 'N/A',
        Email: 'TigerNixon@gmail.com',
        Company: 'N/A',
        Position: 'System Architect',
        Office: 'Edinburgh',
        Leads: 'N/A',
        StartDate: '2011-04-25',
      },
      {
        id: 2,
        Name: 'Garrett Winters',
        LastName: 'Winters',
        Title: 'N/A',
        Email: 'GarrettWinters@gmail.com',
        Company: 'N/A',
        Position: 'Accountant',
        Office: 'Tokyo',
        Leads: 'N/A',
        StartDate: '2011-07-25',
      },
      {
        id: 3,
        Name: 'Ashton Cox',
        LastName: 'Cox',
        Title: 'N/A',
        Email: 'Vaneet.Gupta@ezuka.com',
        Company: 'N/A',
        Position: 'Junior Technical Author',
        Office: 'San Francisco',
        Leads: 'N/A',
        StartDate: '2009-01-12',
      },
    ],
  },
];

const BodyTabination = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabClick = (index) => {
    setActiveTab(index);
    setEmployees(tabs[activeTab]?.data);
    console.log(activeTab);
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
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index} id={styles.activeTab}
            className={index === activeTab ? "active" : ''} 
            onClick={() => handleTabClick(index)}>
            {tab.title}
          </button>
          ))}
        <h2>{tabs[activeTab].title}</h2>
        
      </div>
      {(tabs[activeTab].title === 'All Contacts') && (
        <>
        <Tab1/>
        </>


) } 
<div className={styles.tableDataBox}>
<Sidebar/>
      <div className={styles.tableData}>
      <input type='text' placeholder="Search" value={searchTerm} onChange={handleSearchTermChange} className={styles.searchBar}/>
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
          {/* {tabs[activeTab].data.map((row)=> */}
           {filteredItems.map((row)=>
          (
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
  );
};

export default BodyTabination;



