import React, { useState } from 'react';
import { firestore } from '../../config/fire';
import styles from './Home.module.css'; // Import CSS Module as 'styles'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Home() {
  return (
    <div >
      <Navbar/>
      <div className={styles.big}>
    <div className={styles.gap}>
      <button className={styles.Hom} type="submit"><Link to="/Jobcreation">Create Job Listing</Link></button>
      </div>
      <div className={styles.gap}>
      <button className={styles.Hom} type="submit"><Link to="/Jobs">Search For a Job</Link></button>
      </div>
      <div className={styles.gap}>
      <button className={styles.Hom} type="submit"><Link to="/Applications">Applications</Link></button>
    </div>
    </div>
    </div>
  );
}

export default Home;
