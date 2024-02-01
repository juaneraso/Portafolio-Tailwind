

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
        <div >

      
        <div >        

         <a href={whatsapp_url} target="_blank" rel="noopener noreferrer"><img  src={whatsapp} alt="imagen_whatsapp"/></a>
       
        </div>  

        <div>

          <a href={linkedin_url} target="_blank" rel="noopener noreferrer"><img  src={linkedin} alt="imagen_linkedin"/></a>

        </div>  

        <div >    
        
          <a href={github_url} target="_blank" rel="noopener noreferrer"><img  src={github} alt="imagen_github"/></a>
          
        </div>  

        <div>         
        
          <a href={email_url} target="_blank" rel="noopener noreferrer"><img  src={email} alt="imagen_email"/></a>

        </div>  
             
           
     </div>

    )
};


export default Contact;