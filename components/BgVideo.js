import Image from 'next/image';
import styled, { keyframes } from "styled-components";
import { LiaAngleDoubleDownSolid } from "react-icons/lia";
import { scroll } from "framer-motion"

// 上下のアニメーションを定義
const bounce = keyframes`
  0%, 100% {
    transform: translateY();
  }
  50% {
    transform: translateY(-15px);
    opacity:1;
  }
`;
const BouncingDev = styled.div`
  animation: ${bounce} 1.8s infinite;

`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeInVideo = keyframes`
  from {
    filter: blur(0px);
    opacity: 1;

  }
  to {
    filter: blur(5px);
    opacity: 0.7;
  }
`;


const Container = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out;
  animation-delay: 3s;
  animation-fill-mode:forwards;

`;
const FadeInvideo = styled.div`
animation: ${fadeInVideo} 1s ease-in-out;
  animation-delay: 3s;
  animation-fill-mode:forwards;
`;

const FadeInDev = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out;
  animation-delay: 5s;
  animation-fill-mode:forwards;
`;



export function BgVideo() {
  return (
    <section className="relative h-screen w-full" id="Home">
      {/* 動画背景 */}
      <FadeInvideo className='fixed -z-10 w-full h-screen'>
      <video autoPlay loop muted className=" inset-0 w-full object-cover h-screen" preload="auto">
        <source src="/video/bg_video.mp4" type="video/mp4" />
      </video>
      </FadeInvideo>
      <Container className="inset-0 flex flex-col items-center justify-center text-6xl font-bold text-white absolute">
        <Image src="/assets/fromB_logo_trace.png" alt="Logo" width={220} height={220}/>
      </Container>
      <FadeInDev>
      <BouncingDev className="inset-0 flex flex-col items-center justify-end text-xl lg:text-2xl  text-white absolute">
          Scroll
          <dev className="flex justify-center text-4xl lg:text-5xl">
            <LiaAngleDoubleDownSolid/>
          </dev>
        </BouncingDev>
        </FadeInDev>
      </section>
  );
}
