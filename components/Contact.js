import Link from "next/link";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion"
import { FaRegCheckCircle } from "react-icons/fa";


export function Contact() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // ここにmail.jsを使った処理
    setIsClicked(!isClicked); // ボタンがクリックされるたびに状態を切り替える
  };



  return (
    //<section className='bg-gradient-to-l from-pink-200 to-blue-200 lg:h-screen w-full p-3'  id="Contact">
    <motion.section className='bg-gradient-to-l from-pink-200 to-blue-200 lg:h-screen w-full p-3'  id="Contact"
    initial={{ opacity: 1 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 0.5 }}
    >
      <motion.h1 
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1 , x:0 }} 
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}          
      className='text-5xl text-center m-5 text-gray-700'>
        Contact
      </motion.h1>
      {/* カード */}
      <div className="lg:flex  justify-center items-center h-[70%] lg:w-[80%] bg-blue-50 m-auto z-50">
        <div className="flex justify-center items-center h-full lg:w-[50%] md:w-[30%] m-auto">
          {/* 名刺 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }}          
            className="m-5 flex justify-center items-center bg-white lg:w-[80%] md:w-full sm:w-[40%] xs:py-16 xs:w-[70%] lg:h-[50%] xs:shadow-lg hover:shadow-2xl duration-500">
            <div className="w-[300px]">
              <div className="flex justify-end">
              <Image src="/assets/fromB_logo_trace.png"
                width={75}
                height={75}
                className="z-100"
              />
              </div>
              <h1 className="text-2xl border-b-2 border-gray-400 m-auto text-center w-[80%]">Kazuki Mizusaki</h1>
              <div className="lg:flex justify-between w-[80%] m-auto">
                <div>
                  <p className="text-lg text-center">Video creater</p>
                  <p className="text-sm text-center">VP・PV・MV制作</p>
                </div>
                  <p className="text-lg lg:mr-5 text-center">水崎 一輝</p>
              </div>
              <div className="lg:flex justify-between mt-2">
                <div>
                  <p className="text-center">SNS:
                    <Link href="https://www.instagram.com/zakk__87/" target="_blank">
                      <FaInstagram className="m-2 hover:text-orange-500 hover:scale-110 transition-all duration-200 text-xl inline"/>
                    </Link>
                    <Link href="https://www.youtube.com/@kazumoviefiles7653" target="_blank">
                    < FiYoutube className="m-2 hover:text-red-500 hover:scale-110 transition-all duration-200 text-xl inline"/>
                    </Link>
                  </p>  
                </div>
                <div className="text-center mb-2">
                  <p className="text-sm">Mail:mktr087@gmail.com</p>
                  <p className="text-sm">TEL:090-9408-8536</p>
                </div>
              </div>
            </div>
            <div>
            </div>
          </motion.div>

        </div>
        {/* メールフォーム */}
        {isClicked ?
        <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1}} 
        transition={{ duration: 2}} 
        className="m-5 lg:w-[50%] lg:flex xs:flex-col justify-center items-center h-[350px]" >
          <FaRegCheckCircle className="text-4xl text-green-500 mr-auto ml-auto"/>
          <p className="text-2xl text-center">お問い合わせありがとうございます。</p>
          <p className="text^xl text-center">XX日程度で返信させていただきます。
          今しばらくおまちください。</p>
        
        </motion.div>

        :
        <motion.form
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.5 }} 
          viewport={{ once: true }}
          className="m-5 lg:w-[50%] flex flex-col justify-center items-center">
          <h1 className="text-xl text-gray-600 m-2 font-semibold"><CiMail className="inline text-2xl mr-1" />Mail</h1>
          <p className="mb-9  text-gray-600">XXやXXなどご気軽にお問い合わせください</p>
            <input
              type="text"
              id="name"
              placeholder="お名前"
              name="name"
              className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:shadow-md focus:outline-slate-500"
            />
            <input
              type="email"
              id="name"
              placeholder="ご自身のメールアドレス"
              className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:shadow-md focus:outline-slate-500"
            />
            <input
              type="text"
              id="subject"
              placeholder="件名"
              name="subject"
              className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:shadow-md focus:outline-slate-500"
            />
            <textarea
              name="message"
              id="message"
              placeholder="お問い合わせ内容"
              row={"7"}
              className="w-full text-gray-700 border border-slate-200 rounded py-16 px-4 mb-4 leading-tight focus:shadow-md focus:outline-slate-500"
            />
            <div>
            <button
            className="mb-3 flex justify-end bg-blue-500 text-white font-medium py-3 px-6 rounded hover:shadow hover:bg-blue-800 transition duration-500"
            type="submit" onClick={handleClick}
            >            
            送信
            </button>
            </div>
          </motion.form>
                        }
          </div>
    </motion.section>
  );
}

