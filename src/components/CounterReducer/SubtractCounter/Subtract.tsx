import React from 'react'
import { CounterAction } from '../CounterReducer'

interface SubtractCounterProps{
    dispatch: React.Dispatch<CounterAction>
}

const Subtract:React.FC<SubtractCounterProps> = React.memo(({dispatch}) =>
 {
    console.log('Subtract reducer Render')
    
    const handleClick = () =>{
        dispatch({
            type: 'SUBTRACT',
            number: 1

        })
    }
    
    return (
    <div>
        <button onClick={handleClick}>Decrease by 1</button>
    </div>
  )
 }
)

export default Subtract