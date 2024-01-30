"use client"
import style from '../styles/Navbar.module.css';
import Image from "next/image";
import { useState, useEffect } from 'react';

const Section4 = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 788);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={`container ps-5 d-flex ${isSmallScreen ? 'flex-column' : 'gap-5'}`}>
        <button className={`${style.ssfour} btn pt-5 pb-5 ps-3 pe-3`} type="submit">
          <Image src="/secone.png" alt="" width="150" height="150" />
          <h6 className="text-white mt-3">Our app contains the</h6>
          <h6 className="text-white">fundamental teaching of</h6>
          <h6 className="text-white">Islam for kids</h6>
        </button>

        <button className={`${style.ssfoura} btn pt-5 pb-5 ps-3 pe-3`} type="submit">
          <Image src="/read.png" alt="" width="150" height="150" />
          <h6 className="text-white mt-3">We make it interesting by</h6>
          <h6 className="text-white">including the Stories</h6>
          <h6 className="text-white">of the Prophets and his</h6>
          <h6 className="text-white">Companions</h6>
        </button>

        <button className={`${style.ssfourb} btn pt-5 pb-5 ps-3 pe-3`} type="submit">
          <Image src="/pray.png" alt="" width="150" height="150" />
          <h6 className="text-white mt-3">As we all know that Du'a is</h6>
          <h6 className="text-white">an essential part of our</h6>
          <h6 className="text-white">life as a Muslim. Du'a is</h6>
          <h6 className="text-white">also included in our app</h6>
        </button>

        <button className={`${style.ssfourc} btn pt-5 pb-5 ps-3 pe-3`} type="submit">
          <Image src="/sectwo.png" alt="" width="150" height="150" />
          <h6 className="text-white mt-3">Our app contains the 99</h6>
          <h6 className="text-white">Names of Allah</h6>
        </button>
      </div>
    </>
  );
}

export default Section4;