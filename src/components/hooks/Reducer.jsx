import React from 'react';
import { initialState, Reducer1 } from '../store/reducer';
import * as ACTION from '../store/action'

const Reducer = () => {
    const [reducerState, dispatch] = React.useReducer(Reducer1, initialState)
    const dispatchActionSuccess = () => {
        dispatch(ACTION.SUCCESS)
    }
    const dispatchActionFailure = () => {
        dispatch(ACTION.FAILURE)
    }
    return (
        <div>
            <div>{reducerState.state1 ? <p>state1 is true</p> : <p>state1 is false</p>}</div>
            <button onClick={dispatchActionSuccess}>Dispatch Success</button>
            <button onClick={dispatchActionFailure}>Dispatch Failure</button>
        </div>
        
    );
};

export default Reducer;