import React from 'react'
import "./RightSide.css"
import Rating from '@mui/material/Rating'
import getSymbolFromCurrency from 'currency-symbol-map'
export default function Product(props) {
  return (
    <div className="product">
        <div className="product__image">
            <div><img src={props.definition.image} height={"300px"}/> 
            </div>
        </div>
        <div className="product__name">
            {props.definition.name}    
        </div>
        <div className="product__rating">
            <Rating name="read-only" value="4" style={{fontSize:"20px"}} readOnly />
            {props.definition.rating}
        </div>
        <div className="product__price">
            {getSymbolFromCurrency('USD')}
            {props.definition.price}
        </div>
    </div>

  )
}
