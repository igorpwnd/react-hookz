import React, { useState, useEffect, useCallback } from 'react';

export default () => {
  const [toggle, setToggle] = useState(false);
  const [data] = useState('Esse framework é muito legal! Ele chama-se: ');

  const returnCommentWithoutCallback = (name) => {
    return data + name;
  };

  const returnCommentWithCallback = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <h1>UseCallback</h1>
      <p></p>
      <Child
        returnComment={returnCommentWithoutCallback}
        childName="WithouCallBack"
      />
      <Child
        returnComment={returnCommentWithCallback}
        childName="WithCallBack"
      />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {<span> {toggle ? 'Ligado' : 'Desligado'}</span>}
    </div>
  );
};

function Child({ returnComment, childName }) {
  useEffect(() => {
    console.log(`[${childName}] Express Funcion Called`);
  }, [returnComment, childName]);

  return <div>{returnComment('React')}</div>;
}
