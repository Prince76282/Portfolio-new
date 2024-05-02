import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "../../util";

const About = () => {
  return (
    <>
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting a laptop"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("about/cursorIcon.png")}
                alt="Me sitting a laptop"/>
              <div className={styles.ItemText}>
                <h3>Introduction</h3>
                <p>
                My name is Prince Kumar. I am from  Jharkhand,Jamshedpur, 
                and I'm Currently Pursuing My B.Tech Degree in Computer
                 Science and Engineering from I.K.G.P.T. University, Mohali Campus 1.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem} >
              <img
                src={getImageUrl("about/serverIcon.png")}
                alt="Me sitting a laptop"/>
              <div className={styles.ItemText}>
                <h3>Professional Experience</h3>
                <p>
                My interests include Reading Books, Listening a Music,
                 and Playing Chess. I have Experience in HTML, CSS, JavaScript, Bootstrap, 
                 and React, I'm constantly learn and grow.
                </p>

              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
