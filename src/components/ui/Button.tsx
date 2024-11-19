import Link from 'next/link';

interface ButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string; // Optional param
}

const Button: React.FC<ButtonProps> = ({ href, children, className }) => {
    return (
        <Link href={href} className={`bg-[#FF0000] text-[#F0F0F0] font-medium py-2 px-4 rounded-3xl ${className}`}>
            {children}
        </Link>
    );
};

export default Button;