import React, { Component } from 'react';
import { render } from 'react-dom';
import UseStateComponent from './components/useState';
import UseReducerComponent from './components/useReducer';
import './style.css';

class App extends Component {
  render() {
    return (
      <section>
        <UseStateComponent />
        <UseReducerComponent />
      </section>
    );
  }
}

render(<App />, document.getElementById('root'));
