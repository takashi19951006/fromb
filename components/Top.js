
import { SlArrowUp } from "react-icons/sl";
import Link from "next/link";


export function Top() {  

  return (
    <>
    <Link href="#Home" className="">
      <SlArrowUp className="fixed right-2 bottom-2 h-10 w-10 z-10 m-2 rounded-full text-black hover:scale-110 transition-all duration-250"/>
    </Link>
    </>

  )
}
