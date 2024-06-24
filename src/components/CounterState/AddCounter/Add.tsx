import React from 'react'
import { CounterAction } from '../CounterState';



interface AddCounterProps {
    onSetCounter: (value: number, action: CounterAction) => void;
}


const Add:React.FC<AddCounterProps> = React.memo(({onSetCounter})=>{
    console.log('Add State Render');
    
    const handleClick = () => {
        onSetCounter(1, "ADD")
    }

    return(
        <div>
                 <button onClick={handleClick}>Increase by 1</button>
        </div>
    )
}) 

export default Add