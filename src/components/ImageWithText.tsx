// components/ImageWithText.tsx
import Image from 'next/image';

interface ImageWithTextProps {
  src: string;
  alt: string;
  text: string;
  textColor: string;
  bgColor?: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ src, alt, text, textColor, bgColor }) => {
  return (
    <div className='relative'>
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
  );
};

export default ImageWithText;