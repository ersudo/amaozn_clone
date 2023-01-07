import React from 'react'
import "./LeftSide.css"
export default function LeftSidePanel(props) {
  return (
    <div className="LeftSize__main">
        <div className="LeftSide__header"> 
            Brand
        </div>
        <div className="LeftSide__brandname">
            <label className="brandname">
                <input type="checkbox" value ="Apple"/> Apple
            </label>
            <label className="brandname">
                <input type="checkbox" value ="Samsung"/> Samsung
            </label>
            <label className="brandname">
                <input type="checkbox" value ="MI"/> MI
            </label>
        </div>
    </div>
  )
}
