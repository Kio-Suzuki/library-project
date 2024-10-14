import React from 'react';
import styles from './Titlebar.module.css';

function Titlebar({Title}) {

  return (
    <div className={styles.titleContainer}>
      <h1>{Title}</h1>
    </div>
  )
}

export default Titlebar
