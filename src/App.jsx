import styles from "./App.module.css";
import  Navbar   from './componets/Navbar/Navbar';
import  Hero  from './componets/Hero/Hero';
import  About  from './componets/about/About';
import { Contact } from "./componets/Contact/Contact";
import  {Projects} from "./componets/project/Projects";
import  Experience   from "./componets/Experience/Experience";



function App() {
  return (
    <div className={styles.App}>
     <Navbar/>
  <Hero/>
  <About/> 
  <Experience/>
  <Projects/>
  <Contact/>

{/* <Contact/> */}


      </div>
  );
}

export default App;
