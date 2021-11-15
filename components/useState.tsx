import React, { useState } from 'react';

export default () => {
  const [name, setName] = useState<string | undefined>(undefined);

  return (
    <div>
      <h1>UseState: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
