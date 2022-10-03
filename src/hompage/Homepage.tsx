import userEvent from '@testing-library/user-event';
import { AnyMxRecord } from 'dns';
import React, { useState, useEffect, useRef } from 'react';
import './home.css';

const Home: React.FC = () => {

    console.log(window.location.href);

    //setLoc()


    //    getPos() : any {
    /* let currentPositionx = window.screenTop;
    let currentPositionY = window.screenLeft;
    let loc = window.location.href; 
  
    console.log('POS TOP', currentPositionx);
    console.log('POS LEFT', currentPositionY);
    console.log('loc', loc); 
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    setLoc(scrolled);
    console.log('scrolled', scrolled)
 
  }

 */

  function scroll(){
    console.log('scrolli');
    const box : any = document.querySelector('.home');
    const rect = box.getBoundingClientRect();

    console.log(rect.right);
    console.log(window.innerWidth);

    const positionX = rect.right;
    const windowWith = window.innerWidth;

    const percentageHome = windowWith-positionX; 
    if(windowWith- positionX < windowWith * 0.45 ){
        console.log('Bin auf Homepage')
    }else if(windowWith- positionX > windowWith * 0.45 && positionX + windowWith > windowWith * 0.55 ){
        console.log('Bin bei Programming')
    }else if(positionX + windowWith < windowWith * 0.55 ){
        console.log('Bin bei Foto')
    }
  }

    useEffect(() => {
       document.addEventListener('wheel', scroll);
    }, []);

   

    return (
        <>
            <div className='outerhomepage' id='outerhomepage'>
                <div className='homepage' id='homepage'>
                    <div className='page home'>
                        hallo

                        <button onClick={scroll}> Moinsen </button>
                    </div>
                    <div className=' page programming'>
                        Prog
                        <button onClick={scroll}> Moinsen </button>
                    </div>
                    <div className='page photography'>
                        Foto
                        <button onClick={scroll}> Moinsen </button>
                    </div>
                </div>
            </div>
            <div className='topBar'> Top Bar </div>
        </>
    );


}
export default Home;
