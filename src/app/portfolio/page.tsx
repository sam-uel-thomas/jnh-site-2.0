import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import Link from 'next/link';

const LookbookPage = () => {
    return (
        <>
            <div className='bg-white flex flex-col min-h-screen gap-y-4 md:gap-y-7 p-4 md:p-7 pb-8 md:pb-14'>
                <Navbar/>
                <Link href={'portfolio/main'}>
                <div className='flex flex-row pl-12 gap-6 pt-7'>
                    <Image
                        src={'/images/MainPortfolio.jpg'}
                        alt='MAIN PORTFOLIO'
                        height={446}
                        width={631}
                    />
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-1'>
                            <h2 className='font-medium text-[#3A3A3A]'>
                                MAIN PORTFOLIO:
                            </h2>
                            <p className='font-medium text-[#676767]'>
                                main body of work and development.
                            </p>
                        </div>
                        <Image
                            src={'/images/arrowRight.png'}
                            alt='ARROW'
                            height={75}
                            width={115}
                        />
                    </div>
                </div>
                </Link>
                <Link href={'portfolio/print'}>
                <div className='flex flex-row pl-12 gap-6'>
                    <Image
                        src={'/images/PrintPortfolio.jpg'}
                        alt='MAIN PORTFOLIO'
                        height={446}
                        width={631}
                    />
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-1'>
                            <h2 className='font-medium text-[#3A3A3A]'>
                                PRINT PORTFOLIO
                            </h2>
                            <p className='font-medium text-[#676767]'>
                                print development and colour experimentation
                            </p>
                        </div>
                        <Image
                            src={'/images/arrowRight.png'}
                            alt='ARROW'
                            height={75}
                            width={115}
                        />
                    </div>
                </div>
                </Link>
            </div>
            <Footer/>
        </>
      );
}

export default LookbookPage;