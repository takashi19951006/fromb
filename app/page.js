'use client';
import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Home() {

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
    <>
      {/* メニュー */}
      <ul className="fixed top-0 left-0 right-0 flex justify-around bg-gray-300 h-10 z-10">
        <li>
        <Link href={"#home"}><Image src="/assets/logo.png" alt="Logo" className="h-full" width={40} height={40}/></Link>
        </li>
        <li className="flex items-center justify-center"><Link href={"#about"}>about</Link></li>
        <li className="flex items-center justify-center"><Link href={"#photo"}>photo</Link></li>
        <li className="flex items-center justify-center"><Link href={"#video"}>video</Link></li>
        <li className="flex items-center justify-center"><Link href={"#contact"}>contact</Link></li>
      </ul>

      {/* 動画 */}
      <section className="relative h-screen" id="home">
        <video autoPlay loop muted className="absolute inset-0 w-full object-cover opacity-70" style={{ height: `calc(100vh - 10px)` }}>
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-6xl font-bold text-white">
          From B
        </div>
      </section>
      <section className='bg-blue-100 h-screen' id="about">
      <h1 className='text-5xl'>about</h1>
      <Image src="/assets/iam.png" alt="iam" width={100} height={100} className='rounded-full'/>
      <p>ここに自己紹介。ここに自己紹介。ここに自己紹介。ここに自己紹介。ここに自己紹介。
        ここに自己紹介。ここに自己紹介。ここに自己紹介。ここに自己紹介。</p>
        <ul className="flex justify-between gap-10 flex-col md:flex-row">
          <li className='bg-yellow-300 h-[100px] w-[100px]'>実績1</li>
          <li className='bg-yellow-500 h-[100px] w-[100px]'>実績2</li>
          <li className='bg-yellow-600 h-[100px] w-[100px]'>実績3</li>
        </ul>
      </section>
      <section className='bg-green-100 h-screen' id="photo">
        <h1 className='text-5xl'>photo</h1>
        <img src={images[currentImageIndex]} alt="Slideshow" width={400} height={400} />
        <p>手動で写真スライドする機能も付けるつもり。アニメーションも付ける。
          ここに写真コメントを書く</p>
      </section>
      <section className='bg-yellow-100 h-screen' id="video">
        <h1 className='text-5xl'>video</h1>
        <p>ここにビデオ</p>
        <ul className="flex justify-between gap-10 flex-col md:flex-row">
          <li className='bg-yellow-300 h-[100px] w-[100px]'>ビデオ1</li>
          <li className='bg-yellow-500 h-[100px] w-[100px]'>ビデオ2</li>
          <li className='bg-yellow-600 h-[100px] w-[100px]'>ビデオ3</li>
        </ul>
      </section>
      <section className='bg-blue-100 h-screen' id="contact">
        <h1 className='text-5xl'>contact</h1>
        mail.jsを使って実際にメールが届く様にする
        <form className="w-full">
              <input
                type="text"
                id="name"
                placeholder="お名前"
                name="name"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <input
                type="email"
                id="name"
                placeholder="ご自身のメールアドレス"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <input
                type="text"
                id="subject"
                placeholder="件名"
                name="subject"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <textarea
                name="message"
                id="message"
                placeholder="用件"
                row={"7"}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-3 mb-4 leading-tight focus:outline-cadetblue"
              />
              <div>
                <button
                  className="flex justify-end bg-blue-500 text-white font-medium py-3 px-6 rounded hover:shadow hover:bg-darkblue "
                  type="submit"
                >
                  送信
                </button>
              </div>
            </form>
            <p>SNSもいろいろ書く</p>

      </section>
  

    </>
  );
}
