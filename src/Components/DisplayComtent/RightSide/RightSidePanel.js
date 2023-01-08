import React, { useEffect, useState } from 'react'
import Product from './Product'
import "./RightSide.css"
export default function RightSidePanel(props) {
  
  const [listOfProduct,setListOfProducts] = useState([])
  
  useEffect(() =>{
      let list = [
        {name: "iPhone10", rating: "338,195", price:"58,399" , image:"https://ik.imagekit.io/amazon1230/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259746"},
        {name: "iPhone11", rating: "338,195", price : "58,399", image:"https://ik.imagekit.io/amazon1230/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259877"},
        {name: "iPhone12", rating : "338,195", price : "58,399", image:"https://ik.imagekit.io/amazon1230/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259867"},
        {name: "iPhone13", rating : "338,195", price : "58,399", image:"https://ik.imagekit.io/amazon1230/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259807"},
      ]
      setListOfProducts(list)
  })  

  return (
    <div className="RightSize__main">
        {/* <Product name="New iPhone 11pro(64GB) - Green" price="58,399" rating="338,898" image="https://ik.imagekit.io/amazon1230/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259746"/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/> */}
        {
          listOfProduct.map( (item) =>(
            // <Product rating ={item.rating} name = {item.name} image={item.image} price={item.price}/>
            <Product definition={item}/>
          ))
        }
    </div>
  )
}
