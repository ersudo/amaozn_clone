import React, { useContext, useEffect, useState } from 'react'
import "./PlaceOrder.css"
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
// import { Checkbox } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';
export default function PlaceOrder(props) {
    const {item, size,increment} = useContext(CartContext)
    const [productDetails,setProductDetails] = useState([])
    let {id} = useParams()

    const addToCart = function(){
      increment(productDetails)
    }

    useEffect(() =>{

        // api call
        let list = [
          {
            "id":100010, 
            "name": "New Apple iPhone 10 (64GB) - Gree ", 
            "rating": "338,195", 
            "price":"58.399",   
            "emi": "1001",
            "review":"1000",
            "status": "In stock",
            "soldby": "Apple Store",
            "delivery":"Wednesday, Feb 8",
            "image":"https://ik.imagekit.io/amazon1230/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259746",
            "about": [
              "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
              "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
              "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
              "Face ID for secure authentication",
            ],
          },
          {
            "id":100011, 
            "name": "New Apple iPhone 11 (64GB) - Blue", 
            "rating": "338,195", 
            "price" : "58.399",
            "emi": "1001", 
            "review":"1500",
            "status": "In stock",
            "soldby": "Apple Store",
            "delivery":"Wednesday, Feb 8",
            "image":"https://ik.imagekit.io/amazon1230/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259877",
            "about": [
              "Desription for iphone 11 -bla bla",
              "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
              "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
              "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
              "Face ID for secure authentication",
            ],
          },
          {
            "id":100012, 
            "name": "New Apple iPhone 12 (64GB) - Black", 
            "rating" : "338,195", 
            "price" : "58.399", 
            "emi": "1001", 
            "review":"1450",
            "status": "In stock",
            "soldby": "Apple Store",
            "delivery":"Wednesday, Feb 8",
            "image":"https://ik.imagekit.io/amazon1230/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259867",
            "about": [
              "Desription for iphone 12 -bla bla",
              "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
              "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
              "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
              "Face ID for secure authentication",
            ],
          },
          {
            "id":100013,
            "name": "New Apple iPhone 13 (64GB) - Silverlight", 
            "rating" : "338,195", 
            "price" : "58.399", 
            "emi": "1001", 
            "review":"1248",
            "status": "In stock",
            "soldby": "Apple Store",
            "delivery":"Wednesday, Feb 8",
            "image":"https://ik.imagekit.io/amazon1230/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672395259807",
            "about": [
              "Desription for iphone 13 -bla bla",
              "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
              "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
              "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
              "Face ID for secure authentication",
            ],
          },
        ]
        // fake api
        let item = list.filter(item =>{
            if(item.id == id) return item
        })
        setProductDetails(item[0])
  },[])  

  return (
    <div> 
        <Grid container>
        <Grid item xs={5}>
            <img className="placeorder__image" src={productDetails.image}/>
        </Grid>
        <Grid item xs={4}>
            <div className="placerorder__description">
                <div style={{fontSize:"24px",lineHeight: "32px",fontWeight:"500"}}>{productDetails.name}</div> 
                {/* New Apple iPhone 11 (64GB) - Green  */}
                <div>
                    <Rating name="read-only" value="3" readOnly  style={{fontSize:"20px"}}/>
                    {productDetails.rating} ratings |
                    {productDetails.review}+ answered questions
                </div>
                <hr></hr>
                <div>
                    {/* <div className="textgap">Size: <strong>64GB</strong></div> */}
                    <div className="textgap">Price:	<span className="pricetag">${productDetails.price}</span></div>
                    <div className="textgap">FREE delivery: <strong>{productDetails.delivery}</strong></div>
                    <div className="textgap">EMI starts at $ {productDetails.emi}. No Cost EMI available</div>
                    <div className="textgap">$48.96 Shipping & Import Fees Deposit to Republic of Korea 
                    <span className="about__detail"> Details</span></div>
                    <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">{productDetails.status}</div>
                    <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>
                    <div className="textgap">Available at a lower price from <span className="about__seller"> other sellers </span>that may not offer free Prime shipping.</div>
                    
                </div>
                  <div>
                    <br></br>
                            <div style={{fontSize:"24px" }} className="textgap">About this item</div>
                            <div>
                                <ul>
                                {   
                                    productDetails.about!=undefined ?
                                    productDetails.about.map ( (item) =>(
                                        <li>{item}</li>
                                    )) : <span></span>
                                }
                                </ul>
                                {/* <ul> */}
                                {/* <li>6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
                                <li>Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
                                <li>Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
                                <li>12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo</li>
                                <li>Face ID for secure authentication</li>
                                <li>A13 Bionic chip with third-generation Neural Engine</li>
                                <li>Fast-charge capable</li>
                                </ul> */}
                            </div>
                        </div>
            </div>
        </Grid>
        <Grid item xs={3}>
            <Paper variant="outlined" className="placeorder__order">
                    <div>
                        <div className="textgap"><strong>Without Exchange</strong> <span className="pricetag">$354.99</span></div>
                        <div className="textgap" style={{marginTop:"10px"}}><strong> Add an Accessory</strong></div>
                        <div>
                            <label><input type="checkbox" ></input>Apple Airpods</label><br></br>
                            <label><input type="checkbox" ></input>Apple 20W USB Power Adapter</label>
                        </div>
                        <div>
                        
                            <button className="placeorder__button addtocart" onClick={addToCart}>Add to Cart</button>
                          <Link to ="/checkout">
                            <button className="placeorder__button buynow">Buy Now</button>
                          </Link>
                    </div>
                </div>
            </Paper>
            </Grid>
        </Grid>
    </div>
  )
}
