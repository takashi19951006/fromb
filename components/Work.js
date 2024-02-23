'use client';
import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Image from 'next/image';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';



export function Work() {
  // キーフレームの定義
  const bgAnimation = keyframes`
  0% {
  opacity: 0;
  transform: scaleX(0) translateX(-5%);
  }
  30% {
  transform: scaleX(1) translateX(0);
  }
  100% {
    transform: scaleX(1) translateX(0);
  }
  30%, 100% {
    opacity: 1;
  }
  `;

  // スタイル付きコンポーネントの定義
  const Wrapper = styled.div`
  background-image: linear-gradient(to right, #362ae0 0%, #3b79cc 50%, #42d3ed 100%);
  color: #fff;
  padding: 8px 16px;
  overflow: hidden;
  `;

  const BgWrap = styled.span`
    position: absolute;
    display: block;
    margin-top: 5px;
    color: transparent;
    &:before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    }
    `;
  const Text = styled.span`
    display: inline-block;
    font-size: 36px;
    font-weight: bold;
    padding: 5px 15px;
    z-index: 1;
    `;


  const slideData = [
    {'src':"/assets/photo_1.jpg",'description':"韓国岳にいった時のやつ"},
    {'src':"/assets/photo_2.jpg",'description':"山の池。名前は忘れた。"},
    {'src':"/assets/photo_3.jpg",'description':"キャンプにいった時のやつ"},

  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      nextImage();
    }, 10000);
    // クリーンアップ関数を追加してタイマーをクリア
    return () => clearTimeout(timer);
  }, [currentIndex]);
  return (
  <>
  <section className='h-screen w-full bg-slate-500' id="Work">
  <h1 className='text-5xl flex justify-center pt-5'>FEATURED WORK</h1>
    {/* 作品一覧 */}
    <div className='h-[60%] flex items-center justify-center mb-0'>
      {/* 左画像 */}
      <Image
        src={slideData[(currentIndex + 1 + slideData.length) % slideData.length]['src']}
        alt="Next"
        className="m-5 opacity-50"
        width={250} height={150}
      />
      {/* 選択映像 */}
      <div className='flex justify-center items-center'>
      <SlArrowLeft onClick={nextImage} className='text-4xl cursor-pointer text-white z-10'/>
      <video autoPlay loop muted className="w-[650px] h-[550px] m-5 hover:opacity-50" preload="auto" key={currentIndex}>
        <source src={`/video/video_${currentIndex}.mp4`} type="video/mp4" />
      </video>
      <SlArrowRight onClick={nextImage} className='text-4xl cursor-pointer text-white z-10'/>
      </div>
      {/* 右画像 */}
      <Image
        src={slideData[(currentIndex - 1 + slideData.length) % slideData.length]['src']}
        alt="Next"
        className="m-5 opacity-50"
        width={250} height={150}
      />
    </div>

    {/* 作品説明 */}
      <div className='flex justify-center items-center h-[30%] text-white'>
        {slideData[currentIndex]['description']}
      </div>
    </section>
    </>
  );
}
