import React, { useEffect, Fragment, createContext, useContext } from 'react';
import { FaUndo, FaRedo } from "react-icons/fa"
import useReducerWithHistory from "./useReducerWithHistory"
import ReactDOM from 'react-dom';
import './index.css';

// Initialize a state for the game
let gameState = null

// Initialize a context for the game
const gameContext = createContext()

function Game() {
  // Create the reducer pattern for the state
  const [state, dispatch, canUndo, undo, canRedo, redo] = useReducerWithHistory(
    (state, action) => {
      switch (action.type) {
        case "SQUARE_CLICKED":
          return { ...state, squares: action.squares, stepNumber: action.stepNumber, xIsNext: action.xIsNext }
        default:
          return { ...state }
      }
    },
    gameState || {
      squares: Array(9).fill(null),
      stepNumber: 0,
      xIsNext: false,
    }
  )

  // Grab the neccesary values from the state
  const { squares, xIsNext } = state

  // Effect to synchronize the gameState variable
  useEffect(() => {
    gameState = state
  })

  // Define the context object
  const context = {state, dispatch}

  // Calculate the winner
  const winner = calculateWinner(squares)

  // Calculate the status
  let status;
  if (winner) {
    status = 'Winner: ' + winner
  } else if (isTie(squares)) {
    status = "Tie!"
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  // Provide that state as context for the Board
  return (
    <div className="game">
      <div className="game-board">
        <h1>Tic-Tac-Toe</h1>
        <gameContext.Provider value={context}>
          <Board />
        </gameContext.Provider>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={undo} disabled={!canUndo()}>Undo <FaUndo/></button>
          <button onClick={redo} disabled={!canRedo()}>Redo <FaRedo/></button>
        </div>
      </div>
    </div>
  );
}

function Board() {
  // Inherit state from context
  const {state} = useContext(gameContext)

  // Grab the squares from the state
  const { squares } = state
  
  // Provide values and IDs for the squares
  return (
    <Fragment>
     { squares && (
      <Fragment>
        <div className="board-row">
          <Square boardId={0}>{squares[0]}</Square>
          <Square boardId={1}>{squares[1]}</Square>
          <Square boardId={2}>{squares[2]}</Square>
        </div>
        <div className="board-row">
          <Square boardId={3}>{squares[3]}</Square>
          <Square boardId={4}>{squares[4]}</Square>
          <Square boardId={5}>{squares[5]}</Square>
        </div>
        <div className="board-row">
          <Square boardId={6}>{squares[6]}</Square>
          <Square boardId={7}>{squares[7]}</Square>
          <Square boardId={8}>{squares[8]}</Square>
        </div>
      </Fragment>)} 
    </Fragment>
    
  )
}

function Square(props) {
  // Inherit state and dispatch from context
  const { state, dispatch } = useContext(gameContext)

  // Grab the neccesary values from the state
  const { squares, stepNumber, xIsNext } = state

  let squaresCopy = {...squares}
  let stepNumberCopy = stepNumber
  let xIsNextCopy = xIsNext

  // Function to handle all square clicks
  const handleClick = () => {
    // If nobody has won, and the square is not already set,
    if (!calculateWinner(squares) && !squares[props.boardId]) {
      // Update the state
      squaresCopy[props.boardId] = xIsNext ? 'X' : 'O'
      stepNumberCopy = stepNumber + 1
      xIsNextCopy = !xIsNext

      // Dispatch the new state.
      dispatch({ type: 'SQUARE_CLICKED', squares: squaresCopy, stepNumber: stepNumberCopy, xIsNext: xIsNextCopy })
    }
  }

  // Render a button with the passed in properties,
  // Overriding only onClick and className
  return (
    <button {...props} onClick={handleClick} className="square" />
  )
}

// Helper function for determining a winner
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Helper function to determine if the game is a tie.
function isTie(squares) {
  // Convert the squares to an array if it is an object
  if (squares instanceof Object) {
    squares = Object.values(squares)
  }

  // If squares is an array, check if it is full
  if (Array.isArray(squares)) {
    return !squares.includes(null)
  }

  // Unknown type
  return false
}

// The final render call
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);