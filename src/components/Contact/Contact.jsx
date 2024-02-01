import style from "../Contact/Contac.module.css";

const Contact  = () =>{

    const whatsapp = "https://shorturl.at/dilTY ";
    const linkedin = "https://shorturl.at/hCJMZ";
    const github = "https://shorturl.at/gnO27";
    const email = "https://shorturl.at/cK347";
    const whatsapp_url = "https://wa.me/+573146061549";
    const email_url = "mailto:juangui9508@hotmail.com";
    const linkedin_url ="https://www.linkedin.com/in/juan-guillermo-ing-electronico/";
    const github_url = "https://github.com/juaneraso";

    return(
        <div className={style.container}>

      
        <div className={style.card}>        

         <a href={whatsapp_url} target="_blank" rel="noopener noreferrer"><img className={style.imagen} src={whatsapp} alt="imagen_whatsapp"/></a>
       
        </div>  

        <div className={style.card}>

          <a href={linkedin_url} target="_blank" rel="noopener noreferrer"><img className={style.imagen} src={linkedin} alt="imagen_linkedin"/></a>

        </div>  

        <div className={style.card}>    
        
          <a href={github_url} target="_blank" rel="noopener noreferrer"><img className={style.imagen} src={github} alt="imagen_github"/></a>
          
        </div>  

        <div className={style.card}>         
        
          <a href={email_url} target="_blank" rel="noopener noreferrer"><img className={style.imagen} src={email} alt="imagen_email"/></a>

        </div>  
             
           
     </div>

    )
};


export default Contact;