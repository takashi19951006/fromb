import styled, { keyframes } from 'styled-components';

// Keyframes
const pulse = keyframes`
  0% {
    opacity: 0;
  }
  
  50% {
    opacity: 1;
  }
  
  100% {
    margin-top: -10em;
    margin-left: -10em;
    opacity: 0;
    height: 20em;
    width: 20em;
  }
`;

// Styled Components
const Circle = styled.div`
  position: absolute;
  animation-iteration-count: infinite;
  animation-duration: 1.7s;
  animation-direction: forward;
  animation-timing-function: ease-out;
  animation-name: ${pulse};


  &:after,
  {
    content: '';
    width: 100%;
    height: 100%;
  }
  &:after {
    box-shadow: 10px 10px 500px #ddd;
    position: absolute;
    border-radius: 100%;
    background-color: white;  
  }
`;



export function Loading() {
  return (
    <div className='fixed flex justify-center items-center left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2'>
      <div className="relative left-[50%] bg-red-500">
        <Circle className="flex justify-center items-center  absolute" />
      </div>
      <h1 className='z-10'>Loading anime作成中</h1>
    </div>
  );
}
