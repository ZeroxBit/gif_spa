import React from 'react';
import logo from './logo.svg';
import './App.css';
// import FormLogin from './components/form/FormLogin';
import Login from 'views/Login';
import ListGifs from 'views/ListGifs';
import Header from 'components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ListGifs />
    </div>
  );
}

export default App;
