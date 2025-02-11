import fs from 'fs';
import path from 'path';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from 'next/image';

const portfolioPage = async ({ params }: { params: { portfolio: string } }) => {
  const { portfolio } = params;

  const imagesDirectory = path.join(process.cwd(), 'public', 'portfolio', portfolio);
  
  if (!fs.existsSync(imagesDirectory)) {
    return <div>404 - portfolio Not Found</div>;
  }

  let files = fs.readdirSync(imagesDirectory);
  
    // Filter out .DS_Store files
files = files.filter(file => file !== '.DS_Store');

  // Sort files by number in filename
  const sortedFiles = files.sort((a, b) => {
    const aNumber = parseInt(a.match(/\d+/)?.[0] || '0', 10);
    const bNumber = parseInt(b.match(/\d+/)?.[0] || '0', 10);
    return aNumber - bNumber;
  });
  
  const images = sortedFiles.map(file => ({
    src: `/portfolio/${portfolio}/${file}`,
    alt: `${portfolio} image ${file}`, // Provide a meaningful alt text
  }));

  return (
    <>
        <div className='bg-white flex flex-col gap-y-7 p-7'>
            <Navbar/>
            <h1 className='border-4 font-bold text-[#3A3A3A] border-[#3A3A3A] rounded-3xl px-3 py-1 w-fit'>
                {portfolio.replace(/-/g, ' ').toUpperCase()}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {images.map((image, index) => (
                    <div key={index} className="relative w-full aspect-[11/8]"> {/* Set a height for responsive behavior */}
                        <Image 
                            src={image.src} 
                            alt={image.alt} 
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default portfolioPage;