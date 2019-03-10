import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import chords from './chords'
import Chords from './components/chords/chords' 

const App = () => (
  <Chords chords={chords} />
)

export default App
