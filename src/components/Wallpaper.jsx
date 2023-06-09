import React, {useEffect} from 'react';
import fateWalpaper from '../assets/fate.mp4';
import Main from './Main';

function Wallpaper() {

  return (
    <div className='laptop:min-w-full w-custom inset-1/2 tablet:translate-x-center h-auto relative z-0'>
        <video className='w-full h-auto' autoPlay muted loop playsInline >
        <source src={fateWalpaper} type="video/mp4" />
        </video>
        <Main />
    </div>
  )
}

export default Wallpaper;