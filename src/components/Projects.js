import React from 'react';
import styles from './Projects.module.css';
import './../App.css'

import Project from './Project';

const projectList = [
    {
        id : 1,
        name : 'Inverse Kinematics of a 3 link manipulator using data driven approach',
        technologies : ["Python", "Neural Network", "Scikit Learn"]
    },
    {
        id : 2,
        name : 'Human Activity Recognition using ANN with accelerometer data',
        technologies : ["Python", "Neural Network", "Scikit Learn"]

    }
]
const mobileProjectList = [
    {
        id : 1,
        name : 'TODO App',
        technologies : ["React Native", "Redux"]
    },
    
]

const Projects = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.heroContainer}>
                <h2 className={`heading_primary`}>Projects</h2>
                <div className={`flex flex_responsive ${styles.projects_container}`}>
                    
                    <Project name="Machine Learning" projectList={projectList}/>

                    <Project name="Mobile App Developement" projectList={mobileProjectList}/>
                    
                    {/* <div>
                        Web Developement 
                    </div> */}
                </div>
            </div>
        </div>
            
      
    )
}

export default Projects;