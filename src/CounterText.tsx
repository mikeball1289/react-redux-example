import React from 'react';
import { connect } from 'react-redux';
import { CounterState } from './reducers/counterReducer';

export interface CounterTextProps {
    value: number;
}

const CounterText: React.FC<CounterTextProps> = props => {
    return <span>The current number is: { props.value }</span>
}

const mapStateToProps = (state: CounterState) => {
    return {
        value: state.value
    };
}

export default connect(mapStateToProps)(CounterText);