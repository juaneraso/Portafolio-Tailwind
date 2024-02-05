

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
        <div className='flex justify-center mt-7 bg-sky-200'>

           
        <div className='mr-5'>        

         <a href={whatsapp_url} target="_blank" rel="noopener noreferrer"><img className='w-24 h-24'  src={whatsapp} alt="imagen_whatsapp"/></a>
       
        </div>  

        <div className='mr-5'>

          <a href={linkedin_url} target="_blank" rel="noopener noreferrer"><img className='w-24 h-24' src={linkedin} alt="imagen_linkedin"/></a>

        </div>  

        <div  className='mr-5' >    
        
          <a href={github_url} target="_blank" rel="noopener noreferrer"><img className='w-24 h-24' src={github} alt="imagen_github"/></a>
          
        </div>  

        <div className='mr-5' >         
        
          <a href={email_url} target="_blank" rel="noopener noreferrer"><img className='w-24 h-24' src={email} alt="imagen_email"/></a>

        </div>  
             
           
     </div>

    )
};


export default Contact;