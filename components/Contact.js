import Link from "next/link";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import Image from "next/image";
import { CiMail } from "react-icons/ci";

export function Contact() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // ここにmail.jsを使った処理
    setIsClicked(!isClicked); // ボタンがクリックされるたびに状態を切り替える
  };



  return (
    <section className='bg-gradient-to-l from-pink-200 to-blue-200 lg:h-screen w-full p-3'  id="Contact">
      <h1 className="lg:bg-red-500">lgです</h1>
      <h1 className="md:bg-red-500">mdです</h1>
      <h1 className="sm:bg-red-500">smです</h1>
      <h1 className="xs:bg-red-500">xsです</h1>

      <h1 className='text-5xl text-center m-2 text-gray-700'>Contact{isClicked}</h1>
      {/* カード */}
      <div className="lg:flex md:flex  justify-center items-center h-[70%] lg:w-[80%] md:w-[95%] m-auto bg-blue-50 rounded-md shadow-2xl">
        <div className="flex justify-center items-center h-full lg:w-[50%] md:w-[30%]">
          {/* 名刺 */}
          <div className="m-5 flex justify-center items-center bg-white lg:w-[80%] md:w-full sm:w-[40%] xs:w-[40%] lg:h-[50%] xs:py-10 xs:shadow-lg hover:shadow-2xl duration-500">
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
          </div>

        </div>
        {/* メールフォーム */}
        <form className="m-5 lg:w-[50%] flex flex-col justify-center items-center">
          <h1 className="text-xl text-gray-600 mb-1 "><CiMail className="inline text-2xl mb-1 mr-1" />Mail</h1>
          <p className="mb-9  text-gray-600">XXやXXなどお気軽にお問い合わせください</p>
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
              {isClicked ?
              <div
              className="mb-3 flex justify-end bg-blue-500 text-white font-medium py-3 px-6 rounded hover:shadow"
              >送信完了</div>
                : 
                <button
                className="mb-3 flex justify-end bg-blue-500 text-white font-medium py-3 px-6 rounded hover:shadow hover:bg-blue-800 transition duration-500"
                type="submit" onClick={handleClick}
                >            
                送信
              </button>
                }
              
            </div>
          </form>
          </div>
    </section>
  );
}
