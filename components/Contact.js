
import { RiMailCheckLine } from "react-icons/ri";

export function Contact() {
  return (
    <section className='bg-gradient-to-l from-pink-200 to-blue-200 h-screen w-full' id="Contact">
      <h1 className='text-5xl text-center p-10 text-gray-700'>contact</h1>
      <div className="flex justify-center items-center">
        <form className="lg:w-[50%] md:w-[80%] sm:w-[90%] lg:h-[70%] flex flex-col justify-center items-center bg-blue-50  p-10 rounded-md shadow-2xl ">
          <h1 className="text-2xl text-gray-600 mb-1">Mail</h1>
          <p className="mb-9  text-gray-600">XXやXXなどお気軽にお問い合わせください</p>

            <input
              type="text"
              id="name"
              placeholder="お名前"
              name="name"
              className="lg:w-[60%] md:w-[70%] text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:shadow-md focus:outline-slate-500"
            />
            <input
              type="email"
              id="name"
              placeholder="ご自身のメールアドレス"
              className="lg:w-[60%] md:w-[70%] text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:shadow-md focus:outline-slate-500"
            />
            <input
              type="text"
              id="subject"
              placeholder="件名"
              name="subject"
              className="lg:w-[60%] md:w-[70%] text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:shadow-md focus:outline-slate-500"
            />
            <textarea
              name="message"
              id="message"
              placeholder="お問い合わせ内容"
              row={"7"}
              className="lg:w-[60%] md:w-[70%] text-gray-700 border border-slate-200 rounded py-10 px-4 mb-4 focus:shadow-md focus:outline-slate-500"
            />
            <div>
              <button
                className="flex justify-end bg-blue-500 text-white font-medium py-3 px-6 rounded hover:shadow hover:bg-blue-800"
                type="submit"
              >
                送信
              </button>
              
            </div>
          </form>
          </div>
    </section>
  );
}
