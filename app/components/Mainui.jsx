"use client";
import Image from "next/image";
import React ,{useEffect, useCallback}from "react";
import style from '../style/Main.module.css'
import style2 from '../../public/images/top.png'
import style3 from '../../public/images/circle.png'


const Mainui = () => {
    
    // const sendNotification = () =>{
    //     if ('Notification' in window && Notification.permission === 'granted'){
    //         new Notification('Hello Developers!!',{
    //             body: 'This is your notification messege!!',
               
    //         })

    //     }
    // } ;

    // const requestNotificationPermission = useCallback(() => {
    //     if( 'Notification' in window){
    //         Notification.requestPermission().then(function(permission){
    //             if (permission=== 'granted'){
    //                 console.log('Notification  permission granted!!')
    //                 sendNotification();
    //             }
    //         });
    //     }

    // }, []);

    // useEffect(() => {
    //     if ('Notification' in window ){
    //         requestNotificationPermission();
    //     }
    // },[requestNotificationPermission]);
    const sendNotification = () => {
        if ('serviceWorker' in navigator) {
            // Register service worker
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
                    // Fallback to standard notification if service worker registration fails
                    if ('Notification' in window && Notification.permission === 'granted') {
                        new Notification('Hello Developers!!', {
                            body: 'This is your notification message!!'
                        });
                    }
                });
        } else if ('Notification' in window && Notification.permission === 'granted') {
            // Fallback to standard notification if service workers are not supported
            new Notification('Hello Developers!!', {
                body: 'This is your notification message!!'
            });
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
    
    useEffect(() => {
        if ('Notification' in window) {
            requestNotificationPermission();
        } else {
            console.log('Browser does not support notifications');
        }
    }, [requestNotificationPermission]);
    


    
   


    return (
        <>
        <div className={style.Main}>
        <Image src={style2} width={300} height={40}/>
        <h1 className={style.H1}>lorem ipsum...</h1>
        <h2 className={style.H2}>Lorem ipsum dolor sit amet.</h2>
        <Image src={style3} width={300} height={290} style={{ marginTop: '40px' }} />

        <button onClick={sendNotification} className={style.Bu}>Send Notification</button>
        </div>
        </>
    );
};

export default Mainui;
