import React from 'react'
import './CreditCard.css'


function CreditCard(props) {

const styles = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`
}

const cardTypeLogo = {
    "Visa": "/img/visa.png",
    "Master Card": "/img/master-card.svg"
}


    return (
        <div style = {styles} className="creditCard">
            <img className="creditCardImg" type = {props.type} src={cardTypeLogo[props.type]} alt={props.lastName}></img>
            <div className="number"> {props.number}</div>
            <div className="expiration"> Expires {props.expirationMonth}/{props.expirationYear}</div>
            <div className="bank"> {props.bank}</div>
            <div className="owner"> {props.owner}</div>
            <div className="bgColor" backgroundColor = {props.bgColor}></div>
            <div className="color" color=  {props.color}></div>

        </div>
    )
}

export default CreditCard
