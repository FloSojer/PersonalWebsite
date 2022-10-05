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
        const box: any = document.querySelector('.home');
        const rect = box.getBoundingClientRect();

        const positionX = rect.right;
        const windowWith = window.innerWidth;

        const percentageHome = windowWith - positionX;
        if (windowWith - positionX < windowWith * 0.05) {
            switchViewToHome();

        } else if (windowWith - positionX > windowWith * 0.95 && positionX + windowWith > windowWith * 0.95) {
            switchViewToProg();

        } else if (positionX + windowWith < windowWith * 0.05) {
            switchViewToPhoto();
        }
    }

    function switchViewToHome(){
        const home: any = document.querySelector('.home');
        home.scrollIntoView({behavior: "smooth"});
        setSelHome(true);
        setSelProg(false);
        setSelPhoto(false);
    }
    function switchViewToPhoto(){
        const photo: any = document.querySelector('.photography');
        photo.scrollIntoView({behavior: "smooth"});
        setSelHome(false);
        setSelProg(false);
        setSelPhoto(true);
    }
    function switchViewToProg(){
        const progr: any = document.querySelector('.programming');
        progr.scrollIntoView({behavior: "smooth"});
        setSelHome(false);
        setSelProg(true);
        setSelPhoto(false);

    }

    useEffect(() => {
        scroll();
        document.addEventListener('wheel', scroll);
    }, []);



    return (
        <>
            <div className='outerhomepage' id='outerhomepage'>
                <div className='homepage' id='homepage'>
                    <div className='page home' id='home' >
                        <h1>
                            Hallo du nudel
                        </h1>
                    </div>
                    <div className=' page programming' id='prog'>
                        <h1>
                            Comming Soon....
                        </h1>
                    </div>
                    <div className='page photography' id='photo'>
                        <h1>
                            Photo Comming soon...
                        </h1>
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
