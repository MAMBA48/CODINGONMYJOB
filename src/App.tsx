import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';

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
