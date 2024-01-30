"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import style from '../styles/Navbar.module.css';

const Section9 = () => {
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
      <div className={style.nine}>
        <div className="container-fluid">
          <div className="text-center pt-3 pb-3">
            <Image
              src="/twitt.png"
              alt=""
              width={isSmallScreen ? 100 : 200}
              height={isSmallScreen ? 30 : 50}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section9;