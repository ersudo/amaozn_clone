import React from 'react'
import "./Checkout.css"
import Grid from '@mui/material/Grid'
import CheckoutItems from './CheckoutItems'

export default function Checkout(props) {
  return (
    <div className="checkout__body"> 
        <Grid container>
            <Grid item={10}> 
                <div className="checkout__container">
                        <div style={{fontSize:"30px", fontWeight:"500", padding:"20px 0px 0px 20px"}}>Shopping Cart</div>
                        <div> 
                            <CheckoutItems/>
                            <CheckoutItems/>
                            <CheckoutItems/>
                        </div>
                </div>
            </Grid>
            <Grid item={2}> 
            <div style={{width:"300px",height:"200px",marginTop:"25px",padding:"20px", backgroundColor:"white"}}>
                  <div style={{fontSize:"26px"}}>Subtotal (2 items): <strong>1,01,998.00</strong> </div>
                  <div style={{paddingTop:"25px"}}>
                      <button className="placeorder__button">Proceed to buy</button>
                  </div>
            </div>
            </Grid>
        </Grid>
    </div>
  )
}
