import React, { Component } from 'react';
import { render } from 'react-dom';

import UseStateComponent from './components/useState';
import UseReducerComponent from './components/useReducer';
import UseEffectComponent from './components/useEffect';
import UseRefComponent from './components/useRef';
import UseLayoutEffectComponent from './components/useLayoutEffect';
import UseImperativeHandleComponent from './components/useImperativeHandle';

import './style.css';

class App extends Component {
  render() {
    return (
      <section>
        <UseStateComponent />
        <UseReducerComponent />
        <UseEffectComponent />
        <UseRefComponent />
        <UseLayoutEffectComponent />
        <UseImperativeHandleComponent />
      </section>
    );
  }
}

render(<App />, document.getElementById('root'));
