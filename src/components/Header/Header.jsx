
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
   
<div className = "flex items-center">
  <img className="w-32 h-32 ml-3  rounded-3xl border border-blue-950 mt-3"  src={imagen1} alt="imagen de perfil"/>  
  
     <div className="ml-4">
        <h1 className="text-xl font-bold">Juan Guillermo Eraso - Fullstack Developer - Electronic Engineer</h1>
       
          <div className="flex space-x-4  mt-2">
             <img className="w-24 h-16  rounded-xl" src={javascript_image} alt="imagen javascript"/>                   
             <img className="w-24 h-16  rounded-xl " src={react_image} alt="imagen react"/>                  
             <img className="w-24 h-16  rounded-xl " src={node_image} alt="imagen html"/>
             <img className="w-24 h-16  rounded-xl " src={express_image} alt="imagen html"/>
             <img className="w-24 h-16  rounded-xl " src={posgresql_image} alt="imagen html"/>
             <img className="w-24 h-16  rounded-xl " src={sequelize_image} alt="imagen html"/>
             <img className="w-24 h-16  rounded-xl " src={redux_image} alt="imagen html"/>
             <img className="w-24 h-16  rounded-xl " src={html_image} alt="imagen html"/>
         
        </div>
      </div>
  
    </div>
 )

};


export default Header;