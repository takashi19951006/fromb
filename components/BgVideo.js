import Image from 'next/image';

export function BgVideo() {
  return (
    <section className="relative h-screen" id="home">
      {/* 動画背景 */}
      <video autoPlay loop muted className="absolute inset-0 w-full object-cover opacity-70   h-screen">
        <source src="/video/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-6xl font-bold text-white">
        <Image src="/assets/fromB_logo_trace.png" alt="Logo" width={200} height={200}/>
      </div>
    </section>
  );
}
