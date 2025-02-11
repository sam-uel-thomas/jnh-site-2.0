import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import ImageWithText from '../components/ImageWithText';
import Link from 'next/link';

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
        
            <div className='grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-7'>
                <Link href='/lookbook'>
                    <div className="relative w-full aspect-[9/16] md:hidden">
                        <Image 
                            src='/images/landingMobile.jpg'
                            alt='landing'
                            fill
                            objectFit='contain'
                        />
                    </div>
                    <div className="relative w-full aspect-[16/8] hidden md:inline-flex">
                        <Image 
                            src='/landingImages/lookbookcoverweb.jpg'
                            alt='landing'
                            fill
                            objectFit='contain'
                        />
                    </div>
                </Link>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7'>
                <Link href='/balenciaga-project'>
                    <div className="relative w-full aspect-[4/5]">
                        <Image 
                            src='/landingImages/balenciagacover.jpg'
                            alt='balenciaga cover image'
                            fill
                            objectFit='contain'
                        />
                    </div>
                </Link>
                <Link href='/grayson-perry-project'>
                    <div className="relative w-full aspect-[4/5]">
                        <Image 
                            src='/landingImages/graysoncover.jpg'
                            alt='balenciaga cover image'
                            fill
                            objectFit='contain'
                        />
                    </div>
                </Link>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7'>
                <Link href='/general-works'>
                    <div className="relative w-full aspect-[4/5]">
                        <Image 
                            src='/landingImages/generalworkscover.jpg'
                            alt='balenciaga cover image'
                            fill
                            objectFit='contain'
                        />
                    </div>
                </Link>
                <Link href='/colour-project'>
                    <div className="relative w-full aspect-[4/5]">
                        <Image 
                            src='/landingImages/colourprojectcover.jpg'
                            alt='balenciaga cover image'
                            fill
                            objectFit='contain'
                        />
                    </div>
                </Link>
            </div>
        </main>
        <Footer />
    </>
  );
}

export default Home;