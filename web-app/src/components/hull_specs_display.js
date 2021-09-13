import react from 'react';
import Price_list_btn from './Price_list_btn';
import hull_types from './hull_types_specs.json'
import Configurator_btn from './Configurator_btn';
import Hull_spec_prices from './Hull_spec_prices';

export default function Hull_specs_display() {
   return(
        <div>
            {hull_types.map((hull_types, index) => {
            return(
            <div>
                <Hull_spec_prices />
                <ul key={index}>
                    <ul>Тип Двигателя <br/> {hull_types.engine}</ul>
                    <ul>Тип топлива <br/> {hull_types.fuel_type}</ul>
                    <ul>Трансмиссия <br/> {hull_types.transmission}</ul>
                    <ul>Салон <br/> {hull_types.interior}</ul>
                    <ul>Тип привода <br/> {hull_types.drive_type}</ul>
                    <ul>мощность двигателя <br/> {hull_types.engine_power}</ul>
                </ul>
                <Price_list_btn />
                <Configurator_btn />
            </div>
            );
            })}
        </div>
   )
    
    // return(
    // <div>
    //     <Hull_spec_prices />
    //     <Spec_display />
    //     <Price_list_btn />
    //     <Configurator_btn />
    // </div>
    // )  
}