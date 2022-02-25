import React from 'react';
import SocialComponent from '../../components/SocialComponent';
import Languages from '../../components/Languages';
import Projects from '../../components/Projects';
import styles from './MainScreen.module.css';

//Components Import
import HeroContent from '../../components/HeroContent';

const MainScreen = ()=>{   
    return (
       <>
        <SocialComponent/>
        <HeroContent/>
        <Languages/>
        <Projects/>
        
       </>
    )
}

export default MainScreen;