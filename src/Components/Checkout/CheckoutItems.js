import React from 'react'
import "./Checkout.css"

export default function CheckoutItems(props) {
  return (
    <div style={{border:"1px solid #E7E7E7", width:"95%",display:"flex" ,height:"250px", margin:"25px"}}>
        <div style={{margin:"25px"}}>
          <img  height ="200px" src="https://ik.imagekit.io/amazon1230/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259867"/>
        </div>
        <div style={{marginTop:"20px"}}>
            <div style={{fontSize:"20px"}} className="textgap"> New Apple iPhone 12 (64GB) - Blue </div>
            <div style={{fontWeight:"bold"}}className="textgap">50,999</div>
            <div className="textgap">In Stock</div>
        </div>
    </div>
  )
}
