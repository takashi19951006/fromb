import Link from "next/link";
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import styled, { keyframes } from "styled-components";
import { AiOutlineDoubleRight } from "react-icons/ai";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const MenuContainer = styled.div`
  right: ${({ isOpen }) => isOpen ? '0' : '-100%'};
  animation: ${({ isOpen }) => isOpen ? slideIn : slideOut} 0.5s forwards;
`;

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={toggleMenu}>
        <MenuContainer isOpen={isOpen} className="fixed h-screen md:w-[40%] lg:w-[30%]  z-10 bg-black bg-opacity-50">
          <ul className="flex flex-col justify-center items-center text-white text-3xl h-[100%]">
          <li className="hover:bg-gray-500 h-[10%]"></li>
            <li className="hover:bg-gray-500 h-[10%]"><Link href={"#about"}>about</Link></li>
            <li className="hover:bg-gray-500 h-[10%]"><Link href={"#photo"}>photo</Link></li>
            <li className="hover:bg-gray-500 h-[10%]"><Link href={"#video"}>video</Link></li>
            <li className="hover:bg-gray-500 h-[10%]"><Link href={"#contact"}>contact</Link></li>
          </ul>
        </MenuContainer>
        {isOpen?<IoMdClose className="fixed right-2 top-2 h-10 w-10 z-10 m-2 rounded-full"/>:<IoMdMenu className='fixed right-2 top-2 h-10 w-10 z-10 m-2 rounded-full'/>
}        
      </div>
    </>
  );
}
