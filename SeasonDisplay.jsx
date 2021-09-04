import React from "react";
import './SeasonDisplay.css'

const seasonConfig = {
    summer : {
        text : "It's summer" , 
        iconName : 'sun'
    } ,
    winter : {
        text : "It's winter" , 
        iconName : 'snowflake'
    }
}
const getSeason = (lat , month) =>{
    if(month > 2 && month <9){
        return lat > 0? 'summer' : 'winter'
    }else{
        return lat > 0? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat , new Date().getMonth())
    const {text , iconName} = seasonConfig[season]
    return (
      <div className = {`season-display ${season} `}>
        <i className={`icon-left  massive ${iconName} icon`}></i>
        <h1 className = 'main-text'>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
      </div>
    )
}

export default SeasonDisplay