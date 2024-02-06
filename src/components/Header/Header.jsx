

const Header = () =>{

const react_image = 'https://shorturl.at/hnzC8';
const javascript_image = 'https://shorturl.at/eghp9';
const node_image= 'https://shorturl.at/kprY4';
const express_image = 'https://shorturl.at/lwJY3';
const posgresql_image = 'https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white&style=for-the-badge';
const sequelize_image = 'https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=white&style=for-the-badge';
const html_image = 'https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white&style=for-the-badge';
const redux_image = 'https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=for-the-badge';
const mongoDB = 'https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge';
const nestJS = 'https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white&style=for-the-badge';
const reactNative = 'https://img.shields.io/badge/React Native-61DAFB?logo=react&logoColor=white&style=for-the-badge';
const tailWind = 'https://img.shields.io/badge/Tailwind CSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge';

return(
    
<div className = "mt-2 flex flex-wrap justify-center ">
  
   
        <h1 className="text-xl lg:text-3xl font-bold text-cyan-50 mb-4 text-center  ">Juan Guillermo Eraso - Fullstack Developer - Electronic Engineer</h1>
       
          {/* <div className="flex flex-wrap  space-x-6 space-y-4 border border-amber-300"> */}
          {/* grid grid-flow-row-dense grid-cols-3 grid-rows-3
          
           border border-amber-300
          */}
          
          <div className="grid gap-6 grid-cols-6 ml-4  ">   
                    
          <img className="w-32 h-12 rounded-md" src={javascript_image} alt="imagen javascript" />                     
          <img className="w-32 h-12 rounded-md" src={react_image} alt="imagen react" />           
          <img className="w-32 h-12 rounded-md" src={node_image} alt="imagen node" />
          <img className="w-32 h-12 rounded-md" src={express_image} alt="imagen express" />
          <img className="w-32 h-12 rounded-md" src={posgresql_image} alt="imagen postgresql" />
          <img className="w-32 h-12 rounded-md" src={sequelize_image} alt="imagen sequelize" />
          <img className="w-32 h-12 rounded-md" src={redux_image} alt="imagen redux" />
          <img className="w-32 h-12 rounded-md" src={html_image} alt="imagen html" /> 
          <img className="w-32 h-12 rounded-md" src={mongoDB} alt="imagen html" /> 
          <img className="w-32 h-12 rounded-md" src={nestJS} alt="imagen html" />
          <img className="w-32 h-12 rounded-md" src={reactNative} alt="imagen html" />
          <img className="w-32 h-12 rounded-md" src={tailWind} alt="imagen html" />
          
        </div>
      
  
    </div>
 )

};


export default Header;