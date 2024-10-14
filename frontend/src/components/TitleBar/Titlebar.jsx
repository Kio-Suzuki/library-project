import React from 'react';
import styles from './Titlebar.module.css';

function Titlebar({Title, buttonTitle}) {

  return (
    <div className={styles.titleContainer}>
      <h1>{Title}</h1>
      <button className={styles.addButton}>{buttonTitle}</button>
    </div>
  )
}

export default Titlebar
