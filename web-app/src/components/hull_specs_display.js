import react from 'react';
import Price_list_btn from './Price_list_btn';
import hull_types from './hull_types_specs.json'
import Configurator_btn from './Configurator_btn';
import Hull_spec_prices from './Hull_spec_prices';

export default function Hull_specs_display() {
   return(
        <div className = "hull_specs_display_wrapper">
             {/* тут код проходит по json'у и подтягивает все хранящиеся там объекты */}
            {hull_types.map((hull_types, index) => {
            return(
            <div>
                {/* передает переменные для расчета цены */}
                <Hull_spec_prices base_price = {hull_types.base_price} base_price_currency = {hull_types.base_price_currency}/>
                {/* перечисление всех характеристик */}
                <ol key={index} className = "specs_display_list">
                    <ul>Тип Двигателя <br/> {hull_types.engine}</ul>
                    <ul>Тип топлива <br/> {hull_types.fuel_type}</ul>
                    <ul>Трансмиссия <br/> {hull_types.transmission}</ul>
                    <ul>Салон <br/> {hull_types.interior}</ul>
                    <ul>Тип привода <br/> {hull_types.drive_type}</ul>
                    <ul>мощность двигателя <br/> {hull_types.engine_power}</ul> 
                </ol>
                <Price_list_btn />
                {/* передает текущий объект в кнопку для конфигуратора (при нажатии на кнопку
                    в консоль выведет текущий объект) */}
                <Configurator_btn hull_types = {hull_types}/>
            </div>
            );
            })}
        </div>
   )
}