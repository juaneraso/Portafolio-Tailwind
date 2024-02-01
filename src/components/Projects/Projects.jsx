
import { Link } from "react-router-dom";
import style from "../Projects/Projects.module.css";

const Projects = () =>{

  const pokemon = "https://shorturl.at/bck13";
  const flipante = "https://shorturl.at/cCOT3";
  const rick = "https://shorturl.at/tBQUZ";
  const crud = "https://shorturl.at/bgHV1";
 

  return (
     <div className={style.container}>
      

        <div className={style.card}>
          <h1>Pokemon</h1>
        
          <img className={style.imagen} src={pokemon} alt="imagen de pokemon"/>

           <div className={style.container}>
            <Link to = "https://vite-pokemon-two.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className={style.centeredButton}>Deploy</button>
            </Link>       

            <Link to = "https://github.com/juaneraso/POKEMONPROYECTO" target="_blank" rel="noopener noreferrer">
              <button className={style.centeredButton}>GitHub</button>
            </Link>

           </div>

        </div>  
        

        <div className={style.card}>
          <h1>Rick and Morty </h1>       
          <img className={style.imagen} src={rick} alt="imagen de rick"/>

          <div className={style.container}>
            <Link to = "https://rick-and-morty-front-ivory.vercel.app/" target="_blank" rel="noopener noreferrer">
               <button className={style.centeredButton}>Deploy</button>
            </Link>    

            <Link to = "https://github.com/juaneraso/rick_and_morty_mine" target="_blank" rel="noopener noreferrer">
               <button className={style.centeredButton}>GitHub</button>
            </Link>   

           </div>

        </div>  

        <div className={style.card}>
          <h1>Espacio Flipante</h1>          
          <img  className={style.imagen} src={flipante} alt="imagen de flipante"/>

          <div className={style.container}>
            <Link to = "https://espacio-flipante-pf.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className={style.centeredButton}>Deploy</button>
            </Link>   

            <Link to = "https://github.com/juaneraso/PF_FRONT_ESPACIO_FLIPANTE" target="_blank" rel="noopener noreferrer">
               <button className={style.centeredButton}>GitHub</button>
            </Link> 

           </div>

        </div>  

        <div className={style.card}>
          <h1>CRUD Users</h1>        
          <img  className={style.imagen} src={crud} alt="imagen de crud"/>

          <div className={style.container}>
            <Link to =  "https://frontend-juangui.vercel.app/home" target="_blank" rel="noopener noreferrer">
            <button className={style.centeredButton}>Deploy</button>
            </Link>
            
            <Link to = "https://github.com/juaneraso/Backend-Juangui" target="_blank" rel="noopener noreferrer">
               <button className={style.centeredButton}>GitHub</button>
            </Link> 
           </div>

        </div>  
             
           
     </div>

  )

};

export default Projects;