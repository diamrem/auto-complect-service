import React from "react";

export default function Configurator_btn(props){
    return(
        // фукционала пока нет, при нажатии выводит данные по текщему кузову в консоль
        <button className = "configurator_btn" onClick ={()=> console.log(props.hull_types)}>
            Конфигуратор
        </button>
    )
}
