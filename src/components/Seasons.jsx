import React from 'react';
import zero from '../assets/seasons/zero1-2.jpg';
import zero2 from '../assets/seasons/zero2.jpg';
import ubw from '../assets/seasons/ubw.jpg';
import ubw2 from '../assets/seasons/ubw2.jpg';
import hf from '../assets/seasons/hf.jpg';

function Seasons() {
  return (
    <div id='seasons' className='w-full h-max gradient-custom relative'>
        
        <div className='w-full h-max grid grid-rows-4-256 tablet:grid-rows-4-256 relative justify-center pb-0 mb-0'>
            <div className='grid-rows-1-2 overflow-hidden shadow-custom-1'>
            <h1 className='max-w-500 text-2xl top-8 ml-24 absolute z-10'>
            Fate series has several routes and side stories, but 
            here we will show the main route watch order
            </h1>
            <img src={zero} alt="" className='w-full h-auto opacity-70 z-0' />
            </div>
            <div className='grid-rows-3 overflow-hidden shadow-custom-1'>
            <img src={zero2} alt="" className='w-full h-auto opacity-70' />
            </div>
            <div className='grid-rows-4 overflow-hidden shadow-custom-2'>
            <img src={ubw} alt="" className='w-full h-auto opacity-70' />
            </div>
            <div className='grid-rows-5 overflow-hidden relative shadow-custom-2'>
            <img src={ubw2} alt="" className='w-full h-auto opacity-70 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='grid-rows-6 overflow-hidden shadow-custom-3'>
            <img src={hf} alt="" className='w-full h-auto opacity-70' />
            </div>
            
            <div className='w-3 h-custom tablet:h-custom bg-white grid grid-cols-1 grid-rows-4-custom z-10 absolute top-40 left-1/2 -translate-x-1/2 '>

                <div className='w-48 h-48 
                tablet:w-40 tablet:h-40 
                mobile:!w-28 mobile:!h-28 
                bg-transparent 
                rounded-full 
                -translate-x-full-2 
                tablet:-translate-x-full-2-1/2  
                outline-white mobile:!outline-8 outline-10 outline 
                after:content-[""] after:bg-white after:absolute after:top-1/2 after:-translate-y-1/2 after:left-full after:h-3 after:w-full tablet:after:w-1/2' >
                    <h2 className='text-xl tablet:text-base mobile:!text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                        Fate/zero
                    </h2>
                </div>

                <div className='
                w-48 h-48 
                tablet:w-40 tablet:h-40 
                mobile:!w-28 mobile:!h-28 
                bg-transparent 
                rounded-full 
                translate-x-full 
                tablet:translate-x-1/2 
                outline-white mobile:!outline-8 outline-10 outline 
                after:content-[""] after:bg-white after:absolute after:top-1/2 after:-translate-y-1/2 after:right-full after:h-3 after:w-full tablet:after:w-1/2'
                >
                    <h2 className='text-xl tablet:text-base mobile:!text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                        Fate/zero S2
                    </h2>
                </div>
                <div className='
                w-48 h-48 
                tablet:w-40 tablet:h-40 
                mobile:!w-28 mobile:!h-28 
                bg-transparent 
                rounded-full 
                -translate-x-full-2 
                tablet:-translate-x-full-2-1/2 
                outline-white mobile:!outline-8 outline-10 outline 
                after:content-[""] after:bg-white after:absolute after:top-1/2 after:-translate-y-1/2 after:left-full after:h-3 after:w-full tablet:after:w-1/2'
                >
                    <h2 className=' text-xl tablet:text-base mobile:!text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                    Fate/stay night: Unlimited Blade Works
                    </h2>
                </div>
                <div className='
                w-48 h-48 
                tablet:w-40 tablet:h-40 
                mobile:!w-28 mobile:!h-28 
                bg-transparent
                rounded-full 
                translate-x-full 
                tablet:translate-x-1/2 
                outline-white mobile:!outline-8 outline-10 outline 
                after:content-[""] after:bg-white after:absolute after:top-1/2 after:-translate-y-1/2 after:right-full after:h-3 after:w-full tablet:after:w-1/2'
                >
                    <h2 className='text-xl tablet:text-base mobile:!text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                    Fate/stay night: Unlimited Blade Works S2
                    </h2>
                </div>
                <div className='
            w-48 h-48 
            tablet:w-40 tablet:h-40 
            mobile:!w-28 mobile:!h-28 
            bg-transparent 
            rounded-full 
            outline-white mobile:!outline-8 outline-10 outline 
            absolute left-1/2 -translate-x-1/2 top-full'
            >
                <h2 className='text-xl tablet:text-base mobile:!text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                    Fate/stay night: Heaven's Feel 3 Movies
                </h2>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Seasons;
