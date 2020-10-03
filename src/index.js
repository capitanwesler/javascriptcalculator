import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board/board';
import './index.css';



class Calculator extends React.Component {
    state = {
        output: "0",
        point: false,
    };

    //This is for the handleClick
    handlerButtonClick= (e) => {
        let actualValue = e.target.value;

        //This is to handle the numbers
        if (parseInt(actualValue) >= 1 && parseInt(actualValue) <= 9) {  
            this.setState({
                output: this.state.output.replace(/^0/, "") + actualValue,
            });
        }

        //This is to handle ONE point in the number output
        if (actualValue === "." && !this.state.point) {
            this.setState({
                output: this.state.output.replace(/^0/, "") + actualValue,
                point: true
            });
        }
    }


    //This is the handler for the AC button
    handlerReset = () => {
        //This only set the state to zero, when is pressed
        // what i mean, sets the output to zero, and we can
        // clear the output
        this.setState({
            output: "0"
        });
    }

    render() {
        return(
            <div id="main-container">
                <Board 
                    outPut={this.state.output}
                    onClickNumber={this.handlerButtonClick}
                    onClickAc={this.handlerReset}
                />
                <div id="designed">
                    <span>Made by @Guillermo Rivas</span>
                </div>
            </div>
        );
    }
}

// ----------------------------------
//This is to render the main application in the div with the id="root"
ReactDOM.render(
    <React.StrictMode>
        <Calculator />
    </React.StrictMode>,
    document.getElementById("root")
);