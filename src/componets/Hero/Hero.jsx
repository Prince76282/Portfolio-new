import React from 'react';
import styles from "./hero.module.css";
import { getImageUrl } from '../../util';

const Hero = () => {
  return (
    <>
      
      <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Prince Kumar</h1>
            <p className={styles.description}>
              I'm a software engineer with a passion for learning new technologies and developing new projects.
              I'm currently working as a software engineer at <a href="https://www.linkedin.com/in/prince-kumar-95a515252/">LinkedIn</a>
              I'm currently looking for opportunities to work with a team of 4-5 people.
            </p>
            <a className={styles.contactBtn} href='mailto:princesharma76676@gmail.com'>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Hero-Image' className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
        </section>
    </>
  )
}

export default Hero
