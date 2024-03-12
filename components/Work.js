import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

export function Work() {

  return (
    <>
      <section className='w-full bg-gradient-to-b from-transparent to-slate-600' >
          <div className="h-[100vw]">
          </div>  

          <div className="lg:flex justify-center items-center" id="Work">
            {/* セリフ部分 */}
          <motion.p className='text-2xl text-center text-white xs:pb-32'
            initial={{ opacity: 0, }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}          
          
          >
            思い出はあいうえお。<br/>
            映像に残すことでかきくけことなります。<br/>
            私はさしすせそをたちつてとをしていきます。
          </motion.p>
          {/* 動画紹介 */}
          <div className="flex flex-col lg:w-[40%] xs:w-full">
            <motion.div
            initial={{ opacity: 0, }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.8 ,delay:2}}
            viewport={{ once: true }}    
            className="xs:w-[50%]"
            >
              <Link href="https://www.youtube.com/@kazumoviefiles7653" target="_blank">
              <div className="m-5 lg:h-[15vw] lg:w-[25vw]  overflow-hidden relative flex items-center justify-center brightness-75
                hover:brightness-100 duration-300 shadow-2xl border-t-[15px] border-b-[15px] border-black">
                  <Image src='/assets/photo_0.jpg' width={500} height={500} />
                  <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl hover:text-black hover:scale-125 duration-300"/>
                </div>              
                </Link>

            </motion.div>
            <motion.div
            initial={{ opacity: 0, }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.8 ,delay:2.5}}
            viewport={{ once: true }}      
            className="self-end xs:w-[50%]"    
            >
              <Link href="https://www.youtube.com/@kazumoviefiles7653" target="_blank">
              <div className="m-5 lg:h-[15vw] lg:w-[25vw]  overflow-hidden relative flex items-center justify-center brightness-75
                hover:brightness-100 duration-300 shadow-2xl border-t-[15px] border-b-[15px] border-black">
                  <Image src='/assets/photo_1.jpg' width={500} height={500} />
                  <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl hover:text-black hover:scale-125 duration-300"/>
                </div>              
                </Link>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.8 ,delay:3}}
            viewport={{ once: true }}    
            className="xs:w-[50%]"      
            >
              <Link href="https://www.youtube.com/@kazumoviefiles7653" target="_blank">
              <div className="m-5 lg:h-[15vw] lg:w-[25vw]  overflow-hidden relative flex items-center justify-center brightness-75
                hover:brightness-100 duration-300 shadow-2xl border-t-[15px] border-b-[15px] border-black">
                  <Image src='/assets/photo_2.jpg' width={500} height={500} />
                  <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl hover:text-black hover:scale-125 duration-300"/>
                </div>              
                </Link>
            </motion.div>          
          </div>
          </div>
          <div className="h-[50vw]">
          </div>  
      </section>
    </>
  );
}
