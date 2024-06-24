import React from 'react'
import { CounterAction } from '../CounterReducer'

interface AddCounterProps{
    dispatch: React.Dispatch<CounterAction>
}

const Add:React.FC<AddCounterProps> = React.memo(({dispatch}) =>
 {
    console.log('Add reducer Render')
    
    const handleClick = () =>{
        dispatch({
            type: 'ADD',
            number: 1

        })
    }
    
    return (
    <div>
        <button onClick={handleClick}>Increase by 1</button>
    </div>
  )
 }
)

export default Add