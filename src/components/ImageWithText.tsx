// components/ImageWithText.tsx
import Image from 'next/image';
import Link from 'next/link';

interface ImageWithTextProps {
  src: string;
  alt: string;
  href: string;
  text: string;
  textColor: string;
  bgColor?: string;
  blurDataURL?: string; // Optional prop for blur data URL
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ src, alt, href, text, textColor, bgColor, blurDataURL }) => {
  return (
    <Link href={href} passHref>
      <div className='relative cursor-pointer'>
        <Image
          src={src}
          alt={alt}
          layout='responsive'
          width={1600}
          height={2000}
          className='object-contain'
        />
        <div 
          className={`absolute bottom-24 left-1/2 transform -translate-x-1/2 font-bold text-3xl ${textColor} whitespace-nowrap text-center ${bgColor ? bgColor : ''}`}
          style={bgColor ? { backgroundColor: bgColor } : {}}
        >
          {text}
        </div>
      </div>
    </Link>
  );
};

export default ImageWithText;