// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to OneID</h1>
        <Input label="Username" placeholder="Enter your username" />
        <Button text="Submit" onClick={() => alert('Button clicked!')} />
      </div>
    </div>
    </Router>
  );
}

export default App;
