import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageWithText from '../components/ImageWithText';

const Home: React.FC = () => {
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
          <ImageWithText 
            src='/images/landing.jpg'
            alt='landing'
            text='SHOP THE COLLECTION'
            textColor='text-[#F0F0F0]'
            bgColor='bg-[#1D1F2C]'
          />

          {/* Second Row - 2 Wide */}
          <div className='grid grid-cols-2 gap-7'>
            <ImageWithText 
              src='/images/dance.jpg'
              alt='image 1'
              text='BALENCIAGA PROJECT'
              textColor='text-[#00069E]' // Explicitly set color
            />
            <ImageWithText 
              src='/images/MILOMODEL3.jpg'
              alt='image 2'
              text='SHOP'
              textColor='text-[#92CE04]' // Different color for this image
            />
          </div>

          {/* Third Row - 2 Wide */}
          <div className='grid grid-cols-2 gap-7'>
            <ImageWithText 
              src='/images/skip2.jpg'
              alt='image 3'
              text='GENERAL WORKS'
              textColor='text-[#D703A0]' // Different color for this image
            />
            <ImageWithText 
              src='/images/skip3.jpg'
              alt='image 4'
              text='COLOUR PROJECT'
              textColor='text-[#E12D04]' // Different color for this image
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;