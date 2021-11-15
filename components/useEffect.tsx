import React, { useEffect, useState } from 'react';

export default () => {
  const [name, setName] = useState<string>('');
  const [matchingText, setMatchingText] = useState(false);

  useEffect(() => {
    if (!name) return;

    name.toUpperCase() === 'REACT'
      ? setMatchingText(true)
      : setMatchingText(false);
  }, [name]);

  return (
    <div>
      <h1>UseEffect</h1>
      <p>
        Sempre roda quando a página é renderizada, porém dá pra controlar e
        filtrar sua execução. Se nenhum filtro for estipulado, irá rodar SEMPRE.
      </p>
      <h4>Digite: React</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {matchingText && <span> Parabéns, você digitou certinho</span>}
    </div>
  );
};
