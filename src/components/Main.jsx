import React from 'react'

function Main() {
  return (
    <div className='w-screen h-full absolute top-0 inset-1/2 translate-x-center flex items-center tablet-m:!px-24 tablet:!px-10'>
        <div>
            <h1 className=' text-4xl tablet:text-3xl  max-w-96 font-bold'>
                welcome to unofficial fate series page
            </h1>
            <br />
            <br />
            <p className=' text-xl mobile:text-base leading-7 tablet-m:max-w-2xl w-5/6'>
            The Fate anime series is an adaptation of Type-Moon's visual novel, Fate/stay night. 
            It tells the story of various events called Holy Grail Wars, 
            which is a ritual where seven magus (the term used for users of magecraft and magic) 
            summon servants (heroic spirits) and fight each other in order to win the Holy Grail.
            </p>
        </div>
    </div>
  )
}

export default Main;