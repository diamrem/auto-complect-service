import './Block_ford_cards.css';
import main_ford_pic1 from   '../img/main_pic1.jpg';
import minor_ford_pic101 from '../img/main_pic101.jpg';
import minor_ford_pic102 from '../img/main_pic102.jpg';
import minor_ford_pic103 from '../img/main_pic103.jpg';

import main_ford_pic2 from   '../img/main_pic2.jpg';
import minor_ford_pic201 from '../img/main_pic201.jpg';
import minor_ford_pic202 from '../img/main_pic202.jpg';
import minor_ford_pic203 from '../img/main_pic203.jpg';

import main_ford_pic3 from   '../img/main_pic3.jpg';
import minor_ford_pic301 from '../img/main_pic301.jpg';
import minor_ford_pic302 from '../img/main_pic302.jpg';
import minor_ford_pic303 from '../img/main_pic303.jpg';

import main_ford_pic4 from   '../img/main_pic4.jpg';
import minor_ford_pic401 from '../img/main_pic401.jpg';
import minor_ford_pic402 from '../img/main_pic402.jpg';
import minor_ford_pic403 from '../img/main_pic403.jpg';

import main_ford_pic5 from   '../img/main_pic5.jpg';
import minor_ford_pic501 from '../img/main_pic501.jpg';
import minor_ford_pic502 from '../img/main_pic502.jpg';
import minor_ford_pic503 from '../img/main_pic503.jpg';

import rectangle from '../img/rectangle.jpg'
import React, { Component } from "react";
// Это корневой компонент
// Сохраняйте компоненты в папке components
// Если создаёте универсальный компонет (например кнопка) сохраняйте в папку components/generic
// Для своих корневых компонентов можно создавать свои подпапки. Например components/products для компонета автомобиля


class Block_ford_cards extends  Component {
  render(){
  return (
    <body class="main-page-body">
    <div className="block_ford_cards">

       <div className="block_ford_card1">
       <img className="main_ford_pic" src={main_ford_pic1} alt="" />
       <div className="minor_ford_pic">  
       <img className="minor_ford_pic1" src={minor_ford_pic101} alt="" />
       <img className="minor_ford_pic2" src={minor_ford_pic102} alt="" />
       <img className="minor_ford_pic3" src={minor_ford_pic103} alt="" />   
       <img className="rectangle" src={rectangle} alt="" /> 
       </div>
       </div>


       <div className="block_ford_card2">
       <img className="main_ford_pic" src={main_ford_pic2} alt="" />
       <div className="minor_ford_pic">  
       <img className="minor_ford_pic1" src={minor_ford_pic201} alt="" />
       <img className="minor_ford_pic2" src={minor_ford_pic202} alt="" />
       <img className="minor_ford_pic3" src={minor_ford_pic203} alt="" />   
       <img className="rectangle" src={rectangle} alt="" /> 
       </div>
       </div>


       <div className="block_ford_card3">
       <img className="main_ford_pic" src={main_ford_pic3} alt="" />
       <div className="minor_ford_pic">  
       <img className="minor_ford_pic1" src={minor_ford_pic301} alt="" />
       <img className="minor_ford_pic2" src={minor_ford_pic302} alt="" />
       <img className="minor_ford_pic3" src={minor_ford_pic303} alt="" />   
       <img className="rectangle" src={rectangle} alt="" /> 
       </div>
       </div>


       <div className="block_ford_card4">
       <img className="main_ford_pic" src={main_ford_pic4} alt="" />
       <div className="minor_ford_pic">  
       <img className="minor_ford_pic1" src={minor_ford_pic401} alt="" />
       <img className="minor_ford_pic2" src={minor_ford_pic402} alt="" />
       <img className="minor_ford_pic3" src={minor_ford_pic403} alt="" />   
       <img className="rectangle" src={rectangle} alt="" /> 
       </div>
       </div>



       <div className="block_ford_card5">
       <img className="main_ford_pic" src={main_ford_pic5} alt="" />
       <div className="minor_ford_pic">  
       <img className="minor_ford_pic1" src={minor_ford_pic501} alt="" />
       <img className="minor_ford_pic2" src={minor_ford_pic502} alt="" />
       <img className="minor_ford_pic3" src={minor_ford_pic503} alt="" />   
       <img className="rectangle" src={rectangle} alt="" /> 
       </div>
       </div>
      
      
      </div>
    </body>
  );
  }
}

export default Block_ford_cards;