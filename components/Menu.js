import Link from "next/link";
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import styled, { keyframes } from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
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
        <MenuContainer isOpen={isOpen} className="backdrop-blur-md fixed h-screen  w-[40%] lg:w-[30%]  z-10 bg-black bg-opacity-70 transition-right duration-500">
          <ul className="flex flex-col justify-end items-center text-white text-3xl h-[100%] w-full">
            {["About", "Work", "Contact"].map((section, index) => (
            <li
              key={index}
              className={`hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-500 hover:scale-110 h-[10%] w-full flex justify-center transition-all duration-200`}
            >
              <Link href={`#${section}`}>{section}</Link>
            </li>
            ))}

            <li className="flex justify-center items-center mb-3">
              <Link href="https://www.instagram.com/zakk__87/" target="_blank">
                <FaInstagram className="m-3 hover:text-orange-500 hover:scale-110 transition-all duration-200"/>
              </Link>
              <Link href="https://www.youtube.com/@kazumoviefiles7653" target="_blank">
                <FiYoutube className="m-3 hover:text-red-500 hover:scale-110 transition-all duration-200"/>
              </Link>
            </li>
          </ul>
        </MenuContainer>
        {
        isOpen?
        <IoMdClose className="fixed right-2 top-2 h-10 w-10 z-10 m-2 rounded-full text-white hover:scale-110 transition-all duration-250"/>:
        <IoMdMenu className='fixed right-2 top-2 h-10 w-10 z-10 m-2 rounded-full'/>
        }        
      </div>
    </>
  );
}
