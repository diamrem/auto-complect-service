import './Block_ford_cards.css';
import React, { Component } from "react";
import main_ford_pic from   '././img/main_pic.jpg';
import minor_ford_pic1 from '././img/main_pic01.jpg';
import minor_ford_pic2 from '././img/main_pic02.jpg';
import minor_ford_pic3 from '././img/main_pic03.jpg';
// Это корневой компонент
// Сохраняйте компоненты в папке components
// Если создаёте универсальный компонет (например кнопка) сохраняйте в папку components/generic
// Для своих корневых компонентов можно создавать свои подпапки. Например components/products для компонета автомобиля


class Block_ford_cards extends  Component {
  render(){
  return (
    <body class="main-page-body">


       <div className="block_ford_card1">
       <img className="main_ford_pic" src={main_ford_pic} alt="" />
       <div className="minor_ford_pic">  
       <img className="minor_ford_pic1" src={minor_ford_pic1} alt="" />
       <img className="minor_ford_pic2" src={minor_ford_pic2} alt="" />
       <img className="minor_ford_pic3" src={minor_ford_pic3} alt="" />   
  
     
    </div>
    </div>
    </body>
  );
  }
}

export default Block_ford_cards;