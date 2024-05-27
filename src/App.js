import { useState } from "react";
import "./App.css";
import Square from "./square.js";
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "❌";
    } else {
      nextSquares[i] = "⭕️";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = " 🥇 🏆  The winner is  " + winner + "   ";
  } else {
    status = "Next player :" + (xIsNext ? "❌" : "⭕️");
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="container">
        <div className="row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

// export default function Board() {
//     const [squares, setSquares] = useState(Array(9).fill(null));
//     const [value, setValue] = useState(true);
//     function handleClick(i) {
//        const nextSquare = squares.slice()
//       if(!nextSquare[i]&&value){
//         nextSquare[i]="❌"
//       setValue=!value
//       setSquares(nextSquare)

//       }else if(!nextSquare&& !value){
//         nextSquare[i]="⭕️"
//          setValue=!value
//       setSquares(nextSquare)
//       }

//       }

//     }
//     return (
//       <button className="square" onClick={onSquareClick}>
//         {value}
//       </button>
//     );
//   }
//   return (
//     <div className="container">
//       <div className="row">
//         <Square value={square[0]} onClick={handleClick(0)}/>
//         <Square value={square[1]} onClick={handleClick(1)}/>
//         <Square value={square[2]} onClick={handleClick(2)}/>
//       </div>
//       <div className="row">
//          <Square value={square[3]} onClick={handleClick(3)}/>
//         <Square value={square[4]} onClick={handleClick(4)}/>
//         <Square value={square[5]} onClick={handleClick(5)}/>
//       </div>
//       <div className="row">
//          <Square value={square[6]} onClick={handleClick(6)}/>
//         <Square value={square[7]} onClick={handleClick(7)}/>
//         <Square value={square[8]} onClick={handleClick(8)}/>
//       </div>
//     </div>
//   );
// }
//   );
// }
