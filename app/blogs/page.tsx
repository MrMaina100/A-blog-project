import Blogs from './Blogs';
import Image from 'next/image';
import thisimg from '../../public/static/house2.jpg';
export default function page() {
  return (
    <div className="max-w-[1100px]  mx-auto flex flex-col space-y-4">
      <h1 className="text-4xl ">Together blog posts</h1>
      <div className="relative h-[200px] md:h-[400px]">
        <Image
          src={thisimg}
          alt="home image"
          fill
          placeholder="blur"
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    
      <Blogs />
    </div>
  );
}
