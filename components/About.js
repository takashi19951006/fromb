import Image from "next/image"
import { motion } from "framer-motion"


export function About() {  

  return (
    <>
      <section className='lg:h-screen text-white bg-gradient-to-b  from-slate-600 to-slate-700' id="About">
      <motion.h1 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1 , x:0 }} 
              transition={{ duration: 1 }}
              viewport={{ once: true }}          
              className='text-6xl text-center text-white'>
              About
            </motion.h1>

        <div className="flex justify-center  lg:h-full">
          <div className="lg:w-[70%]  p-10  ">
            {/* 写真とプロフィールエリア */}
            <div className="lg:flex justify-center items-center">
              <Image src="/assets/iam.png" alt="iam" width={300} height={500} className='rounded-md lg:m-5 mt-10 xs:mr-auto xs:ml-auto xs:w-[80%]'/>
              {/* プロフィール */}
              <motion.div
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                viewport={{ once: true }}   
                >       
                <h1 className="text-5xl lg:text-left xs:text-center">KAZUKI MIZUSAKI</h1>
                <p className="text-xl border-b-2 border-white mb-5 lg:text-left xs:text-center">水崎 一輝 / FromB</p>
                <p>
                  1987年東京都生まれ。 2010年に早稲田大学政治経済学部を卒業後、UBS証券株式会社に入社。
                  2011年、UBS Securities LLCに移りニューヨーク勤務を経た後、 2013年に株式会社ディー・エヌ・エー入社。 “夢を叶える”ライブ配信プラットフォーム「SHOWROOM（ショールーム）」を立ち上げる。 
                </p>
              </motion.div>
            </div>
            {/* 実績エリア */}
            <ul className="lg:flex  justify-between items-center pt-10">
            <motion.li
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 ,delay:0}} 
                viewport={{ once: true }}   
                className="bg-gray-800 p-10 text-xl text-center m-5">実績実績実績実績</motion.li>
            <motion.li
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 ,delay:0.5}} 
                viewport={{ once: true }}   
                className="bg-gray-800 p-10 text-xl text-center m-5">実績実績実績実績</motion.li>
            <motion.li
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 ,delay:1}} 
                viewport={{ once: true }}   
                className="bg-gray-800 p-10 text-xl text-center m-5">実績実績実績実績</motion.li>
            </ul>

          </div>
        </div>
      </section>
    </>
  )
}
