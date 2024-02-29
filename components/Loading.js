import styled, { keyframes } from 'styled-components';

// Keyframes
const pulse = keyframes`
  0% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    width:20rem;
    height:20rem;
  }
`;
const progress = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
  `

const fadeOut = keyframes`
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
` 

const loading = keyframes`
  10% {
    transform: scale(1.1);
  }
` 
// Styled Components
const Circle = styled.div`
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${pulse};
  box-shadow: 10px 10px 1000px #ddd;
`;

const Progress = styled.div`
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-name: ${progress};
  animation-fill-mode:forwards;
`;

const LoadingSpan= styled.span`
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: ${loading};
  display: inline-block;
`;

const FadeOutLoading = styled.div`
  animation: ${fadeOut} 1s ease-in-out;
  animation-delay: 2s;
  animation-fill-mode:forwards;
`;


export function Loading() {
  const spans = [];
  const text = "loading...";
  for (let i = 0; i < text.length; i++) {
    const delay = i * 0.1; // 遅延時間を計算する
    spans.push(
      <LoadingSpan
        key={`loading-span-${i}`}
        style={{ animationDelay: `${delay}s`, fontSize: '1.5rem', fontWeight: 'bold' }}
        >
        {text[i]}
      </LoadingSpan>
    );
  }

  return (
    <FadeOutLoading className='fixed flex justify-center items-center h-full w-full'>
        <Circle className="relative w-[10rem] h-[10rem] bg-white rounded-full" />
        <div className='absolute flex justify-center items-center flex-col'>
          <div className="loading-area mb-5">
          {spans}
          </div>
          <div className="w-[130px] h-[10px] bg-slate-500 relative rounded-full">
            <Progress className="h-[100%] absolute bg-blue-900 rounded-full"/>
          </div>
        </div>
    </FadeOutLoading>
  );
}
