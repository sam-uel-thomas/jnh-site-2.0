import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import ImageWithText from '../components/ImageWithText';

const Home: React.FC = () => {
  return (
    <>
        <main 
            className="min-h-screen pb-8 px-4 md:px-7 md:pb-14 gap-4 md:gap-7 flex flex-col"
            style={{ 
                backgroundImage: "url('/images/spotted-bg.png')",
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100% auto',
                backgroundPosition: 'top center'
            }}
            >
            <Navbar />
        
            {/* FIRST ROW */}
            <div className='grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-7'>
                {/* First Row - 1 Wide */}
                <div className="relative w-full aspect-[9/16] md:hidden"> {/* Set a height for responsive behavior */}
                    <Image 
                        src='/images/landingMobile.jpg'
                        alt='landing'
                        fill
                        objectFit='contain'
                    />
                </div>
                <div className="relative w-full aspect-[16/9] hidden md:inline-flex"> {/* Set a height for responsive behavior */}
                    <Image 
                        src='/images/landingWeb.jpg'
                        alt='landing'
                        fill
                        objectFit='contain'
                    />
                </div>
            </div>
            
            {/* SECOND ROW */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7'>
                <ImageWithText 
                    src='/images/dance.jpg'
                    alt='image 1'
                    href='/balenciaga-project'
                    text='BALENCIAGA PROJECT'
                    textColor='text-[#00069E]'
                />
                <ImageWithText 
                    src='/images/MILOMODEL3.jpg'
                    alt='image 2'
                    href='/grayson-perry-project'
                    text='GRAYSON PERRY PROJECT'
                    textColor='text-[#92CE04]'
                />
            </div>
            
            {/* THIRD ROW */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                <ImageWithText 
                    src='/images/skip2.jpg'
                    alt='image 3'
                    href='/general-works'
                    text='GENERAL WORKS'
                    textColor='text-[#D703A0]' // Different color for this image
                />
                <ImageWithText 
                    src='/images/skip3.jpg'
                    alt='image 4'
                    href='colour-project'
                    text='COLOUR PROJECT'
                    textColor='text-[#E12D04]' // Different color for this image
                />
            </div>
        </main>
        <Footer />
    </>
  );
}

export default Home;