import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';

const Navbar = () => {
    return (
        <nav className="bg-[#D9D9D9]/60 backdrop-blur-lg shadow-custom-navbar w-full rounded-xl sticky top-4 md:top-7 mb-4 md:mb-7 z-50">
            <div className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center">
                    <Link href='/' className='flex items-center'>
                        <div className="relative w-12 hover:scale-105 transition-transform">
                            <Image
                                src="/images/logo.png"
                                alt='Jnh Site'
                                height={100}
                                width={100}
                                className="object-contain"
                            />
                        </div>
                    </Link>
                </div>
                <div className='flex flex-row gap-4'>
                    <Button href='/portfolio'>PORTFOLIO</Button>
                    <Button href='/lookbook'>LOOKBOOK</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;