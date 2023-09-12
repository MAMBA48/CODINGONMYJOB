import { useEffect, useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';

export const MyContext = createContext(0);

const App = () => {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);

  return (
    <main className="container">
      <Header />
      <article className="content-app">
        <h2>Welcome</h2>
        <Outlet />
      </article>
    </main>
  );
};

export default App;
