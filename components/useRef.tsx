import React, { useState, useRef } from 'react';

export default () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h1>UseRef</h1>
      <p>
        Maneira mais fácil de acessar e manipular DOM com React. Aparentemente,
        ele não perde a referência durante{' '}
        <a href="https://stackoverflow.com/questions/60554573/what-are-the-advantages-of-useref-instead-of-just-declaring-a-variable">
          re-renders
        </a>
      </p>
      <input id="inputFocus" type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focar no Input
      </button>
    </div>
  );
};
