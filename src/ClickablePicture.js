import React from 'react';

class ClickablePicture extends React.Component {

    state = {
        currentImg: './img/persons/maxence.png'
    };

    clickHandler = () => {
        const clickedImg = './img/persons/maxence-glasses.png'
        this.setState({
            currentImg:clickedImg
        })
    }
       
    render() {
        return (
            <div>
            <img src= {this.state.currentImg} onClick= {this.clickHandler} alt= ""></img>
            </div>
        );
    }

}

export default ClickablePicture;

