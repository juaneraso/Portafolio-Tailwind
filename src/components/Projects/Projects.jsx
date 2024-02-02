// Importa las bibliotecas necesarias
import React, { useEffect } from 'react';
import 'swiper/css/bundle';
import Swiper from 'swiper/bundle'; // Importa Swiper


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


  
  return (
    <div className="swiper-container border border-slate-950 relative ">
      <h1></h1>

      <div className="swiper-wrapper  border border-slate-950 ">
        <div className="swiper-slide   grid place-items-center mb-12">          
          <img  className="w-1/2 h-fit mt-12  rounded-3xl" src={pokemon}  alt="Imagen 1" />    
          <div className="mt-4 ">
          <a href="https://vite-pokemon-two.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Visit</button>
            </a>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">Botón 2</button>
          </div>                                   
        </div>

        <div className="swiper-slide  grid place-items-center">          
          <img  className="w-1/2 h-fit mt-12 rounded-3xl " src={rick}  alt="Imagen 1" />    
          <div className="mt-4">
            <a href="https://rick-and-morty-front-ivory.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Visit</button>
            </a>            
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">Botón 2</button>
          </div>          
         </div>  
     
    
        <div className="swiper-slide  grid place-items-center">          
          <img  className="w-1/2 h-fit mt-12  rounded-3xl" src={flipante}  alt="Imagen 1" />    
          <div className="mt-4">
            <a href="https://espacio-flipante-pf.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Visit</button>
            </a>               
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">Botón 2</button>
          </div>                       
        </div>
   

        <div className="swiper-slide  grid place-items-center">          
          <img  className="w-1/2 h-fit mt-12 rounded-3xl " src={crud}  alt="Imagen 1" />    
          <div className="mt-4">
            <a href="https://frontend-juangui.vercel.app/home" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Visit</button>
            </a>  
             <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">Botón 2</button>
          </div>     
        </div>

        {/* Agrega más slides según sea necesario */}
      </div>
      {/* Agrega la paginación del slider */}
     
      {/* Agrega la navegación del slider (flechas) */}
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next mr-60  "></div>
      <div className="swiper-button-prev ml-60   "></div>

     
    </div>
  );
};

export default Projects;
