'use client';
import { Menu } from '@/components/Menu';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Contact } from '@/components/Contact';
import { BgVideo } from '@/components/BgVideo';
import { Loading } from '@/components/Loading';
import React, { useState, useEffect } from 'react';



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return  (
    <>
      {loading ? 
      <Loading />
      : (
        <>
          <Menu/>
          <BgVideo/>
          <About/>
          <Work/>
          <Contact/>
        </>
      )}
    </>
  );
}
