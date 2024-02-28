import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Work() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagesData = [
      {
        src: '/assets/photo_0.jpg',
        width: 300,
        height: 400,
        title: 'Video 0',
        description: 'This is the first Video',
      },
      {
        src: '/assets/photo_0.jpg',
        width: 300,
        height: 400,
        title: 'Video 1',
        description: 'This is the second Video',
      },
      {
        src: '/assets/photo_0.jpg',
        width: 300,
        height: 400,
        title: 'Video 2',
        description: 'This is the third Video',
      },
      {
        src: '/assets/photo_0.jpg',
        width: 300,
        height: 400,
        title: 'Video 3',
        description: 'This is the first Video',
      },
      {
        src: '/assets/photo_0.jpg',
        width: 300,
        height: 400,
        title: 'Video 4',
        description: 'This is the second Video',
      },
      {
        src: '/assets/photo_0.jpg',
        width: 300,
        height: 400,
        title: 'Video 5',
        description: 'This is the third Video',
      },
    ];

    setImages(imagesData);
  }, []);

  return (
    <section className='h-screen bg-slate-500 text-white' id="About">
      <h1 className='text-5xl flex justify-center p-5'>Work</h1>
      <div className='flex flex-wrap justify-center items-center'>
        {images.map((image, index) => (
          <div key={index} className='m-3 w-[25%] hover:opacity-50 text-center bg-slate-400 flex justify-center items-center flex-col p-5 shadow-2xl'>
            <div className="mx-auto">
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.title}
                title={image.title}
                className=''
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="text-lg font-semibold">{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
