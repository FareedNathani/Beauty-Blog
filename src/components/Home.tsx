import Image from 'next/image'
import React from 'react';

import fromt from "../../public/front.jpg"
const Homepage = () => {
  return (
    <div className='lg:flex lg:px-40 lg:py-20 px-6 py-6 lg:gap-36 bg-white'>
      <div className='lg:hidden block'>
        <Image src={fromt} alt='js' width={500} height={400} />
      </div>
      <div className=' lg:mt-[90px]' >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myverydarkpink">Makeup Blog <br />Website</h1>
        <p className='text-myverydarkpink leading-7 [&:not(:first-child)]:mt-6 lg:w-[500px]' >
          Welcome to the Ultimate Makeup Hub!
          Your one-stop destination for the latest beauty trends, pro tips, and inspiring tutorials. Whether you're just starting your makeup journey or you're already a beauty guru, we've got you covered with expert advice, honest product reviews, and easy-to-follow guides to help you master every look. Dive into the world of beauty, uncover your unique style, and let your creativity shine with our curated content that’s designed to boost your confidence and elevate your beauty game.
        </p>
      </div>
      <div className='lg:block hidden'>
        <Image src={fromt} alt='js' width={500} height={400} />
      </div>
    </div>


    // return (\bg-gradient-to-br from-pink-200 via-white to-transparent h-screen w-full   

  )
}

export default Homepage
