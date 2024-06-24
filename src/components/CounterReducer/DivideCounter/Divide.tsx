import React from 'react'
import { CounterAction } from '../CounterReducer'

interface DivideCounterProps{
    dispatch: React.Dispatch<CounterAction>
}

const Divide:React.FC<DivideCounterProps> = React.memo(({dispatch}) =>
 {
    console.log('Divide reducer Render')
    
    const handleClick = () =>{
        dispatch({
            type: 'DIVIDE',
            number: 2

        })
    }
    
    return (
    <div>
        <button onClick={handleClick}>Divided by 2</button>
    </div>
  )
 }
)

export default Divide