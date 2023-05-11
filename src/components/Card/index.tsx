import { useContext } from 'react';
import { Product } from '../../interfaces/index';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon } from '@heroicons/react/24/outline';

interface CardProps {
  product: Product;
}

export const Card = ({ product }: CardProps) => {
  const context = useContext(ShoppingCartContext);

  return (
    <div className='bg-white cursor-pointer w-56 h-60'>
      <figure className='relative mb-4 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0,5'>
          {product.category.name}
        </span>
        <img
          src={product.images[0]}
          alt={product.description}
          className='w-full h-full object-cover rounded-lg'
        />
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white rounded-full m-2 p-0.5'
          onClick={() => context?.setCounter((prev: number) => prev + 1)}
        >
          <PlusIcon className='w-5 h-5 text-black' />
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{product.title}</span>
        <span className='text-lg font-medium'>${product.price}</span>
      </p>
    </div>
  );
};
