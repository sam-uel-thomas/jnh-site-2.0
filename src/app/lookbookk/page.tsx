import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'

const LookbookPage = () => {
    return (
        <>
            <div className='bg-white flex flex-col min-h-screen gap-y-7 px-7 pt-7 pb-14'>
                <Navbar/>
                <div className='flex-grow flex justify-center items-center pt-7'>
                    <div className='grid grid-cols-1  md:grid-cols-2 gap-12'>
                        <div className='flex flex-col gap-y-4'>
                            <Link href={'/lookbook/wool-trousers'}>
                                <Image
                                    src={'/images/WoolTrousers.jpg'}
                                    alt='Wool Trouser'
                                    height={450}
                                    width={500}
                                />
                            </Link>
                            <h2 className='font-medium text-base text-[#F0F0F0] px-3 py-2 bg-[#FF0000] w-fit rounded-3xl'>
                                WOOL TROUSER
                            </h2>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <Link href={'/lookbook/fencing-vest'}>
                                <Image
                                    src={'/images/FencingVest.jpg'}
                                    alt='Fencing Vest'
                                    height={450}
                                    width={500}
                                />
                            </Link>
                            <h2 className='font-medium text-base text-[#F0F0F0] px-3 py-2 bg-[#FF0000] w-fit rounded-3xl'>
                                FENCING VEST
                            </h2>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <Link href={'/lookbook/horse-rider-jacket'}>
                                <Image
                                    src={'/images/HorseRider.jpg'}
                                    alt='HORSE RIDER JACKET'
                                    height={450}
                                    width={500}
                                />
                            </Link>
                            <h2 className='font-medium text-base text-[#F0F0F0] px-3 py-2 bg-[#FF0000] w-fit rounded-3xl'>
                            HORSE RIDER JACKET
                            </h2>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <Link href={'/lookbook/target-practise'}>
                                <Image
                                    src={'/images/TargetPractise.jpg'}
                                    alt='Wool Trouser'
                                    height={450}
                                    width={500}
                                />
                            </Link>
                            <h2 className='font-medium text-base text-[#F0F0F0] px-3 py-2 bg-[#FF0000] w-fit rounded-3xl'>
                                TARGET PRACTISE TROUSERS
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default LookbookPage;