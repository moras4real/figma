"use client"
import React, { useState, useEffect } from 'react';
import style from '../styles/Navbar.module.css';
import Image from 'next/image';

const Section2 = () => {
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
            <div className={`container-fluid d-flex ${isSmallScreen ? 'flex-column' : 'flex-row'}`}>

            {isSmallScreen && (
                <div className={`carousel slide carousel-fade ${isSmallScreen ? 'col-12' : 'col-md-6 pe-5'}`} data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item   active">
                            <Image src="/secone.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/sectwo.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/secthree.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/secfour.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/secfive.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/secsix.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/secseven.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/seceight.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>



                    </div>
                </div>
                )}



                <div className={`container ${isSmallScreen ? 'ps-5 pt-5' : 'col-md-6 ps-5 pt-5'}`}>
                    <h1 className={style.secfw}>Discover a world where</h1>
                    <h1 className={style.secfw}>Education meets</h1>
                    <h1 className={style.secfw}>Excitement</h1> <br />

                    <h3>Our Islamic app for kids is designed to</h3>
                    <h3>inspire and teach in the most enjoyable</h3>
                    <h3>way.  Our app is not just educational; it's</h3>
                    <h3>an adventure in faith.</h3>
                </div>

                



                {!isSmallScreen && (
                <div className={`carousel slide carousel-fade ${isSmallScreen ? 'col-12' : 'col-md-6 pe-5'}`} data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item   active">
                            <Image src="/secone.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/sectwo.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/secthree.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/secfour.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/secfive.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/secsix.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/secseven.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>

                        <div class="carousel-item">
                            <Image src="/seceight.png" class="d-block w-100" width="450" height="450" alt="" />
                        </div>



                    </div>
                </div>
                )}

            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        </>
    );
};

export default Section2;