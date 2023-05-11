import { XMarkIcon } from '@heroicons/react/24/outline';

export const ProductDetail = () => {
  return (
    <aside className='flex flex-col fixed bg-white right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-80px)] top-[60px]'>
      <div className='flex justify-between items-center p-4'>
        <h2 className='text-xl font-medium'>Product Detail</h2>
        <XMarkIcon className='w-6 h-6 cursor-pointer' />
      </div>
    </aside>
  );
};
