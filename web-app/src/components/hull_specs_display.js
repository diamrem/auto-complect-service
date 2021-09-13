import react from 'react';
import hull_types from './hull_types_specs.json'

function Spec_display() {
    return(
        <div>
            {hull_types.map((hull_types, index) => {
            return(
            <ul key={index}>
                <ul>Тип Двигателя <br/> {hull_types.engine}</ul>
                <ul>Тип топлива <br/> {hull_types.fuel_type}</ul>
                <ul>Трансмиссия <br/> {hull_types.transmission}</ul>
                <ul>Салон <br/> {hull_types.interior}</ul>
                <ul>Тип привода <br/> {hull_types.drive_type}</ul>
                <ul>мощность двигателя <br/> {hull_types.engine_power}</ul>
            </ul>);
            })}
        </div>
    )  
}
        

export default Spec_display