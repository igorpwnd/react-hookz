import React, { Component } from 'react';
import { render } from 'react-dom';

import UseStateComponent from './components/useState';
import UseReducerComponent from './components/useReducer';
import UseEffectComponent from './components/useEffect';
import UseRefComponent from './components/useRef';
import UseLayoutEffectComponent from './components/useLayoutEffect';
import UseImperativeHandleComponent from './components/useImperativeHandle';
import UseContextComponent from './components/useContext';
import UseMemoComponent from './components/useMemo';
import UseCallbackComponent from './components/useCallback';

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
        <UseContextComponent />
        <div>
          <h1>UseMemo e UseCallback</h1>
          <p>
            Os dois são muito parecidos, pois retornam um valor memoizado.
            useMemo retorna um valor memoizado e o useCallback retorna um
            Callback memoizado. <br />
            <p style={{ marginTop: '16px', fontWeight: 700 }}>
              "In computing, memoization or memoisation is an optimization
              technique used primarily to speed up computer programs by storing
              the results of expensive function calls and returning the cached
              result when the same inputs occur again."
            </p>
          </p>
          <UseMemoComponent />
          <UseCallbackComponent />
        </div>
      </section>
    );
  }
}

render(<App />, document.getElementById('root'));
