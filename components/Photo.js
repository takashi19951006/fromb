'use client';

import { useState, useEffect } from 'react';


export function Photo() {
  const images = [
    '/assets/photo_1.jpg',
    '/assets/photo_2.jpg',
    '/assets/photo_3.jpg',
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // 画像を切り替える間隔（ここでは5秒ごとに切り替え）
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <section className='bg-green-100 h-screen' id="photo">
      <h1 className='text-5xl'>photo</h1>
      <img src={images[currentImageIndex]} alt="Slideshow" width={400} height={400} />
      <p>手動で写真スライドする機能も付けるつもり。アニメーションも付ける。
        ここに写真コメントを書く</p>
    </section>
  );
}
