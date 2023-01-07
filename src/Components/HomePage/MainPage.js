import React, { Component } from 'react'
import AdvertismentOne from './AdvertisementOne/AdvertismentOne';
import AdvertismentFour from './AdvertisementFour/AdvertismentFour';
import "./MainPage.css"
class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="mainpage">
                <div style={{paddingTop: "260px", display:"flex",flexWrap:"wrap"}}>
                    <AdvertismentOne/>
                    <AdvertismentFour/>
                    <AdvertismentOne/>
                    <AdvertismentFour/>
                    <AdvertismentOne/>
                    <AdvertismentFour/>
                </div>
            </div>
         );
    }
} 
export default MainPage;