import userEvent from '@testing-library/user-event';
import { AnyMxRecord } from 'dns';
import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import homepic from '../img/background_01.gif';

const Home: React.FC = () => {

    console.log(window.location.href);

    const [selHome, setSelHome] = useState(Boolean);
    const [selProg, setSelProg] = useState(Boolean);
    const [selPhoto, setSelPhoto] = useState(Boolean);

    function scroll() {
        console.log('scrolli');
        const box: any = document.querySelector('.home');
        const rect = box.getBoundingClientRect();

        const home: any = document.querySelector('.home');
        const progr: any = document.querySelector('.programming');
        const photo: any = document.querySelector('.photography');

        console.log(rect.right);
        console.log(window.innerWidth);

        const positionX = rect.right;
        const windowWith = window.innerWidth;

        const percentageHome = windowWith - positionX;
        if (windowWith - positionX < windowWith * 0.05) {
            console.log('Bin auf Homepage');
            home.scrollIntoView();
            setSelHome(true);
            setSelProg(false);
            setSelPhoto(false);
        } else if (windowWith - positionX > windowWith * 0.95 && positionX + windowWith > windowWith * 0.95) {
            console.log('Bin bei Programming');
            progr.scrollIntoView();
            setSelHome(false);
            setSelProg(true);
            setSelPhoto(false);
        } else if (positionX + windowWith < windowWith * 0.05) {
            console.log('Bin bei Foto');
            photo.scrollIntoView();
            setSelHome(false);
            setSelProg(false);
            setSelPhoto(true);
        }
    }

    function switchViewToHome(){
        const home: any = document.querySelector('.home');
        home.scrollIntoView({behavior: "smooth"});

    }
    function switchViewToPhoto(){
        const photo: any = document.querySelector('.photography');
        photo.scrollIntoView({behavior: "smooth"});
    }
    function switchViewToProg(){
        const progr: any = document.querySelector('.programming');
        progr.scrollIntoView({behavior: "smooth"});

    }

    useEffect(() => {
        document.addEventListener('wheel', scroll);
    }, []);



    return (
        <>
            <div className='outerhomepage' id='outerhomepage'>
                <div className='homepage' id='homepage'>
                    <div className='page home' id='home' >

                        hallo
                        <button onClick={scroll}> Moinsen </button>
                    </div>
                    <div className=' page programming' id='prog'>
                        Prog
                        <button onClick={scroll}> Moinsen </button>
                    </div>
                    <div className='page photography' id='photo'>
                        Foto
                        <button onClick={scroll}> Moinsen </button>
                    </div>
                </div>
            </div>
            <ul className='topBar'>
                <li className='lu'> Florian Sojer </li>
                <li id='nbPhoto'><a onClick={switchViewToPhoto}> Photography </a></li>
                <li id='nbProg'><a onClick={switchViewToProg}> Programming </a></li>
                <li id='nbHome'><a onClick={switchViewToHome}> Home </a></li>
            </ul>

        </>
    );


}
export default Home;
