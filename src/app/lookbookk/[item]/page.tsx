import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer'
import fs from 'fs';
import path from 'path';

interface LookbookPageProps {
  params: {
    item: string;
  };
}

const LookbookItem = async ({ params }: LookbookPageProps) => {
    const { item } = await params;

    console.log("Debug: item =", item); // Debug output

    if (!item) {
        console.log("Debug: Item is missing"); // Debug output
        return <div>Error: Lookbook item name is missing</div>;
    }

    const imagesDirectory = path.join(process.cwd(), 'public', 'lookbook', item);
    
    console.log("Debug: imagesDirectory =", imagesDirectory); // Debug output

    if (!fs.existsSync(imagesDirectory)) {
        console.log("Debug: Directory not found"); // Debug output
        return <div>404 - Lookbook Item Not Found</div>;
    }

    let files;
    try {
        files = fs.readdirSync(imagesDirectory);
        console.log("Debug: files =", files); // Debug output
    } catch (error) {
        console.error('Error reading directory:', error);
        return <div>Error loading images</div>;
    }
    
    const images = files.map(file => ({
        src: `/lookbook/${item}/${file}`,
        alt: `${item} image ${file}`,
    }));

    console.log("Debug: images =", images); // Debug output

    return (
        <>
            <div className='bg-white flex flex-col min-h-screen gap-y-7 px-7 pt-7 pb-14'>
                <Navbar/>
                <div className='flex-grow flex flex-col pt-7'>
                    <div className='flex flex-row gap-x-12'>
                        <div className="grid grid-cols-2 gap-7">
                            {images.map((image, index) => (
                                <div key={index} className="relative">
                                    <Image 
                                        src={image.src} 
                                        alt={image.alt} 
                                        width={432}
                                        height={540}
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col py-8 gap-y-6'>
                            <div className='flex flex-col gap-y-2'>
                                <h2 className='text-[#3A3A3A]'>
                                    TARGET PRACTISE TROUSERS
                                </h2>
                                <div className='flex flex-col gap-y-1'>
                                    <p className='text-[#676767]'>
                                        100% of the shots you don’t take you miss
                                    </p>
                                    <p className='text-[#676767]'>
                                        but you won’t miss in these
                                    </p>
                                    <p className='text-[#676767]'>
                                        100% guaranteed
                                    </p>
                                    <p className='text-[#676767]'>
                                        okay, maybe 85%
                                    </p>
                                </div>
                            </div>
                            <div className="h-[1px] w-full bg-[#676767]"></div>
                            <h2 className='text-[#3A3A3A] whitespace-nowrap text-base'>
                                MADE TO ORDER - ENQUIRE THROUGH INSTAGRAM
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default LookbookItem;