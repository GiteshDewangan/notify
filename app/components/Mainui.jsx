"use client";
import Image from "next/image";
import React ,{useEffect, useCallback}from "react";
import style from '../style/Main.module.css'
import style2 from '../../public/images/top.png'
import style3 from '../../public/images/circle.png'


const Mainui = () => {
    
    const sendNotification = () =>{
        if ('Notification' in window && Notification.permission === 'granted'){
            new Notification('Hello Developers!!',{
                body: 'This is your notification messege!!',
               
            })

        }
    } ;

    const requestNotificationPermission = useCallback(() => {
        if( 'Notification' in window){
            Notification.requestPermission().then(function(permission){
                if (permission=== 'granted'){
                    console.log('Notification  permission granted!!')
                    sendNotification();
                }
            });
        }

    }, []);

    useEffect(() => {
        if ('Notification' in window ){
            requestNotificationPermission();
        }
    },[requestNotificationPermission]);




    return (
        <>
        <div className={style.Main}>
        <Image src={style2} width={300} height={50}/>
        <h1 className={style.H1}>lorem epsum...</h1>
        <h2 className={style.H2}>Lorem ipsum dolor sit amet.</h2>
        <Image src={style3} width={300} height={300} style={{ marginTop: '40px' }} />

        <button onClick={sendNotification} className={style.Bu}>Send Notification</button>
        </div>
        </>
    );
};

export default Mainui;
