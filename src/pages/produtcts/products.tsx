import { useContext } from 'react';
import { MyContext } from '../../App';

const Products = () => {
  return (
    <main>
      <span>
        <h2>Adquira os produtos da marca Campos</h2>
      </span>
      <section>
        <MyContext.Provider value={0}>
          <p>produto</p>
        </MyContext.Provider>
      </section>
    </main>
  );
};
export default Products;
