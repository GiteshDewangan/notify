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
            if ('Notification' in window && Notification.permission === 'granted') {
                const notification = new Notification('Hello Developers!!', {
                   body: 'This is your notification message!!'
                });
            // Handling click on notification for mobile devices
                notification.onclick = function () {
                     window.focus(); // Bring the browser window to the foreground
                    notification.close(); // Close the notification
                // Add any action you want to perform when notification is clicked
                // For example, redirect to a specific URL
                // window.location.href = "https://example.com";
                };
            }
        };
    
        const requestNotificationPermission = useCallback(() => {
            if ('Notification' in window) {
                 Notification.requestPermission().then(function (permission) {
                    if (permission === 'granted') {
                    console.log('Notification permission granted!!');
                    sendNotification();
                }
            });
            }
        }, []);
    
    useEffect(() => {
        // Check if browser supports notifications
        if ('Notification' in window) {
            // Check if the device supports notifications (particularly mobile devices)
            if (navigator && navigator.userAgent && /(android|iphone|ipad)/i.test(navigator.userAgent)) {
                // Handle mobile behavior here, maybe show a custom notification
                // Or prompt the user to enable browser notifications
            } else {
                // For desktop, proceed with requesting permission and sending notifications
                requestNotificationPermission();
            }
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
