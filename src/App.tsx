import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { getPositionOfLineAndCharacter } from 'typescript';

function App() {

  const [loc, setLoc] = useState(null);
  console.log(window.location.href);

  //setLoc()

  function getPos() : any {
    let currentPositionx = window.screenTop;
    let currentPositionY = window.screenLeft;
    let loc = window.location.href; 
  
    console.log('POS TOP', currentPositionx);
    console.log('POS LEFT', currentPositionY);
    console.log('loc', loc);
  }




  return (
    <>
    
      <div className='outerhomepage'> 
     
          <div className='homepage'>
            <div className='page home'>
              hallo
              <button onClick={getPos}> POS </button>
            </div>
            <div className=' page programming'>
              Prog
              <button onClick={getPos}> POS </button>
            </div>
            <div className='page photography'>
                Foto
                <button onClick={getPos}> POS </button>
            </div>
          </div>
      </div>
      <div className='topBar'> Top Bar </div>
    </>
  );
}

export default App;
