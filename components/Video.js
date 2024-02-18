
export function Video() {
  return (
    <section className='bg-yellow-100 h-screen' id="video">
      <h1 className='text-5xl'>video</h1>
      <p>ここにビデオ</p>
      <ul className="flex justify-between gap-10 flex-col md:flex-row">
        <li className='bg-yellow-300 h-[100px] w-[100px]'>ビデオ1</li>
        <li className='bg-yellow-500 h-[100px] w-[100px]'>ビデオ2</li>
        <li className='bg-yellow-600 h-[100px] w-[100px]'>ビデオ3</li>
      </ul>
    </section>
  );
}
