
import style from "../Header/Header.module.css"
const Header = () =>{
const imagen1 = 'https://shorturl.at/tuzG0';
const react_image = 'https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge';
const javascript_image = 'https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge';
const node_image= 'https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge';
const express_image = 'https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge';
const posgresql_image = 'https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white&style=for-the-badge';
const sequelize_image = 'https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=white&style=for-the-badge';
const html_image = 'https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white&style=for-the-badge';
const redux_image = 'https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=for-the-badge'
return(
   
<div className = "lg:flex items-center">
  <img className=" lg:w-32 h-32 ml-3  lg:ml-0 mb-3 lg:mb-0 rounded-3xl border border-blue-950 "  src={imagen1} alt="imagen de perfil"/>  
   
     <div className="ml-4">
        <h1 className="text-xl lg:text-2xl font-bold text-cyan-900 mb-2">Juan Guillermo Eraso - Fullstack Developer - Electronic Engineer</h1>
       
          <div className="flex flex-wrap space-x-2 lg:space-x-4 mt-2">
          <img className="w-20 h-12 rounded-md" src={javascript_image} alt="imagen javascript" />
          <img className="w-20 h-12 rounded-md" src={react_image} alt="imagen react" />
          <img className="w-20 h-12 rounded-md" src={node_image} alt="imagen node" />
          <img className="w-20 h-12 rounded-md" src={express_image} alt="imagen express" />
          <img className="w-20 h-12 rounded-md" src={posgresql_image} alt="imagen postgresql" />
          <img className="w-20 h-12 rounded-md" src={sequelize_image} alt="imagen sequelize" />
          <img className="w-20 h-12 rounded-md" src={redux_image} alt="imagen redux" />
          <img className="w-20 h-12 rounded-md" src={html_image} alt="imagen html" />
    
{/* 
             <img className="w-24 h-16  rounded-xl" src={javascript_image} alt="imagen javascript"/>                   
             <img className="w-24 h-16  rounded-xl " src={react_image} alt="imagen react"/>                  
             <img className="w-24 h-16  rounded-xl " src={node_image} alt="imagen html"/>
             <img className="w-24 h-16  rounded-xl " src={express_image} alt="imagen html"/>
             <img className="w-24 h-16  rounded-xl " src={posgresql_image} alt="imagen html"/>
             <img className="w-24 h-16  rounded-xl " src={sequelize_image} alt="imagen html"/>
             <img className="w-24 h-16  rounded-xl " src={redux_image} alt="imagen html"/>
             <img className="w-24 h-16  rounded-xl " src={html_image} alt="imagen html"/> */}
         
        </div>
      </div>
  
    </div>
 )

};


export default Header;