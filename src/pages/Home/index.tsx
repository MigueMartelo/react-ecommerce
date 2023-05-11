import { useState, useEffect } from 'react';

import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card/index';
import { ProductDetail } from '../../components/ProductDetail';
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
      <div className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {products &&
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};
export default Home;
