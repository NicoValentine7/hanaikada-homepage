import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/custom_app_bar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              <section id="About Us">
        <h2>会社概要</h2>
        <p>会社名 株式会社花筏</p>
        <p>事業内容 ソフトウェアエンジニアリング</p>
        </section>
      </header>

    </div>
  );
}

export default App;
