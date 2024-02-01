import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";


import style from "../Home/Home.module.css";


const Home = ()=>{

    return(
      <div className={style.homeStyle}>   
    
       <Header/>
       {/* <About/>
       <h1>Projects</h1> 
       <Projects/>
       <h1>Contact Me</h1> 
       <Contact/>
       <Footer/>     */}
       </div>

     
   
      
    )
};

export default Home ;