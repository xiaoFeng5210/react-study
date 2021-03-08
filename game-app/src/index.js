import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import _ from "lodash";
import {SubmitInfoForm} from "./useReducerDoc/index"

// class Square extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null
//     };
//   }

//   render() {
//     return (
//       <button className="square" onClick={() => this.props.emitBoardHandle()}>
//         {this.props.value}
//       </button>
//     );
//   }

//   handleClick() {
//     this.setState({
//       value: "团"
//     });
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.emitBoardHandle}>
      {props.value}
    </button>
  );
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 长度为9的空值数组
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  renderSquare(i) {
    return (
      <div>
        {/* <Square
        value={this.state.squares[i]}
        emitBoardHandle={() => this.handleClick(i)}
      /> */}
      </div>
    );
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "团" : "风";
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "胜者:" + winner;
    } else {
      status = "下一位玩家:" + (this.state.xIsNext ? "团子" : "小风");
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

        <SubmitInfoForm />
      </div>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    );
  }
}

// 判断胜出者
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
