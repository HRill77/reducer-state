import React, { Reducer, useReducer } from 'react'
import Add from './AddCounter/Add';
import Subtract from './SubtractCounter/Subtract';
import Multiply from './MultiplyCounter/Multiply';
import Divide from './DivideCounter/Divide';

export interface CounterAction{
    type : 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVIDE';
    number: number
}


const CounterReducer = () => {

  const reducer : Reducer<number, CounterAction> = (state, action) =>{

    switch(action.type) {
      case "ADD":
          return state + action.number;
      case "SUBTRACT":
          return state - action.number;
      case "MULTIPLY":
          return state * action.number;
      case "DIVIDE":
          return state / action.number;
      default:
          return state;
        }
  }

  const [counter, dispatch] = useReducer(reducer, 1);



  return (
    <div style={
      {
        border: "1px solid black",
        padding: "5",
        width: 350
      }
    }>
      <h1>Counte Reducer</h1>
      <p>value: {counter}</p>
      <Add dispatch={dispatch}></Add>
      <Subtract dispatch={dispatch}></Subtract>
      <Multiply dispatch={dispatch}></Multiply>
      <Divide dispatch={dispatch}></Divide>
    </div>
  )
}

export default CounterReducer