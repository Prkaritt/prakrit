import React from 'react';
import styles from './Languages.module.css'
import './../App.css'

const Languages = ()=>{
    return (
        <div className={` ${styles.container}`}>
            <h2 className={`heading_primary`}>Languages That Prakrit Speaks</h2>
            <div className={styles.heroContainer}>
                <ul className={styles.list}>
                    <h3>With Computer</h3>
                    <li>C++</li>
                    <li>Javascript</li>
                    <li>Python</li>
                </ul>
                <ul className={styles.list}>
                    <h3>With Humans</h3>
                    <li>English</li>
                    <li>Nepali</li>
                    <li>Hindi</li>
                    <li>Spanish</li>
                </ul>
            </div>
        </div>
        )
}
export default Languages;