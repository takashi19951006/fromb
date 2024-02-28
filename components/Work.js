import React, { useState } from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slideAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const SlidingImage = styled(Image)`
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
  animation: ${slideAnimation} 0.3s ease;
`;

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
        <h1 className='text-5xl text-center pt-4 text-white'>WORK</h1>

        {/* 作品一覧 */}
        <div className='h-full flex items-center justify-center'>
          <SlideContainer>
            <SlidingImage
              src={slideData[(currentIndex + slideData.length) % slideData.length]['src']}
              width={700}
              height={400}
            />
          </SlideContainer>
          {/* 右画像 */}
          <div className=''>
            <h1 onClick={prevImage}>ああああ</h1>
          </div>
        </div>
      </section>
    </>
  );
}
