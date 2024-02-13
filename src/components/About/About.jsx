
import Juan from '../../assets/Juan.jpg'

const About = () =>{
  // const imagen1 = 'https://shorturl.at/tuzG0';
   const imagen1  = Juan;

 return (
    <div className = 'grid gap-4 grid-cols-2 relative mt-16 ml-40'>
    
      <div>
      <p className =' font-Protest-Revolution text-cyan-50  text-4xl text-center'>Welcome to my portfolio!</p>
      <br></br>
      <p className = "text-cyan-50 text-2xl ml-4 mr-16 justify-center font-Changa" >
      I am an electronic engineer and 
      software developer with a wide range of technical skills ranging 
      from electronics to web development. My passion for technology 
      has led me to acquire a diverse set of competencies that allow me to 
      approach complex projects from multiple perspectives.</p>
      </div>

      <div>
      <img className=" w-56 h-64 rounded-3xl mt-2 "  src={imagen1} alt="imagen de perfil"/> 
      </div>    
       

    </div>
    
 )

};

export default About;