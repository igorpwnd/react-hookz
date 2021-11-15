import React, { Reducer, useReducer } from 'react';

type CustomAction =
  | { type: 'ADD' }
  | { type: 'SUB' }
  | { type: 'CHANGE_COLOR' };
type CustomState = { value: number; rainbowText: boolean };

const reducer = (state: CustomState, action: CustomAction) => {
  switch (action.type) {
    case 'ADD':
      return { value: state.value + 1, rainbowText: state.rainbowText };
    case 'SUB':
      return { value: state.value - 1, rainbowText: state.rainbowText };
    case 'CHANGE_COLOR':
      return { value: state.value, rainbowText: !state.rainbowText };
    default:
      return state;
  }
};

export default () => {
  const [state, dispatch] = useReducer<Reducer<CustomState, CustomAction>>(
    reducer,
    {
      value: 0,
      rainbowText: false,
    }
  );

  return (
    <div>
      <h1 className={state.rainbowText ? 'rainbow' : ''}>
        UseReducer: {state.value}
      </h1>
      <p>
        Bom usar isso aqui quando você quer mudar um estado tendo um controle
        bastante restrito (parece um bocado com os redux)
      </p>
      <button
        onClick={() => {
          dispatch({ type: 'ADD' });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'SUB' });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'CHANGE_COLOR' });
        }}
      >
        Change Colors!
      </button>
    </div>
  );
};
