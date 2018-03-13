import React, { Component } from 'react';
import Home from './components/home/HomeComponent';
import Projects from './components/projects/ProjectsComponent';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
        <Projects></Projects>
      </div>
    );
  }
}

export default App;
