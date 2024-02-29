'use client';
import { Menu } from '@/components/Menu';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Contact } from '@/components/Contact';
import { BgVideo } from '@/components/BgVideo';
import { Loading } from '@/components/Loading';
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components";


const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const FadeInDev = styled.div`
opacity: 0;
animation: ${fadeIn} 2s ease-in-out;
animation-fill-mode:forwards;
`;



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
        <FadeInDev>
          <Menu/>
          <BgVideo/>
          <About/>
          <Work/>
          <Contact/>
        </FadeInDev>
      )}
    </>
  );
}
