
// import { Link } from "react-router-dom";


// const Projects = () =>{

//   const pokemon = "https://shorturl.at/bck13";
//   const flipante = "https://shorturl.at/cCOT3";
//   const rick = "https://shorturl.at/tBQUZ";
//   const crud = "https://shorturl.at/bgHV1";
 

//   return (
//      <div className="border border-black grid grid-cols-2" >     

//         <div className="border border-black" >
//           <h1>Pokemon</h1>
        
//           <img className= " w-96 h-52" src={pokemon} alt="imagen de pokemon"/>

//            <div  >
//             <Link to = "https://vite-pokemon-two.vercel.app/" target="_blank" rel="noopener noreferrer">
//             <button >Deploy</button>
//             </Link>       

//             <Link to = "https://github.com/juaneraso/POKEMONPROYECTO" target="_blank" rel="noopener noreferrer">
//               <button >GitHub</button>
//             </Link>

//            </div>

//         </div>  
        

//         <div className="border border-black" >
//           <h1>Rick and Morty </h1>       
//           <img className= " w-96 h-52" src={rick} alt="imagen de rick"/>

//           <div >
//             <Link to = "https://rick-and-morty-front-ivory.vercel.app/" target="_blank" rel="noopener noreferrer">
//                <button >Deploy</button>
//             </Link>    

//             <Link to = "https://github.com/juaneraso/rick_and_morty_mine" target="_blank" rel="noopener noreferrer">
//                <button >GitHub</button>
//             </Link>   

//            </div>

//         </div>  

//         <div className="border border-black" >
//           <h1>Espacio Flipante</h1>          
//           <img  className= " w-96 h-52" src={flipante} alt="imagen de flipante"/>

//           <div >
//             <Link to = "https://espacio-flipante-pf.vercel.app/" target="_blank" rel="noopener noreferrer">
//             <button >Deploy</button>
//             </Link>   

//             <Link to = "https://github.com/juaneraso/PF_FRONT_ESPACIO_FLIPANTE" target="_blank" rel="noopener noreferrer">
//                <button >GitHub</button>
//             </Link> 

//            </div>

//         </div>  

//         <div className="border border-black"  >
//           <h1>CRUD Users</h1>        
//           <img className= " w-96 h-52"   src={crud} alt="imagen de crud"/>

//           <div >
//             <Link to =  "https://frontend-juangui.vercel.app/home" target="_blank" rel="noopener noreferrer">
//             <button >Deploy</button>
//             </Link>
            
//             <Link to = "https://github.com/juaneraso/Backend-Juangui" target="_blank" rel="noopener noreferrer">
//                <button >GitHub</button>
//             </Link> 
//            </div>

//         </div>  
             
           
//      </div>

//   )

// };

// export default Projects;



import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const sliderRef = React.useRef();

  const pokemon = "https://shorturl.at/bck13";
  const flipante = "https://shorturl.at/cCOT3";
  const rick = "https://shorturl.at/tBQUZ";
  const crud = "https://shorturl.at/bgHV1";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    centerMode: false,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

//className= " w-96 h-52"
  return (
     
   <div>
    <button onClick={handlePrev} className="bg-blue-500 text-white px-4 py-2 mr-2">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
 
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img className="w-12 h-12" src={pokemon} alt="Pokemon" />
        </div>
        {/* <div>
          <img className="w-12 h-12" src={rick} alt="Rick" />
        </div> */}
      
      </Slider>
   
      <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 ml-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
    </div> 
   
  );
};

export default Projects;

