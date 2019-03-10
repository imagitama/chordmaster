import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import chordsDefinition from './chords'
import Chords from './components/chord/chord' 

const App = () => (
  <div>
    {chordsDefinition.map(chordData => (
      <Chords key={chordData.fullName} {...chordData} />
    ))}
  </div>
)

export default App
