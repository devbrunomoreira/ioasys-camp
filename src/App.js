import React from 'react';
import './App.css';
import Logo from './components/logo'
import MenuItem from './components/menuitem'
import HomeScreen from './components/homescreen'
import BlogScreen from './components/blogscreen'
import ProfileBox from './components/profilebox';
import imgProfile from './imgs/p2.jpg'
import Wallet from './components/wallet'
import Rodape from './imgs/rodape.png'

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <Logo/>
        </div>
        <nav className="menubar">
          <MenuItem nome="home" href="./"/>
          <MenuItem nome="blog" href="./"/>
          <MenuItem nome="investimentos" href="./"/>
          <MenuItem nome="startups" href="./"/>
        </nav>
        <div className="box-wallet">
          <ProfileBox profileIcon={imgProfile} nomeUser="Investidor"/>
          <Wallet id="profile-wallet" valueWallet={'315.000,00'} />
        </div>
      </header>
      <div id='container'>
        <HomeScreen/>
      </div>
      <footer>
        <img src={Rodape} /> 

      </footer>
    </div>
  );
}



export default App;
