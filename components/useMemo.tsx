import React, { useEffect, useMemo, useState } from 'react';

type T_Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const comments: T_Comment[] = require('./comments');

export default () => {
  const [data, setData] = useState<T_Comment[] | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleAux, setToggleAux] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setData(comments);
    }, 2000);
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = '';
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log('O Código Rodou');

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div>
      <h1>UseMemo</h1>
      <p>
        Usando o useMemo é possível definir qual estado vai engatilhar a
        re-renderização de outro estado. Por exemplo, no código em questão. Toda
        vez que o estado toggle mudar, irá re-renderizar a lista de
        findLongestName, todavia o toggleAux não irá reengatilhar o
        findLongestName. Tomar cuidado pra não usar demais, use com parcimônia.
      </p>
      <strong>{getLongestName}</strong>
      {/* <div>{findLongestName(data)}</div> */}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {<span> {toggle ? 'Ligado' : 'Desligado'}</span>}
      <br />
      <button onClick={() => setToggleAux(!toggleAux)}>Toggle 2</button>
      {<span> {toggleAux ? 'Ligado' : 'Desligado'}</span>}
    </div>
  );
};
