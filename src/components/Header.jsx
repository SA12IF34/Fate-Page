import React, {useEffect} from 'react';
import fate from '../assets/fate.jpg';

function Header() {
  let num = 0;
  useEffect(() => {
    if (num < 1) {
      let header = document.querySelector("header");
      let height = 0;
      window.addEventListener('scroll', () => {
        if (window.scrollY > height) {
          header.style.cssText = 'transform: translateY(-100%);';
        } else if (window.scrollY < height) {
          header.style.cssText = 'transform: translateY(0%);';
        }
        height = window.scrollY;
          
      });

      num=1;
    }
  }, [])

  return (
    <header className='w-full h-24 backdrop-blur-sm flex justify-between items-center p-2 transition-300 fixed z-50'>
        <button>
            <img src={fate} alt="fate logo" className='w-24 min-w-24 h-auto' />
        </button>
        <ul className='w-auto h-auto tablet:text-sm list-none capitalize flex flex-wrap justify-evenly'>
            <li className='mx-2.5 my-1 break-keep cursor-pointer'>
              <a href="#definition">
              definition
              </a>
            </li>
            <li className='mx-2.5 my-1 break-keep cursor-pointer'>
              <a href="#seasons">
              seasons & watch order
              </a>
            </li>
            <li className='mx-2.5 my-1 break-keep cursor-pointer'>
              <a href="#characters">
              characters
              </a>
            </li>
            <li className='mx-2.5 my-1 break-keep cursor-pointer'>
              <a href="#similar">
              similar animes
              </a>
            </li>
        </ul>
    </header>
  )
}

export default Header;