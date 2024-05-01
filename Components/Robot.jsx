'use client'
import lottie from 'lottie-web';
import animatedData from '../assets/robot.gif';
import { useEffect, useRef } from 'react';
import { MouseParallax } from "react-just-parallax";

const Robot = () => {
    const container = useRef(null);

    // useEffect(() => {
    //     if (container.current) {
    //         lottie.loadAnimation({
    //             container: container.current,
    //             renderer: 'svg', // or 'canvas', 'html'
    //             loop: true,
    //             autoplay: true,
    //             animationData: animatedData,
    //             width: 100,
    //             repeat: false
    //         });
    //     }
    // }, []);

    return (
            <div className='absolute -z-50'>
                <div className='fixed z-50 right-0 w-[100px] h-[100px]'>
                <img src={animatedData.src}  />
                </div>
            </div>
    );
};

export default Robot;