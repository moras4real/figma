"use client"
import { useState, useEffect } from 'react';
import style from '../styles/Navbar.module.css';

const Section6 = () => {
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
        <div className={`container ${isSmallScreen ? 'small-screen' : 'd-flex large-screen'} gap-5`}>
            <div className="card text-center">
                <div className={`card-body ${isSmallScreen ? style.ssfaSmall : style.ssfa}`}>
                    <h2 className={isSmallScreen ? style.ssfaaSmall : style.ssfaa}>Pillars of Islam</h2>
                </div>
            </div>

            <div className="card text-center">
                <div className={`card-body ${isSmallScreen ? style.ssfbSmall : style.ssfb}`}>
                    <h2 className={isSmallScreen ? style.ssfbbSmall : style.ssfbb}>Articles of Faith</h2>
                </div>
            </div>

            <div className="card text-center">
                <div className={`card-body ${isSmallScreen ? style.ssfcSmall : style.ssfc}`}>
                    <h2 className={isSmallScreen ? style.ssfccSmall : style.ssfcc}>Stories of the Prophets</h2>
                </div>
            </div>
        </div>
    );
};

export default Section6;