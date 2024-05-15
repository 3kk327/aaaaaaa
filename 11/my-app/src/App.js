import React from 'react';
import Pizza from './components/Pizza';
import './App.css';
import img from './images/piza.jpg'
import img1 from './images/korzina.jpg'

function App() {
  return (
    <Pizza pizzaimg = {img} korzina = {img1}/>
  );
}

export default App;
