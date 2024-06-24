import React from 'react'
import { CounterAction } from '../CounterReducer'

interface MultiplyCounterProps{
    dispatch: React.Dispatch<CounterAction>
}

const Multiply:React.FC<MultiplyCounterProps> = React.memo(({dispatch}) =>
 {
    console.log('Multiply reducer Render')
    
    const handleClick = () =>{
        dispatch({
            type: 'MULTIPLY',
            number: 2

        })
    }
    
    return (
    <div>
        <button onClick={handleClick}>Multiply by 2</button>
    </div>
  )
 }
)

export default Multiply