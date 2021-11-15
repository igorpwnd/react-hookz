import React, {
  useState,
  createContext,
  useContext,
  SyntheticEvent,
} from 'react';

const AppContext = createContext(null);

export default () => {
  const [username, setUsername] = useState<string>('');
  return (
    <div>
      <h1>UseContext</h1>
      <p>
        ContextAPI, basicamente. Cria-se um contexto para ser consumido em
        qualquer componente ou lugar que seja importado.
      </p>
      <AppContext.Provider value={{ username, setUsername }}>
        <br />
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
};

function Login() {
  const { username, setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

function User() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h3>Usuário: {username}</h3>
    </div>
  );
}
