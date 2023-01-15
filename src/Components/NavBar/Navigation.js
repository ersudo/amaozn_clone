import React, {Component} from 'react'
import { CartContext } from '../CartContext';
import "./NavBar.css"
class  NavBar extends Component {

    static contextType = CartContext
    
    constructor(props) {
        super(props);
        this.state= { }
    }
    render() { 
        let {item,size,increment} = this.context    
        return ( 
        <div>
            <div className="navbar__component">
            <div className="navbar__logo"></div>
            <div className="navbar__locator">
                <div className="navbar__locatorImage"></div>
                <div className="navbar__location">Korea</div> 
            </div>
            <div className="navbar__searchcomponent">
            <div>
                <select className="nav__dropdown">
                    <option value="All">ALL</option>
                    <option value="Alexa">Alexa</option>
                    <option value="Books">Books</option>
                    <option value="Baby">Baby</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Clothes">Clothes</option>
                </select>
            </div>
                <div>
                    <input type="text" className="navbar__searchbox"/>
                </div>
                <div className="navbar__serachboxdiv">
                    <div className="navbar__searchicon"/>
                </div>
            </div>
            <div className="navbar__text navbar__signin">
                <div style={{fontSize: "14px"}}>Hello, Sign In</div>
                <div style={{fontWeight:"bold"}}>Account & Lists</div>
            </div>
            <div className="navbar__text navbar__returns">
                <div style={{fontSize: "14px"}}>Returns</div>
                <div style={{fontWeight:"bold"}}>& Order</div>
            </div>
            <div className="navbar__text navbar__cart">
                <div src="" className="cart_image"></div>
                <div className="cart__item">{size}</div>
                <div className="navbar__text_cart"> Cart</div>
            </div>
            </div> 
            <div className="navbar__footer">
                <div className="navbar__footer__text">Best Seller</div>
                <div className="navbar__footer__text">Mobile</div>
                <div className="navbar__footer__text">Amazon Pay</div>
                <div className="navbar__footer__text">Fashion</div>
                <div className="navbar__footer__text">Electronics</div>
                <div className="navbar__footer__text">Prime</div>
                <div className="navbar__footer__text">New Release</div>
                <div className="navbar__footer__text">Customer Service</div>
                <div className="navbar__footer__text">Computers</div>
                <div className="navbar__footer__text">Home & Kichen</div>
            </div>
        </div>
        );
    }
}
 
export default NavBar ;

