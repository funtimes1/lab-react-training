import React from 'react'

function BoxColor(props) {

    let styles = {
    margin: '20px',
    width: '250px',
    height: '20px',
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    display: 'inline-block',
  };
    return (
        <div style = {styles} > rgb({props.r},{props.g},{props.b})</div>
    )
}

export default BoxColor
