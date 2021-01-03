import React from 'react'
import './DriverCard.css'

function DriverCard(props) {

    let rating = [];

    const emptyStar = "\u2606"
    const filledStar = "\u2605"

    if (props.rating == 0) {
        rating.push(emptyStar.repeat(5))
    } else {
        if (props.rating >= 0 && props.rating <= 1.4) {
            rating.push(filledStar, emptyStar.repeat(4))
        } else {
            if (props.rating >= 1.5 && props.rating <= 2.4) {
                rating.push(filledStar.repeat(2), emptyStar.repeat(3))
            } else {
                if (props.rating >= 2.5 && props.rating <= 3.4) {
                    rating.push(filledStar.repeat(3), emptyStar.repeat(2))
                } else {
                    if (props.rating >= 3.5 && props.rating <= 4.4) {
                        rating.push(filledStar.repeat(4), emptyStar.repeat(1))
                    } else {
                        if (props.rating >= 4.5 && props.rating <= 5.0) {
                            rating.push(filledStar.repeat(5))
                        }
                    }
                }
            }
        }
    }

    return (
        <div className="driverCard">
            <div className="name"> <b>{props.name} </b> </div>
            <div className="rating"> {rating} </div>
            <img className="driverCardImg" src={props.img} alt={props.name}></img>
            <div className="car"> {props.car.model} {props.car.licensePlate} </div>

        </div>
    )
}

export default DriverCard
