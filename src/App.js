import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header title="HelloWorld" author="Sarthak" ImageSource="pexels" ImageURL="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    </div>
  );
}

export default App;
