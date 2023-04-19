import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByNumber } from '../redux/counter/counterSlice'
function Counter() {
    const [amount, SetAmount] = useState(3)
    const countValue = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{countValue}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <br />
            <br />
            <input type='number' onChange={(e)=> SetAmount(e.target.value)} />
            <button onClick={() => dispatch(incrementByNumber(amount))}>İstediğin miktarda arttır</button>

        </div>
    )
}

export default Counter
