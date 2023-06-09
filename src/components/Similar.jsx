import React from 'react';
import aot from '../assets/aot.jpg';
import monogatari from '../assets/monogatari.jpg';
import vinlandSaga from '../assets/vinlandSaga.jpg';
import codeGeass from '../assets/codeGeass.jpg';
import jojo from '../assets/jojo.jpg';
import fullmetal from '../assets/fullmetal.jpg';

function Similar() {
  return (
    <div className='w-full h-auto bg-gradient-2 tablet-m:px-24 tablet:px-10 pt-12 pb-32'>
        <h2 className='text-3xl'>
            Similar anime recommendations
        </h2>
        <br />
        <div className='w-max h-max ml-3'>   
            <u className=' w-full h-max list-none flex flex-wrap justify-evenly'>
                <li className='w-36 h-48 border-2 border-solid border-white m-4 relative'>
                    <img src={aot} alt="attack on titan recommendation" className='absolute w-full h-full' />
                    <span className='absolute top-full minus-left w-36 h-max p-1 text-center bg-white text-black text-sm'>
                        Attack On Titan
                    </span>
                </li>
                <li className='w-36 h-48 border-2 border-solid border-white m-4 relative'>
                    <img src={monogatari} alt="monogatari series recommedation" className='absolute w-full h-full' />
                    <span className='absolute top-full minus-left w-36 h-max p-1 text-center bg-white text-black text-sm'>
                        Monogatari Series
                    </span>
                </li>
                <li className='w-36 h-48 border-2 border-solid border-white m-4 relative'>
                    <img src={vinlandSaga} alt="vinland saga recommendation" className='absolute w-full h-full' />
                    <span className='absolute top-full minus-left w-36 h-max p-1 text-center bg-white text-black text-sm'>
                        Vinland Saga
                    </span>
                </li>
                <li className='w-36 h-48 border-2 border-solid border-white m-4 relative'>
                    <img src={codeGeass} alt="code geass recommendation" className='absolute w-full h-full' />
                    <span className='absolute top-full minus-left w-36 h-max p-1 text-center bg-white text-black text-sm'>
                        Code Geass
                    </span>
                </li>
                <li className='w-36 h-48 border-2 border-solid border-white m-4 relative'>
                    <img src={jojo} alt="jojo recommendation" className='absolute w-full h-full' />
                    <span className='absolute top-full minus-left w-36 h-max p-1 text-center bg-white text-black text-sm'>
                        Jojo
                    </span>
                </li>
                <li className='w-36 h-48 border-2 border-solid border-white m-4 relative'>
                    <img src={fullmetal} alt="fullmetal alchemist recommendation" className='absolute w-full h-full' />
                    <span className='absolute top-full minus-left w-36 h-max p-1 text-center bg-white text-black text-sm'>
                        Fullmetal Alchemist: Brotherhood
                    </span>
                </li>
            </u>
        </div>
    </div>
  )
}

export default Similar;