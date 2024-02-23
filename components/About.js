import Image from 'next/image';


export function About() {
  return (
      <section className='bg-blue-100 h-screen' id="About">
      <h1 className='text-5xl'>about me</h1>
      <Image src="/assets/iam.png" alt="iam" width={100} height={100} className='rounded-full'/>
      <p>まだ作ってない。まだ作ってない。まだ作ってない。まだ作ってない。まだ作ってない。まだ作ってない。まだ作ってない。まだ作ってない。</p>
        <ul className="flex justify-between gap-10 flex-col md:flex-row">
          <li className='bg-yellow-300 h-[100px] w-[100px]'>実績1</li>
          <li className='bg-yellow-500 h-[100px] w-[100px]'>実績2</li>
          <li className='bg-yellow-600 h-[100px] w-[100px]'>実績3</li>
        </ul>
      </section>
  );
}
