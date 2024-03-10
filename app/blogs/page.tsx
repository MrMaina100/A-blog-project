import Blogs from './Blogs';
import Image from 'next/image';
import thisimg from '../../public/static/house2.jpg';
import { DarkButton } from '../components/DarkButton';
export default function page() {
  return (
    <div className="max-w-[1100px]  mx-auto flex flex-col space-y-4">
      <h1 className="pb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 transition-colors dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mt-4">Example blog posts</h1>
      <div className='flex space-x-2 items-center'>
      <DarkButton/>
       <p>press for dark/light mode</p>


      </div>
      
    
      <Blogs />
    </div>
  );
}
