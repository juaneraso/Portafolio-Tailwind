
const About = () =>{
  const imagen1 = 'https://shorturl.at/tuzG0';


 return (
    <div className = "flex-col  text-center  relative mt-6">
    
      <p className ="text-blue-950 text-3xl">Welcome to my portfolio!</p>
      <p className ="text-blue-950 text-2xl" >I am an electronic engineer and software developer with a wide range of technical skills ranging from electronics to web development. My passion for technology has led me to acquire a diverse set of competencies that allow me to approach complex projects from multiple perspectives.</p>
      <img className=" w-56 h-64 rounded-3xl mt-2 mx-auto"  src={imagen1} alt="imagen de perfil"/>  

    </div>
    
 )

};

export default About;