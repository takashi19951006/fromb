import Image from 'next/image';
import { SlArrowDown } from "react-icons/sl";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

// 上下のアニメーションを定義
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;
const BouncingArrow = styled(SlArrowDown)`
  animation: ${bounce} 1.5s infinite;
`;
export function BgVideo() {
  return (
    <section className="relative h-screen" id="home">
      {/* 動画背景 */}
      <video autoPlay loop muted className="absolute inset-0 w-full object-cover opacity-70   h-screen">
        <source src="/video/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-6xl font-bold text-white">
        <Image src="/assets/fromB_logo_trace.png" alt="Logo" width={200} height={200}/>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-end text-4xl font-bold">
        <Link href="#about"><BouncingArrow/></Link>
      </div>
      
    </section>
  );
}
