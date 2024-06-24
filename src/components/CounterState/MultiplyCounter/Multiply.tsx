import React from 'react'
import { CounterAction } from '../CounterState';



interface MultiplyCounterProps {
    onSetCounter: (value: number, action: CounterAction) => void;
}


const Multiply:React.FC<MultiplyCounterProps> = React.memo(({onSetCounter})=>{
    console.log('Multiply State Render');
    
    const handleClick = () => {
        onSetCounter(2, "MULTIPLY")
    }

    return(
        <div>
                 <button onClick={handleClick}>Multiply by 1</button>
        </div>
    )
}) 

export default Multiply