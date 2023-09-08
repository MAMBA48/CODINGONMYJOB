import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>C4MP05 W0RLD</h2>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/game">Mini Game</Link>
      </nav>
    </header>
  );
};
console.log('ice');
export default Header;
