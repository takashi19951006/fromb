import Image from 'next/image';
import { SlArrowDown } from "react-icons/sl";
import styled, { keyframes } from "styled-components";

// 上下のアニメーションを定義
const bounce = keyframes`
  0%, 100% {
    transform: translateY();
  }
  50% {
    transform: translateY(-15px);
  }
`;
const BouncingArrow = styled(SlArrowDown)`
  animation: ${bounce} 1.5s infinite;
`;
const BouncingDev = styled.div`
  animation: ${bounce} 1.8s infinite;
`;

export function BgVideo() {
  return (
    <section className="relative h-screen" id="home">
      {/* 動画背景 */}
      <video autoPlay loop muted className="absolute inset-0 w-full object-cover opacity-70   h-screen" preload="auto">
        <source src="/video/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-6xl font-bold text-white">
        <Image src="/assets/fromB_logo_trace.png" alt="Logo" width={220} height={220}/>
      </div>
      <BouncingDev className="absolute inset-0 flex flex-col items-center justify-end text-xl lg:text-2xl font-bold">
          Scroll
          <dev className="flex justify-center text-4xl lg:text-5xl">
            <SlArrowDown/>
          </dev>
        </BouncingDev>
    </section>
  );
}
