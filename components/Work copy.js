import React, { useState } from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';



export function Work() {
  const slideData = [
    {'src':"/assets/photo_0.jpg",'description':"知らんところの鳥居"},
    {'src':"/assets/photo_1.jpg",'description':"インスタでたまに出てくる所"},
    {'src':"/assets/photo_2.jpg",'description':"上高地の景色"},
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length);
  };

  return (
  <>
  <section className='h-screen w-full bg-slate-500' id="Work">
  <h1 className='text-5xl flex justify-center pt-4 text-white'>WORK</h1>

    {/* 作品一覧 */}
    <div className='h-full flex items-center justify-center'>
      {/* 左画像 */}
      <div className=''>
      <Image
        src={slideData[(currentIndex + 1 + slideData.length) % slideData.length]['src']}
        alt="Next"
        className="opacity-50 shadow-2xl"
        width={350} height={250}
        style={{ transform: `perspective(150px) rotateY(-160deg)` }}
        onClick={nextImage}
      />
      </div>
      {/* 選択映像 */}
      {/* 幅がちょっと均等じゃないからここは調整する */}
      <div className='flex justify-center items-center'>
        <Image
        src={slideData[(currentIndex + slideData.length) % slideData.length]['src']}
        width={700} height={400} className='hover:opacity-50 transition-opacity  border-gray-300 shadow-2xl '
      />
      </div>
      {/* 右画像 */}
      <div className=''>
      <Image
        src={slideData[(currentIndex - 1 + slideData.length) % slideData.length]['src']}
        className="opacity-50 shadow-2xl"
        width={350} height={250}
        style={{ transform: `perspective(150px) rotateY(160deg)` }}
        onClick={prevImage}
        />
      </div>
    </div>
    </section>
    </>
  );
}
