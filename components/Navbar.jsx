"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import style from '../styles/Navbar.module.css';

const Navbar = () => {
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
      <nav className="navbar bg-body-white">
        <div className="container-fluid">
          <div className={style.hyra}>Hyra</div>

          <div className={isSmallScreen ? '' : 'd-flex gap-5'}>
            <div className={style.hora}>Home</div>
            <div className={style.hor}>Our Teachings</div>
            <div className={style.hor}>About Us</div>             
          </div>
          
              
              <form className={`d-${isSmallScreen ? 'flex' : 'none'}`}>
                  <button className="btn btn-outline-primary pt-1 pb-1 ps-5 pe-5 bg-white">
                    <Link className="text-decoration-none" href="/signup">
                      <h4>Sign-Up</h4>
                    </Link>
                  </button>

                  <button className="btn btn-primary pt-1 pb-1 ps-5 pe-5 mt-1" type="submit">
                    <Link className="text-decoration-none" href="/signin">
                      <h4 className="text-white ps-2 pe-2">Sign-In</h4>
                    </Link>
                  </button>
              </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;