import React from 'react'
import Image from 'next/image'

interface Props {
    name: string
    profile: string
    about: string
    image: string
}

const CustomerCards = ({name, profile, about, image}: Props) => {
  return (
    <div className='bg-white rounded-xl shadow-sm transition-all duration-300
      w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%]
      p-4 sm:p-5 md:p-6 lg:p-7
      flex flex-col gap-3 sm:gap-4 md:gap-5'>
      
      <div className="profile flex items-center gap-3 sm:gap-4">
        <div className="image-container relative
          w-8 sm:w-10 md:w-12 lg:w-14
          h-8 sm:h-10 md:h-12 lg:h-14">
          <Image 
            src={image}
            alt={`${name}'s profile`}
            fill
            className="rounded-full object-cover"
          />
        </div>
        
        <div className="name-section flex flex-col gap-0.5 sm:gap-1">
          <h2 className='text-[#0F0E47] 
            text-sm sm:text-base md:text-lg lg:text-xl
            font-medium'>
            {name}
          </h2>
          <p className='text-[#4B5563] 
            text-xs sm:text-sm md:text-base
            font-normal'>
            {profile}
          </p>
        </div>
      </div>

      <div className="about">  
        <p className='text-[#4B5563] 
          text-xs sm:text-sm md:text-base lg:text-lg
          leading-relaxed sm:leading-relaxed
          italic'>
          &quot;{about}&quot;
        </p>
      </div>
    </div>
  )
}

export default CustomerCards
