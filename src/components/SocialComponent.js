import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SocialComponent.module.css'

import instagram from './../assets/images/instagram.png'
import linkedin from './../assets/images/linkedin.png'
import github from './../assets/images/github.png'


const SocialComponent = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heroContainer}>
            <ul className={styles.list}>
                <li><a href="https://github.com/Prkaritt"><img src={github}/></a></li>
                <li><a href="https://www.linkedin.com/in/prakrit-uprety-41467922b/" ><img src={linkedin}/></a></li>
                <li><a href="https://www.instagram.com/prakrituprety/"><img src={instagram}/></a></li>
              
            </ul>
        </div>
    </div>
  )
}

export default SocialComponent