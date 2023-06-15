import React, {useEffect} from 'react';
import zero from '../assets/seasons/zero.jpg';
import zero2 from '../assets/seasons/zero2.jpg';
import ubw from '../assets/seasons/ubw.jpg';
import ubw2 from '../assets/seasons/ubw2.jpg';
import hf from '../assets/seasons/hf.jpg';

function Seasons() {

    var num = 0;

    useEffect(() => {
        if (num < 1) {
            let container = document.getElementById("container");
            let imgs = document.querySelectorAll("#container>div");
            imgs.forEach(img => {
                img.style.cssText = `height: ${container.offsetHeight / imgs.length}px`;
            });
            num = 1;
        }

    }, [])

  return (
    <div id='seasons' className='w-full h-max relative overflow-hidden'>
        <div className='absolute w-full h-full gradient-custom opacity-60 top-0 left-0 z-20'></div>

        <div id='container' className='absolute w-full h-full flex flex-col top-0 left-0'>
            <div className='w-full overflow-hidden shadow-custom relative'>
                <img src={zero} alt="" className='w-full min-w-custom h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='w-full overflow-hidden shadow-custom relative'>
                <img src={zero2} alt="" className='w-full min-w-custom h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='w-full overflow-hidden shadow-custom relative'>
                <img src={ubw} alt="" className='w-full min-w-custom h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='w-full overflow-hidden relative shadow-custom '>
                <img src={ubw2} alt="" className='w-full min-w-custom h-auto absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='w-full overflow-hidden shadow-custom relative'>
                <img src={hf} alt="" className='w-full !h-max min-w-custom  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>

        </div>
        <div className='w-full h-max px-24 tablet:!px-10 relative z-30'>
            <h1 className='max-w-500 text-2xl relative top-8'>
                Fate series has several routes and side stories, but 
                here we will show the main route watch order
            </h1>
            <br />
            <div className='w-full h-auto flex flex-col items-center mt-10 pb-10'>
                <div className='w-3 h-custom bg-white relative grid grid-rows-4-custom'>

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
                    
                </div>
                <div className='
                w-48 h-48 
                tablet:w-40 tablet:h-40 
                mobile:!w-28 mobile:!h-28 
                bg-transparent 
                rounded-full 
                outline-white mobile:!outline-8 outline-10 outline 
                relative'
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
