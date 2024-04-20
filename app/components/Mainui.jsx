"use client";
import Image from "next/image";
import React ,{useEffect, useCallback}from "react";
import style from '../style/Main.module.css'
import style2 from '../../public/images/top.png'

// import style3 from '../../public/images/image.png'



const Mainui = () => {
    
    const sendNotification = () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    // Check if permission is granted
                    if (Notification.permission === 'granted') {
                        registration.showNotification('Hello Developers!!', {
                            body: 'This is your notification message!!'
                        });
                    } else {
                        console.log('Notification permission not granted.');
                    }
                })
                .catch(error => {
                    console.error('Service worker registration failed:', error);
                });
        } else if ('Notification' in window && Notification.permission === 'granted') {
            // Fallback to standard notification if service workers are not supported
            new Notification('Hello Developers!!', {
                body: 'This is your notification message!!'
            });
        } else {
            console.log('Service workers are not supported.');
        }
    };
    
    
    const requestNotificationPermission = useCallback(() => {
        if ('Notification' in window) {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    console.log('Notification permission granted!!');
                    sendNotification();
                } else {
                    console.log('Notification permission denied');
                }
            }).catch(error => {
                console.error('Error requesting notification permission:', error);
            });
        } else {
            console.log('Browser does not support notifications');
        }
    }, []);
    
    // useEffect(() => {
    //     if ('Notification' in window) {
    //         requestNotificationPermission();
    //     } else {
    //         console.log('Browser does not support notifications');
    //     }
    // }, [requestNotificationPermission]);
    


    
   


    return (
        <>
        <div className={style.Main}>
           <Image src={style2} width={300} height={40}/>
        <h1 className={style.H1} >Lorem Ipsum...</h1>
        <h2 className={style.H2}>Lorem ipsum dolor sit amet.</h2>
       <div className={style.imageContainer} style={{ backgroundColor: 'black', width: '300px', height: '200px', marginTop: '90px' }}>
           {/* <Image src={style3} width={300} height={290} /> */}

        <svg width="280" height="280" viewBox="0 0 344 344" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.svg1}>
        <circle cx="172" cy="172" r="50" fill="url(#paint0_linear_1_44)"/>
        <circle cx="172" cy="172" r="171.5" stroke="url(#paint1_linear_1_44)"/>
        <circle cx="172" cy="172" r="138.5" stroke="url(#paint2_linear_1_44)"/>
        <circle cx="172" cy="172" r="110.5" stroke="url(#paint3_linear_1_44)"/>
        <circle cx="172" cy="172" r="79.5" stroke="url(#paint4_linear_1_44)"/>
        <defs>
        <linearGradient id="paint0_linear_1_44" x1="168.5" y1="245" x2="168.5" y2="119" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9D0D3D" stop-opacity="0"/>
        <stop offset="0.54096" stop-color="#DF512B" stop-opacity="0.76"/>
        <stop offset="1" stop-color="#BF8C2C"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_44" x1="172" y1="0" x2="172" y2="344" gradientUnits="userSpaceOnUse">
        <stop stop-color="#CE722C"/>
        <stop offset="1" stop-color="#5E181A" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1_44" x1="172" y1="33" x2="172" y2="311" gradientUnits="userSpaceOnUse">
        <stop stop-color="#CE722C"/>
        <stop offset="1" stop-color="#5E181A" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint3_linear_1_44" x1="172" y1="61" x2="172" y2="283" gradientUnits="userSpaceOnUse">
        <stop stop-color="#CE722C"/>
        <stop offset="1" stop-color="#471514" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint4_linear_1_44" x1="172" y1="92" x2="172" y2="252" gradientUnits="userSpaceOnUse">
        <stop stop-color="#CE722C"/>
        <stop offset="1" stop-color="#5E181A" stop-opacity="0"/>
        </linearGradient>
        </defs>
        </svg>
        <svg width="54" height="58" viewBox="0 0 54 58" fill="none" xmlns="http://www.w3.org/2000/svg" classname={style.svg2}>
        <path d="M53.6667 48.3333H0.333334V43H3V24.416C3 11.1147 13.7467 0.333334 27 0.333334C40.2533 0.333334 51 11.1147 51 24.416V43H53.6667V48.3333ZM8.33333 43H45.6667V24.416C45.6667 14.0613 37.3093 5.66667 27 5.66667C16.6907 5.66667 8.33333 14.0613 8.33333 24.416V43ZM20.3333 51H33.6667C33.6667 52.7681 32.9643 54.4638 31.714 55.714C30.4638 56.9643 28.7681 57.6667 27 57.6667C25.2319 57.6667 23.5362 56.9643 22.286 55.714C21.0357 54.4638 20.3333 52.7681 20.3333 51Z" fill="url(#paint0_linear_1_54)"/>
        <defs>
        <linearGradient id="paint0_linear_1_54" x1="-9.16162" y1="33.0234" x2="59.5253" y2="33.0234" gradientUnits="userSpaceOnUse">
        <stop stop-color="#CE722C"/>
        <stop offset="0.54096" stop-color="white"/>
        <stop offset="1" stop-color="#CE722C"/>
        </linearGradient>
        </defs>
        </svg> 

        {/* <Image src={style3} classname ={style.svg2}></Image> */}
        </div>
        </div>
          <div >
         <button onClick={sendNotification} className={style.Bu} >Send Notification</button>
         </div>
        </>
    );

};

export default Mainui;