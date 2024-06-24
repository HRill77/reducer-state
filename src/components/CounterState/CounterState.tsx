import React, { useState } from 'react'
import Add from './AddCounter/Add';
import Subtract from './SubtractCounter/Subtract';
// import Multiply from '../CounterState/MultiplyCounter/Multiply';
import Divide from './DivideCounter/Divide';
import Multiply from './MultiplyCounter/Multiply';


export type CounterAction = "ADD" | "SUBTRACT" | "MULTIPLY" | "DIVIDE";

const CounterState = () => {
    const [counter, setCounter] = useState(1);
    const handleSetCounter = (value: number, action: CounterAction)=>{
        switch(action) {
            case "ADD":
                setCounter(counter + value)
                break;
            case "SUBTRACT":
                setCounter(counter - value)
                break;
            case "MULTIPLY":
                setCounter(counter * value)
                break;
            case "DIVIDE":
                setCounter(counter / value)
                break;
            default:
                setCounter(counter)
                break;
        }
    }


  return (
    <div style={{
        border: "1px solid black",
        padding: 5,
        width: 350,
    }}>
        <h1>Counter State</h1>
        <p>Value: {counter}</p>
        <Add onSetCounter={handleSetCounter} />
        <Subtract onSetCounter={handleSetCounter} />
        <Multiply onSetCounter={handleSetCounter} />
        <Divide onSetCounter={handleSetCounter} /> 
    </div>
  )
}

export default CounterState