"use client"
import { useState, useEffect } from 'react';
import style from '../styles/Navbar.module.css';

const Section7 = () => {
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
    <div className={`container ${isSmallScreen ? 'col-12' : 'col-3'} mx-auto`}>
      <button className={style.seven} type="button">
        <h4 className="text-center text-white">View all</h4>
      </button>
    </div>
  );
};

export default Section7;