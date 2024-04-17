"use client";
import Image from "next/image";
import React ,{useEffect, useCallback}from "react";
import style from '../style/Main.module.css'
import style2 from '../../public/images/top.png'
import style3 from '../../public/images/circle.png'



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
        <div className={style.imageContainer} style={{ backgroundColor: 'black', width: '300px', height: '200px', marginTop: '85px' }}>
           <Image src={style3} width={300} height={300} />
        </div>

        <button onClick={sendNotification} className={style.Bu} style={{color: 'white'}}>Send Notification</button>
        </div>
        </>
    );
};

export default Mainui;