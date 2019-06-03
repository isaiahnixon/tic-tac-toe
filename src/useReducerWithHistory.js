import { useRef, useState } from 'react';

// Custom hook for adding history functions to a reducer pattern.
export default function useReducerWithHistory(reducer, state) {
    // Use a reference for persistent history
    const history = useRef([state])
  
    // Set some state for the current index
    const [index, setIndex] = useState(0)
  
    // Function to determin if undo is possible
    function canUndo() {
      return (index > 0)
    }
  
    // Function to rewind index by 1
    function undo() {
      setIndex(canUndo() ? index - 1 : index)
    }
  
    // Function to determine if redo is possible
    function canRedo() {
      return (index < history.current.length - 1)
    }
  
    // Function to increase index by 1
    function redo() {
      setIndex(canRedo() ? index + 1 : index)
    }
  
    // Dispatcher that preserves history when calling the reducer
    function dispatch(action) {
      const newState = reducer(history.current[index], action)
      history.current = history.current.slice(0, index + 1)
      history.current.push(newState)
      setIndex(history.current.length - 1)
    }

    // Function to reset the history to the start
    function reset() {
      history.current = history.current.slice(0, 1)
      setIndex(0)
    }
  
    // Return the current state, and the new functions
    return [history.current[index], dispatch, canUndo, undo, canRedo, redo, reset]
  }