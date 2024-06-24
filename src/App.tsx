import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterReducer from './components/CounterReducer/CounterReducer';
import CounterState from './components/CounterState/CounterState';

function App() {
  return (
    <div style={{display: "flex"}}>
      <CounterReducer/>
      <CounterState/>
    </div>
  );
}

export default App;
