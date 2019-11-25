import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import ImageWithCaption from './components/ImageWithCaption/ImageWithCaption'

function App() {
  return (
    <div className="App">
      <Header title="HelloWorld" author="Sarthak" ImageSource="pexels" ImageURL="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <ImageWithCaption url="http://dailybruin.com/images/2018/10/web.sp_.mwp_.nbk_.ADX_-640x461.jpg" caption="Freshman attacker Ashworth Molthen has registered 21 goals on the season, finding the back of the net in 13 of the 16 games so far this year for UCLA men’s water polo. UCLA is one of two teams remaining in the MPSF conference that remains undefeated." credit="Amy Dixon/Photo editor" alt="Ashworth Molthen playing water polo."/>
    </div>
  );
}

export default App;
