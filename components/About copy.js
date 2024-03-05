import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

export function About() {
  return (
      <section className='bg-blue-200 h-screen' id="About">
      <div className='lg:flex xs:flex-col justify-center items-center h-screen'>
        <div className='lg:w-[30%] xs:w-full'>
        <h1 className='text-7xl font-bold '>About me</h1>
        <Image src="/assets/iam.png" alt="iam" width={300} height={500} className=''/>
        </div>
        <div className='w-[30%]'>
          <h1 className='text-3xl'>見出しのひとこと</h1>
          <p className='text-xl'>
          自己紹介と思い自己紹介と思い自己紹介と思い自己紹介と思い
          自己紹介と思い自己紹介と思い自己紹介と思い自己紹介と思い
          自己紹介と思い自己紹介と思い自己紹介と思い自己紹介と思い
          自己紹介と思い自己紹介と思い自己紹介と思い自己紹介と思い
          自己紹介と思い自己紹介と思い自己紹介と思い自己紹介と思い
          
          </p>
          {/* 実績紹介 */}
          <ul className="flex justify-between gap-10 flex-col md:flex-row">
            <li className='bg-yellow-300 h-[100px] w-[100px]'>実績1</li>
            <li className='bg-yellow-500 h-[100px] w-[100px]'>実績2</li>
            <li className='bg-yellow-600 h-[100px] w-[100px]'>実績3</li>
          </ul>
        </div>
      </div>
      </section>
  );
}
