import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './Header'
import Content from './Content'
import Hello from './Hello'

let i=2;

function App() {
  return (
    <div> 
      <Header message='This is message from header'/>
      <Content />
      <Hello hello='hello react from Hello' />
    </div>
  );
}


export default App;
