import Image from 'next/image';
import Link from "next/link";


export function Menu() {
  return (
      <ul className="fixed top-0 left-0 right-0 flex justify-around bg-opacity-70 bg-gray-300 h-10 z-10">
        {/* メニュー */}
        <li>
        <Link href={"#home"}><Image src="/assets/logo_trace.png" alt="Logo" className="h-full" width={40} height={1}/></Link>
        </li>
        <li className="flex items-center justify-center hover:bg-gray-500"><Link href={"#about"}>about</Link></li>
        <li className="flex items-center justify-center hover:bg-gray-500"><Link href={"#photo"}>photo</Link></li>
        <li className="flex items-center justify-center hover:bg-gray-500"><Link href={"#video"}>video</Link></li>
        <li className="flex items-center justify-center hover:bg-gray-500"><Link href={"#contact"}>contact</Link></li>
      </ul>
  );
}
