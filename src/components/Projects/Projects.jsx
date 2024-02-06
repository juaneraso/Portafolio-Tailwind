// Importa las bibliotecas necesarias
import React, { useEffect } from 'react';
import 'swiper/css/bundle';
import Swiper from 'swiper/bundle'; // Importa Swiper
import { AtSymbolIcon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faGlobe,faHouse } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  // useEffect para inicializar Swiper después de que el componente se monta
   
  const pokemon = "https://shorturl.at/kzACE";
  const flipante = "https://shorturl.at/psuAM";
  const rick = "https://shorturl.at/diyO5";
  const crud = "https://shorturl.at/zFY35";


  
  useEffect(() => {
    // Inicializa Swiper
    const mySwiper = new Swiper('.swiper-container', {
      // Configuración adicional aquí
      loop:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // Limpia Swiper cuando el componente se desmonta
    return () => {
      mySwiper.destroy();
    };
  }, []); // [] como segundo argumento asegura que el useEffect se ejecute solo una vez al montar el componente


  //border border-slate-950 relative
  return (
    
    <div className="swiper-container relative mt-8 ">
   
       <h1 className='text-cyan-50  text-center text-3xl' > Projects</h1>



      <div className="swiper-wrapper ">

        <div className="swiper-slide   grid place-items-center mb-12 ">          
          <img  className="w-1/2 h-fit mt-12  rounded-3xl" src={pokemon}  alt="Imagen 1" />    
          <div className="mt-4 ">            
          <a href="https://vite-pokemon-two.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">            
                  Visit
                  <FontAwesomeIcon icon={faGlobe} className=" w-6 h-6 ml-2" />                
                </button>          
            </a>
            <a href="https://github.com/juaneraso/POKEMONPROYECTO" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">                  
                Repository
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6 mr-2 ml-2" />            
            </button>
            </a>
          </div>                                   
        </div>


        <div className="swiper-slide  grid place-items-center mb-12">     
          <img  className="w-1/2 h-fit mt-12 rounded-3xl " src={rick}  alt="Imagen 1" />    
          <div className="mt-4">
            <a href="https://rick-and-morty-front-ivory.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">                
                  Visit 
                <FontAwesomeIcon icon={faGlobe} className=" w-6 h-6 ml-2" />                
               </button>
            </a>         
            <a href="https://github.com/juaneraso/rick_and_morty_mine" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
                Repository
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6 mr-2 ml-2" />              
            </button>
            </a>    

          </div>          
         </div>  
     
    
        <div className="swiper-slide  grid place-items-center mb-12">          
          <img  className="w-1/2 h-fit mt-12  rounded-3xl" src={flipante}  alt="Imagen 1" />    
          <div className="mt-4">
            <a href="https://espacio-flipante-pf.vercel.app/" target="_blank" rel="noopener noreferrer">
               <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                    Visit 
                   <FontAwesomeIcon icon={faGlobe} className=" w-6 h-6 ml-2" />
               </button>
            </a>    
            <a href="https://github.com/juaneraso/PF_FRONT_ESPACIO_FLIPANTE" target="_blank" rel="noopener noreferrer">           
               <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
                   Repository
                  <FontAwesomeIcon icon={faGithub} className="w-6 h-6 mr-2 ml-2" />                
               </button>
            </a>  
          </div>                       
        </div>
   

        <div className="swiper-slide  grid place-items-center mb-12">          
          <img  className="w-1/2 h-fit mt-12 rounded-3xl " src={crud}  alt="Imagen 1" />    
          <div className="mt-4">
            <a href="https://frontend-juangui.vercel.app/home" target="_blank" rel="noopener noreferrer">
               <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                      Visit 
                   <FontAwesomeIcon icon={faGlobe} className=" w-6 h-6 ml-2" />
               </button>
            </a>  
            <a href="https://github.com/juaneraso/Backend-Juangui" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
                     Repository
                  <FontAwesomeIcon icon={faGithub} className="w-6 h-6 mr-2 ml-2" />
               </button>
             </a>
          </div>     
        </div>

        {/* Agrega más slides según sea necesario */}
      </div>
      {/* Agrega la paginación del slider */}
     
      {/* Agrega la navegación del slider (flechas) */}
      <div className="swiper-pagination "></div>
   
      <div className="swiper-button-next mr-60  "></div>
      <div className="swiper-button-prev ml-60   "></div>

     
    </div>
  );
};

export default Projects;
