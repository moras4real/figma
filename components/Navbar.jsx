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
          
              <form className={isSmallScreen ? '' : 'd-flex gap-2'} >
                  <button className="btn btn-outline-primary pt-2 pb-2 ps-5 pe-5 bg-white">
                    <Link className="text-decoration-none" href="/signup">
                      <h3>Sign Up</h3>
                    </Link>
                  </button>

                  <button className="btn btn-primary pt-2 pb-2 ps-5 pe-5 mt-1" type="submit">
                    <Link className="text-decoration-none" href="/signin">
                      <h3 className="text-white ps-2 pe-2">Sign In</h3>
                    </Link>
                  </button>
              </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;