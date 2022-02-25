import React from 'react';
import styles from './Project.module.css';
import './../App.css';

import Proj  from './Proj';


const Project = ({name,projectList})=>{
    return (
        <div className={`${styles.container}`}>
            <h3 className={`heading_secondary`}>    
                {name}
            </h3>
            <div className={styles.heroContainer}>
                <div>
                    {projectList.map(el=><Proj key = {el.id} el={el}/>)}

                </div>
            </div>
        </div>
    )
}

export default Project;