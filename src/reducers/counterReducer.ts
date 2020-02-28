import { Action } from "redux";

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
};

export enum CounterActions {
    INCR = 'increment',
    DECR = 'decrement',
    RESET = 'reset'
}

export default function counterReducer(state: CounterState = initialState, action: Action<CounterActions>) {
    switch (action.type) {
        case CounterActions.INCR: return {
            value: state.value + 1
        };
        case CounterActions.DECR: return {
            value: state.value - 1
        };
        case CounterActions.RESET: return initialState;

        default: return state;
    }
}