import React, { useEffect, useRef, useLayoutEffect } from 'react';

export default () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log('[UseLayoutEffect]');
  }, []);

  useEffect(() => {
    console.log('[UseEffect]');
    inputRef.current.value = 'Hello User!';
  }, []);

  return (
    <div>
      <h1>UseLayoutEffect</h1>
      <p>
        Sempre roda quando a página é renderizada, porém dá pra controlar e
        filtrar sua execução. Se nenhum filtro for estipulado, irá rodar SEMPRE.
        Roda antes do useEffect. Acontece antes de fato printar os elementos na
        tela. (Pode ajudar a resolver problemas de flickering na tela)
      </p>
      <input type="text" value="React" ref={inputRef} />
    </div>
  );
};
