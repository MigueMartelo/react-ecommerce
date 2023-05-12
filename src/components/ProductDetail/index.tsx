import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { ShoppingCartContext } from '../../Context';

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context?.isProductDetailOpen ? 'flex' : 'hidden'
      } flex-col fixed bg-white right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-80px)] top-[60px]`}
    >
      <div className='flex justify-between items-center p-4'>
        <h2 className='text-xl font-medium'>Product Detail</h2>
        <XMarkIcon
          className='w-6 h-6 cursor-pointer'
          onClick={() => context?.closeProductDetail()}
        />
      </div>
      <figure className='px-4'>
        <img
          className='w-full h-full rounded-lg object-cover'
          src={context?.productToShow?.images[0]}
          alt={context?.productToShow?.title}
        />
      </figure>
      <p className='flex flex-col p-4'>
        <span className='font-medium text-2xl'>
          $ {context?.productToShow?.price}
        </span>
        <span className='font-medium text-lg'>
          {context?.productToShow?.title}
        </span>
        <span className='font-light text-md'>
          {context?.productToShow?.description}
        </span>
      </p>
    </aside>
  );
};
