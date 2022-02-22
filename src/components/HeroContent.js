import React from 'react';
import styles from './HeroContent.module.css'
const HeroContent = ()=>{
    return (
       <div className={styles.container}>
           <div className={styles.heroContainer}>
                <div className={styles.heroText}>
                    <h1>Prakrit Uprety</h1>
                    <p className={styles.heroDescription}>
                        Hi, I am a Computer Engineer having a deep interest in software development and Machine learning.
                        I make application and softwares that utilizes the power of Machine Learning to solve problems and make people's life easier.
                    </p>
                </div>
           </div>
       </div>
    )      
}

export default HeroContent;