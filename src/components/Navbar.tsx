import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';

const Navbar = () => {
    return (
        <nav className="bg-[#D9D9D9]/60 backdrop-blur-lg shadow-custom-navbar w-full rounded-xl sticky top-7 z-50">
            <div className="flex items-center justify-between h-16 px-6 py-3">
                <div className="flex items-center h-full">
                    <Link href='/' className='flex items-center h-full'>
                        <div className="relative h-full w-11">
                            <Image
                                src="/images/logo.png"
                                alt='Jnh Site'
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>
                </div>
                <div className='flex flex-row gap-4'>
                    <Button href='/'>PORTFOLIO</Button>
                    <Button href='/'>SHOP</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;