import React from 'react'
import { CounterAction } from '../CounterState';



interface DivideCounterProps {
    onSetCounter: (value: number, action: CounterAction) => void;
}


const Divide:React.FC<DivideCounterProps> = React.memo(({onSetCounter})=>{
    console.log('Divide State Render');
    
    const handleClick = () => {
        onSetCounter(2, "DIVIDE")
    }

    return(
        <div>
                 <button onClick={handleClick}>Divided by 1</button>
        </div>
    )
}) 

export default Divide