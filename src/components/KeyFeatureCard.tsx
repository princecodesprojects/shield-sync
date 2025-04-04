import React from 'react'
import Image from 'next/image'

interface Props {
    logo: string
    heading: string
    para: string
    size: string
}

const KeyFeatureCard = ({logo, heading, para, size}: Props) => {
  return (
    <div className='bg-white rounded-lg shadow-sm transition-all duration-300
      w-[90%] sm:w-[85%] md:w-[54%] lg:w-[36%] xl:w-[34%]
      min-h-[160px] sm:min-h-[196px] md:min-h-[210px] lg:min-h-[224px]
      p-2 sm:p-3 md:p-4
      flex flex-col items-center gap-0
      hover:shadow-md'>
      
      <div className="flex pt-10 justify-center items-center
        w-10 sm:w-12 md:w-14 lg:w-16
        h-10 sm:h-12 md:h-10 lg:h-12
        mx-auto -mt-2 sm:-mt-2.5 md:-mt-3">
        <Image
          src={logo}
          width={28}
          height={28}
          alt={`${heading} icon`}
          className={`${size} transition-transform duration-300 hover:scale-110`}
        />
      </div>
      
      <div className="space-y-0 text-center flex-grow flex flex-col justify-center -mt-2">
        <h2 className='text-[#0F0E47] 
          text-base sm:text-lg md:text-xl lg:text-2xl
          font-medium tracking-tight -mt-3'>
          {heading}
        </h2>
        <p className='text-[#4B5563] 
          text-xs sm:text-sm md:text-base
          leading-relaxed
          max-w-[90%] mx-auto -mt-1'>
          {para}
        </p>
      </div>
    </div>
  )
}

export default KeyFeatureCard
