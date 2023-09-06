import { useState } from 'react';
const Header = () => {
  //testando
  const [content, setContent] = useState<string>('home');
  const myProducts = () => {
    setContent('products');
  };
  const myContact = () => {
    setContent('contact');
  };
  return (
    <header>
      <h2>Header</h2>
      <nav>
        <button onClick={myProducts}>Produtos</button>
        <button onClick={myContact}>Contato</button>
      </nav>
      {content === 'products' && <h2>AREA OF PRODUCTS</h2>}
      {content === 'contact' && <h2>AREA OF CONTACT</h2>}
    </header>
  );
};

export default Header;
