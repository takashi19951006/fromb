import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";


export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = ()=>{
    setIsOpen(!isOpen)
  };
  return (
    <>
      <div onClick={openMenu}>
      {isOpen ?
      <ul className="fixed top-0 left-0 right-0 flex justify-around bg-gray-300 h-12 z-10">
      {/* メニュー */}
      <li className="flex items-center justify-center hover:bg-gray-500"><Link href={"#about"}>about</Link></li>
      <li className="flex items-center justify-center hover:bg-gray-500"><Link href={"#photo"}>photo</Link></li>
      <li className="flex items-center justify-center hover:bg-gray-500"><Link href={"#video"}>video</Link></li>
      <li className="flex items-center justify-center hover:bg-gray-500"><Link href={"#contact"}>contact</Link></li>
      <li className="flex items-center justify-center hover:bg-gray-500"><IoMdClose className='w-10 h-10'/></li>
    </ul>
      :<IoMdMenu className='fixed right-2 h-10 w-10 z-10 m-2 rounded-full'/>}
      </div>
    

      </>

  );
}
