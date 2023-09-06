import { useState } from 'react';
const Header = () => {
  //testando
  const [content, setContent] = useState<string>('');
  const myProducts = () => {
    setContent('products');
  };
  return (
    <header>
      <h2>Header</h2>
      <nav>
        <button onClick={myProducts}>Produtos</button>
        <button>Contato</button>
      </nav>
    </header>
  );
};

export default Header;
