import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main 
        className="min-h-screen p-7 flex flex-col gap-y-7"
        style={{ 
          backgroundImage: "url('/images/spotted-bg.png')",
          backgroundRepeat: 'repeat-y',
          backgroundSize: '100% auto',
          backgroundPosition: 'top center'
        }}
      >
        <Navbar />
        
        {/* Grid Container */}
        <div className='grid grid-cols-1 gap-7'>
          {/* First Row - 1 Wide */}
          <div className='relative col-span-1'>
            <Image
              src='/images/landing.jpg'
              alt='landing'
              layout='responsive' // Responsive layout for scaling
              width={1384}
              height={720}
              className='object-contain'
            />
          </div>

          {/* Second Row - 2 Wide */}
          <div className='grid grid-cols-2 gap-7'>
            <div className='relative'>
              <Image
                src='/images/dance.jpg' // Replace with your image path
                alt='image 1'
                layout='responsive'
                width={1600}
                height={2000}
                className='object-contain'
              />
            </div>
            <div className='relative'>
              <Image
                src='/images/MILOMODEL3.jpg' // Replace with your image path
                alt='image 2'
                layout='responsive'
                width={1600}
                height={2000}
                className='object-contain'
              />
            </div>
          </div>

          {/* Third Row - 2 Wide */}
          <div className='grid grid-cols-2 gap-7'>
            <div className='relative'>
              <Image
                src='/images/skip2.jpg' // Replace with your image path
                alt='image 3'
                layout='responsive'
                width={1600}
                height={2000}
                className='object-contain'
              />
            </div>
            <div className='relative'>
              <Image
                src='/images/skip3.jpg' // Replace with your image path
                alt='image 4'
                layout='responsive'
                width={1600}
                height={2000}
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}