

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
        <div className='bg-blue-950 border border-blue-950'>
        
          <h1 className='  text-center mt-2 text-4xl text-white font-Changa mb-3 '>Contact</h1>   
            
           <div className= 'flex justify-center' >
              <a href={whatsapp_url} target="_blank" rel="noopener noreferrer"><img className='w-24 h-24 mr-4 mt-4'  src={whatsapp} alt="imagen_whatsapp"/></a>
            
              <a href={linkedin_url} target="_blank" rel="noopener noreferrer"><img className='w-24 h-24 mr-4 mt-4' src={linkedin} alt="imagen_linkedin"/></a>
               
         
              <a href={github_url} target="_blank" rel="noopener noreferrer"><img className='w-24 h-24 mr-4 mt-4' src={github} alt="imagen_github"/></a>
           
              <a href={email_url} target="_blank" rel="noopener noreferrer"><img className='w-24 h-24 mr-4 mt-4' src={email} alt="imagen_email"/></a>

           </div>
        
           

       
        <h1 className='font-Protest-Revolution text-center text-3xl mt-6 mb-4 text-white'>Juan Guillermo - 2024 </h1>
      
        
        
             
           
     </div>

    )
};


export default Contact;