import React from 'react';
import './LikeButton.css'

class LikeButton extends React.Component {

    state = {
        count: 0,
        bgColor: ""
    };

    handleIncrementClick = () => {

        // function getRandomColor() {
        //     let letters = '0123456789ABCDEF';
        //     let color = '#';
        //     for (let i = 0; i < 6; i++) {
        //       color += letters[Math.floor(Math.random() * 16)];
        //     }
        //     return color;
        //   }

        function getColor() {
            let backgroundColor = ""
            let color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
            for (let i = 0; i < color.length; i++) {
                backgroundColor = color[i]
            }
            return backgroundColor
        }


        this.setState({
            count: this.state.count + 1,
            bgColor: getColor()


        });

    }

    render() {
        return (
            <div className="likeButton">
                <button className="button" style={{ backgroundColor: this.state.bgColor }} onClick={this.handleIncrementClick}>{this.state.count} Likes</button>
            </div>
        );
    }

}

export default LikeButton;

