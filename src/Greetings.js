import React from 'react'

function Greetings(props) {

    let greeting = ""

    if (props.lang == "en") {
        greeting = "Hello"
    }

    if (props.lang == "de") {
        greeting = "Hallo"
    }

    if (props.lang == "es") {
        greeting = "Hola"
    }

    return (

        <div>
            <div className="language"> {greeting} </div>

        </div>
    )
}

export default Greetings
