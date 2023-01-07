import React from 'react'
import Product from './Product'
import "./RightSide.css"
export default function RightSidePanel(props) {
  return (
    <div className="RightSize__main">
        <Product name="New iPhone 11pro(64GB) - Green" price="58,399" rating="338,898" image="https://ik.imagekit.io/amazon1230/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259746"/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
  )
}
