import React from 'react'
import "./RightSide.css"
export default function Product(props) {
  return (
    <div className="product">
        <div className="product__image">
            <div><img src={props.image} height={"300px"}/> 
            </div>
        </div>
        <div className="product__name">
            {props.name}    
        </div>
        <div className="product__rating">
            {props.rating}
        </div>
        <div className="product__price">
            {props.price}
        </div>
    </div>

  )
}
