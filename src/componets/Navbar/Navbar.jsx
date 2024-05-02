import React,{useState} from 'react';

import styles from "./navbar.module.css";
import{getImageUrl} from "../../util"


const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <>
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>

      <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png"):getImageUrl("nav/menuIcon.png")} alt='menu-Button' onClick={()=> setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}  onClick={()=>setMenuOpen(false) } >
          <li>
            <a href="#about">About</a>
          </li>  
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>

          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
      
    </>
  )
}

export default Navbar;
