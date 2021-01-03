import React from 'react'

function Random(props) {
   
    let randomNumber =  Math.floor(Math.random() * (props.max-props.min) + props.min)
    return (
            <div className="randomNumber"> {randomNumber} </div>
    )
}
export default Random
