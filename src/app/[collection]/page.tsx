import fs from 'fs';
import path from 'path';
import Image from 'next/image';

type PageProps = {
  params: {
    collection: string;
  };
};

const CollectionPage = async ({ params }: PageProps) => {
  const { collection } = params;

  const imagesDirectory = path.join(process.cwd(), 'public', 'collections', collection);

  if (!fs.existsSync(imagesDirectory)) {
    return <div>404 - Collection Not Found</div>;
  }

  let files = fs.readdirSync(imagesDirectory);

  files = files.filter((file) => file !== '.DS_Store');

  const sortedFiles = files.sort((a, b) => {
    const aNumber = parseInt(a.match(/\d+/)?.[0] || '0', 10);
    const bNumber = parseInt(b.match(/\d+/)?.[0] || '0', 10);
    return aNumber - bNumber;
  });

  const images = sortedFiles.map((file) => ({
    src: `/collections/${collection}/${file}`,
    alt: `${collection} image ${file}`,
  }));

  return (
    <>
      <div className="bg-white flex flex-col gap-y-7 p-7">
        <h1 className="border-4 font-bold text-[#3A3A3A] border-[#3A3A3A] rounded-3xl px-3 py-1 w-fit">
          {collection.replace(/-/g, ' ').toUpperCase()}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {images.map((image, index) => (
            <div key={index} className="relative w-full aspect-[4/5]">
              <Image src={image.src} alt={image.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CollectionPage;
