import React from 'react';
import Square from '../square/square';
import './board.css';

class Board extends React.Component {

    constructor(props) {
        super(props);

        //Operations symbols
        this.operationSymbols = ['*', '/', '+', '-'];
    }

    // This function is to call each square, deppending on the
    // input of the board
    renderSquare = (buttonValue, classButton, onClick, value) => {
        return (
            <Square
                key={`number-${buttonValue}`}
                buttonValue={buttonValue} 
                classButton={classButton}
                onClick={onClick}
                valueNumber={buttonValue}
            />
        );
    }

    render() {
        return(
            <div id="board-container">
                <div id="output-container">
                    <span>{this.props.outPut}</span>
                </div>
                <div id="operation-buttons">
                    {this.operationSymbols.map(symbol => this.renderSquare(symbol, 'operationButton'))}
                </div>
                <div id="numbers-container">
                    {this.renderSquare(7, "buttonNumber", this.props.onClickNumber)}
                    {this.renderSquare(8, "buttonNumber", this.props.onClickNumber)}
                    {this.renderSquare(9, "buttonNumber", this.props.onClickNumber)}
                    {this.renderSquare(4, "buttonNumber", this.props.onClickNumber)}
                    {this.renderSquare(5, "buttonNumber", this.props.onClickNumber)}
                    {this.renderSquare(6, "buttonNumber", this.props.onClickNumber)}
                    {this.renderSquare(1, "buttonNumber", this.props.onClickNumber)}
                    {this.renderSquare(2, "buttonNumber", this.props.onClickNumber)}
                    {this.renderSquare(3, "buttonNumber", this.props.onClickNumber)}
                    {this.renderSquare(0, "buttonNumber", this.props.onClickNumber)}
                    {this.renderSquare(".", "buttonNumber", this.props.onClickNumber)}
                    {this.renderSquare("AC", "buttonAC", this.props.onClickAc)}
                </div>
            </div>
        );
    }
}

export default Board;