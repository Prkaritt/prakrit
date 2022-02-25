import React from 'react'
import styles from './Proj.module.css'
import './../App.css'
const Proj = ({el})=>{
    
    return (
        <div className={`${styles.container}`}> 

            <div className={`flex spb`}>
                <h4 className={`heading_tertiary`}>{el.id}</h4>
                <h4 className={`heading_tertiary ${styles.project_name}`}>{el.name}</h4>
            </div>
            <div className={`flex col`}>
                <h4 className={`heading_tertiary`}>Technologies Used:</h4>
                <ul>
                    {el.technologies.map(tech=><li>{tech}</li>)}
                </ul>
            </div>

        </div>
    )
}

export default Proj;