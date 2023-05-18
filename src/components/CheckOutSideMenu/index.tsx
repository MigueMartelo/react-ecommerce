import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../OrderCard';
import { Product } from '../../interfaces';

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context?.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } flex-col fixed bg-white right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-80px)] top-[60px]`}
    >
      <div className='flex justify-between items-center p-4'>
        <h2 className='text-xl font-medium'>My Order</h2>
        <XMarkIcon
          className='w-6 h-6 cursor-pointer'
          onClick={() => context?.closeCheckoutSideMenu()}
        />
      </div>
      <div className='px-6 overflow-y-scroll'>
        {context?.cartProducts?.map((product: Product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};
