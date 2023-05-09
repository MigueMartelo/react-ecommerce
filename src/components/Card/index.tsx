import { Product } from '../../interfaces/index';

interface CardProps {
  product: Product;
}

export const Card = ({ product }: CardProps) => {
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
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          +
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{product.title}</span>
        <span className='text-lg font-medium'>${product.price}</span>
      </p>
    </div>
  );
};
