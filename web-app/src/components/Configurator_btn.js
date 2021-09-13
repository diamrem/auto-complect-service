import React from "react";

export default function Configurator_btn(props){
    return(
        <button className = "configurator_btn" onClick ={()=> console.log(props.hull_types)}>
            Конфигуратор
        </button>
    )
}
