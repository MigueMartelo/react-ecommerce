import { XMarkIcon } from '@heroicons/react/24/outline';

interface OrderCardProps {
  title: string;
  imageUrl: string;
  price: number;
}

export const OrderCard = ({ title, imageUrl, price }: OrderCardProps) => {
  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        <XMarkIcon className='h-6 w-6 text-black cursor-pointer' />
      </div>
    </div>
  );
};