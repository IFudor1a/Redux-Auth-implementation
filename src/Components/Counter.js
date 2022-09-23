import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../Actions/Counter";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);
    return (
        <div className='counter'>
            <button onClick={() => dispatch(decrement(1))}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    );
};

export default Counter;