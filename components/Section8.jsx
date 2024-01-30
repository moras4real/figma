"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import style from '../styles/Navbar.module.css';

const Section8 = () => {
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
      <div className={style.eight}>
        <div className={`container-fluid ${isSmallScreen ? '' : 'd-flex'}`}>
          <div className={isSmallScreen ? 'col-12' : 'container col-6 ps-5 pt-5'}>
            <h1 className="text-white">The Prophet (S.A.W) said</h1>
            <h2 className="text-white">"Seeking knowledge is an</h2>
            <h2 className="text-white">obligation upon every</h2>
            <h2 className="text-white">Muslim"</h2>
            <button className={style.eighta} type="submit">
              <h4 className="text-center fw-bolded">View all</h4>
            </button>
          </div>
          <div className={isSmallScreen ? 'col-12' : 'col-5'}>
            <Image src="/sun.png" alt="" width={isSmallScreen ? 250 : 500} height={isSmallScreen ? 200 : 300} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section8;