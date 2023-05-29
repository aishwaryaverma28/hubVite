import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import styles from './App.css'

function App() {

  return (
    <div className={styles.dashboard}>
    <Header/>
    <Body/>
    </div>
  )
}

export default App
