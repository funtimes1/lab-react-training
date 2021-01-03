import React from 'react'

function Rating() {

    let rating = [];

    const emptyStar = "\u2606"
    const filledStar = "\u2605"

    if (Rating == 0) {
        rating.push(emptyStar.repeat(5))
    }

    console.log(rating)


    return (
        <div className="rating">

            <p> {rating}</p>
        </div>
    )
}

export default Rating
