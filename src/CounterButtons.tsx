import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CounterActions } from './reducers/counterReducer';

export interface CounterButtonsProps {
    onIncr: () => void;
    onDecr: () => void;
    onReset: () => void;
}

const CounterButtons: React.FC<CounterButtonsProps> = props => {
    return <div>
        <button onClick={ props.onIncr }>Increment</button>
        <button onClick={ props.onDecr }>Decrement</button>
        <button onClick={ props.onReset }>Reset</button>
    </div>
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onIncr: () => dispatch({ type: CounterActions.INCR }),
        onDecr: () => dispatch({ type: CounterActions.DECR }),
        onReset: () => dispatch({ type: CounterActions.RESET }),
    }
}

export default connect(null, mapDispatchToProps)(CounterButtons);