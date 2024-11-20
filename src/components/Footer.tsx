import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full h-[300px] bg-white border-[#D8D8D8] border-t-2 flex flex-row gap-x-12 p-12">
            <Link href='/' className='flex items-center h-full'>
                <div className="relative h-full w-40">
                    <Image
                        src="/images/logo.png"
                        alt='Jnh Site'
                        fill
                        className="object-contain"
                    />
                </div>    
            </Link>
            <div className="h-full w-[1px] bg-gray-300"></div>
            <div className='flex flex-col gap-y-6 py-3'>
                <h1 className='underline text-base text-[#3A3A3A] font-bold'>FOLLOW ME</h1>
                <div className='flex flex-col gap-y-4 h-full'>
                    {/* First row of logos */}
                    <div className='flex flex-row gap-x-3'>
                        <Link href='/' className='flex items-center'>
                            <div className="relative h-10 w-10"> {/* Fixed size for logos */}
                                <Image
                                    src="/images/IG.png"
                                    alt='Instagram'
                                    fill
                                    className="object-contain"
                                />
                            </div>    
                        </Link>
                        <Link href='/' className='flex items-center'>
                            <div className="relative h-10 w-10"> {/* Fixed size for logos */}
                                <Image
                                    src="/images/TIKTOK.png"
                                    alt='TikTok'
                                    fill
                                    className="object-contain"
                                />
                            </div>    
                        </Link>
                        <Link href='/' className='flex items-center'>
                            <div className="relative h-10 w-10"> {/* Fixed size for logos */}
                                <Image
                                    src="/images/PIN.png"
                                    alt='Pinterest'
                                    fill
                                    className="object-contain"
                                />
                            </div>    
                        </Link>
                    </div>
                    {/* Second row of logos */}
                    <div className='flex flex-row gap-x-3'>
                        <Link href='/' className='flex items-center'>
                            <div className="relative h-10 w-10"> {/* Fixed size for logos */}
                                <Image
                                    src="/images/X.png"
                                    alt='X'
                                    fill
                                    className="object-contain"
                                />
                            </div>    
                        </Link>
                        <Link href='/' className='flex items-center'>
                            <div className="relative h-10 w-10"> {/* Fixed size for logos */}
                                <Image
                                    src="/images/FB.png"
                                    alt='Facebook'
                                    fill
                                    className="object-contain"
                                />
                            </div>    
                        </Link>
                        <Link href='/' className='flex items-center'>
                            <div className="relative h-10 w-10"> {/* Fixed size for logos */}
                                <Image
                                    src="/images/YT.png"
                                    alt='YouTube'
                                    fill
                                    className="object-contain"
                                />
                            </div>    
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-full w-[1px] bg-gray-300"></div>
            <div className='flex flex-col gap-y-6 py-3'>
                <h1 className='underline text-base text-[#3A3A3A] font-bold'>SNEAKY LINKS</h1>
                <div className='flex flex-row gap-x-4'>
                    <div className='flex flex-col gap-y-2'>
                        <Link href='/' className='text-base text-[#676767] font-medium hover:underline'>about me</Link>
                        <Link href='/shop' className='text-base text-[#676767] font-medium hover:underline'>shop</Link>
                        <Link href='/colour-project' className='text-base text-[#676767] font-medium hover:underline'>colour project</Link>
                        <Link href='/balenciaga-project' className='text-base text-[#676767] font-medium hover:underline'>balenciaga project</Link>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <Link href='/general-works' className='text-base text-[#676767] font-medium hover:underline'>general works</Link>
                        <Link href='/' className='text-base text-[#676767] font-medium hover:underline'>grayson perry project</Link>
                    </div>
                </div>
            </div>
            <div className="h-full w-[1px] bg-gray-300"></div>
            <div className='flex flex-col gap-y-6 py-3'>
                <h1 className='underline text-base text-[#3A3A3A] font-bold'>CONTACT</h1>
                <p className='text-base text-[#676767] font-medium'>jonah.dav@icloud.com</p>
            </div>
        </footer>
    )
}

export default Footer;