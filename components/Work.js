'use client';
import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Image from 'next/image';
import { useEffect } from 'react';
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
  <h1 className='text-5xl flex justify-center pt-5 text-white'>WORK</h1>
  <h1 className='sm:text-white'>スマホです！！！！</h1>
  <h1 className='md:text-white'>タブレットです！！！！</h1>
  <h1 className='lg:text-white'>PCです！！！</h1>

    {/* 作品一覧 */}
    <div className='h-[60%] flex items-center justify-center mb-0'>
      {/* 左画像 */}
      <div className='w-[20%]'>
      <Image
        src={slideData[(currentIndex + 1 + slideData.length) % slideData.length]['src']}
        alt="Next"
        className="opacity-50 border-4 border-solid border-gray-300 rounded-lg"
        width={250} height={150}
      />
      </div>
      {/* 選択映像 */}
      {/* 幅がちょっと均等じゃないからここは調整する */}
      <div className='flex justify-center items-center w-[55%]'>
      <SlArrowLeft onClick={nextImage} className='text-4xl cursor-pointer text-white z-10 md:hidden sm:hidden lg:block hover:scale-110 transition-transform duration-300 ease-in-out'/>
        <Image
        src={slideData[(currentIndex + slideData.length) % slideData.length]['src']}
        width={600} height={200} className='hover:opacity-50 transition-opacity duration-300 ease-in-out border-4 border-solid border-gray-300 rounded-lg '
      />
      <SlArrowRight onClick={prevImage} className='text-4xl cursor-pointer text-white z-10 md:hidden sm:hidden lg:block hover:scale-110  transition-transform duration-300 ease-in-out'/>
      </div>
      {/* 右画像 */}
      <div className='w-[20%]'>
      <Image
        src={slideData[(currentIndex - 1 + slideData.length) % slideData.length]['src']}
        className="opacity-50 border-4 border-solid border-gray-300 rounded-lg"
        width={250} height={150}
      />
      </div>
    </div>

    {/* 作品説明 */}
      <div className='flex justify-center items-center h-[30%] text-white'>
        {slideData[currentIndex]['description']}
      </div>
    </section>
    </>
  );
}
