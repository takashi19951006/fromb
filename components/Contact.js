

export function Contact() {
  return (
    <section className='bg-blue-100 h-screen w-full' id="Contact">
      <h1 className='text-5xl'>contact</h1>
      mail.jsを使って実際にメールが届く様にする
      <form className="w-[80%] flex flex-col justify-center items-center">
            <input
              type="text"
              id="name"
              placeholder="お名前"
              name="name"
              className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
            />
            <input
              type="email"
              id="name"
              placeholder="ご自身のメールアドレス"
              className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
            />
            <input
              type="text"
              id="subject"
              placeholder="件名"
              name="subject"
              className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
            />
            <textarea
              name="message"
              id="message"
              placeholder="用件"
              row={"7"}
              className="w-full text-gray-700 border border-slate-200 rounded py-3 px-3 mb-4 leading-tight focus:outline-cadetblue"
            />
            <div>
              <button
                className="flex justify-end bg-blue-500 text-white font-medium py-3 px-6 rounded hover:shadow hover:bg-darkblue "
                type="submit"
              >
                送信
              </button>
            </div>
          </form>
    </section>
  );
}
