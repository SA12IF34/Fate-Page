import React from 'react';
import fate from '../assets/fate.jpg';

function Header() {
  return (
    <header className='w-full h-24 backdrop-blur-sm flex justify-between items-center p-2 z-10 !absolute'>
        <button>
            <img src={fate} alt="fate logo" className='w-24 min-w-24 h-auto' />
        </button>
        <ul className='w-auto h-auto tablet:text-sm list-none capitalize flex flex-wrap justify-evenly'>
            <li className='mx-2.5 my-1 break-keep cursor-pointer'>seasons & watch order</li>
            <li className='mx-2.5 my-1 break-keep cursor-pointer'>characters</li>
            <li className='mx-2.5 my-1 break-keep cursor-pointer'>definition</li>
            <li className='mx-2.5 my-1 break-keep cursor-pointer'>similar animes</li>
        </ul>
    </header>
  )
}

export default Header;