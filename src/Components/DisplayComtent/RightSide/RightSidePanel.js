import React, { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import Product from './Product'
import "./RightSide.css"
export default function RightSidePanel(props) {
  
  const [listOfProduct,setListOfProducts] = useState([])
  
  useEffect(() =>{
      let list = [
        {
          id:100010, 
          name: "iPhone10", 
          rating: "338,195", 
          price:"58,399" ,   
          image:"https://ik.imagekit.io/amazon1230/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259746",
          about: [
            "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
            "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
            "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
            "Face ID for secure authentication",
          ],
        },
        {id:100011, 
          name: "iPhone11", 
          rating: "338,195", 
          price : "58,399", 
          image:"https://ik.imagekit.io/amazon1230/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259877",
          about: [
            "Desription for iphone 11 -bla bla",
            "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
            "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
            "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
            "Face ID for secure authentication",
          ],
        },
        {
          id:100012, 
          name: "iPhone12", 
          rating : "338,195", 
          price : "58,399", 
          image:"https://ik.imagekit.io/amazon1230/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259867",
          about: [
            "Desription for iphone 12 -bla bla",
            "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
            "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
            "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
            "Face ID for secure authentication",
          ],
        },
        {
          id:100013,
          name: "iPhone13", 
          rating : "338,195", 
          price : "58,399", 
          image:"https://ik.imagekit.io/amazon1230/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259807",
          about: [
            "Desription for iphone 13 -bla bla",
            "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
            "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
            "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
            "Face ID for secure authentication",
          ],
        },
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
          listOfProduct.map((item) =>(
              <Link to ={'/order/'+item.id}>
              <Product definition={item}/>
              </Link>
            // <Product rating ={item.rating} name = {item.name} image={item.image} price={item.price}/>
          ))
        }
    </div>
  )
}
