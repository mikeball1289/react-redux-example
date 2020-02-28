import React from 'react';
import './App.css';
import store from './state/store';
import { Provider } from 'react-redux';
import CounterText from './CounterText';
import CounterButtons from './CounterButtons';

const App = () => {
    return <Provider store={ store }>
        <CounterText></CounterText>
        <CounterButtons></CounterButtons>
    </Provider>
}

export default App;
