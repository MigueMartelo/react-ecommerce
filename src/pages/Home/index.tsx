import { useState, useEffect } from 'react';

import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card/index';
import { Product } from '../../interfaces';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Layout>
      Home
      {products &&
        products.map((product) => <Card key={product.id} product={product} />)}
    </Layout>
  );
};
export default Home;
