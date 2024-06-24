import React from 'react'
import { CounterAction } from '../CounterState';



interface SubtractCounterProps {
    onSetCounter: (value: number, action: CounterAction) => void;
}


const Subtract:React.FC<SubtractCounterProps> = React.memo(({onSetCounter})=>{
    console.log('Subtract State Render');
    
    const handleClick = () => {
        onSetCounter(1, "SUBTRACT")
    }

    return(
        <div>
                 <button onClick={handleClick}>Decrease by 1</button>
        </div>
    )
}) 

export default Subtract