// app/[collection]/page.tsx
import fs from 'fs';
import path from 'path';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

interface CollectionProps {
  collectionName: string;
  images: string[];
}

const CollectionPage = async ({ params }: { params: { collection: string } }) => {
  const { collection } = params;

  const imagesDirectory = path.join(process.cwd(), 'public', 'collections', collection);
  
  if (!fs.existsSync(imagesDirectory)) {
    return <div>404 - Collection Not Found</div>;
  }

  const files = fs.readdirSync(imagesDirectory);
  
  const images = files.map(file => ({
    src: `/collections/${collection}/${file}`,
    alt: `${collection} image ${file}`, // Provide a meaningful alt text
  }));

  return (
    <>
        <div className='bg-white flex flex-col gap-y-7 p-7'>
            <Navbar/>
            <h1 className='border-4 font-bold text-[#3A3A3A] border-[#3A3A3A] rounded-3xl px-3 py-1 w-fit'>
                {collection.replace('-', ' ').toUpperCase()}
            </h1>
            <div className="grid grid-cols-3 gap-7">
                {images.map((image, index) => (
                    <div key={index} className="relative w-full h-[580px]"> {/* Set a height for responsive behavior */}
                        <Image 
                            src={image.src} 
                            alt={image.alt} 
                            fill
                        />
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default CollectionPage;