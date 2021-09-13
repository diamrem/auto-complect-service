import React from "react";

export default function Hull_spec_prices(props) {
    return(
        <div>
            <p>Цена от {props.base_price} {props.base_price_currency}</p>
            <p>от {props.base_price*10} RUB</p>
        </div>
    )
}