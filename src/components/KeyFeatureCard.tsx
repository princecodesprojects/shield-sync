import React from 'react'
import Image from 'next/image'
interface Pro{
    logo:string
    heading:string
    para:string
    size:string
}
const KeyFeatureCard = ({logo,heading,para,size}:Pro) => {
  return (
    <div className='border bg-white w-[80%] md:w-[28%] md:h-[20vh]'>
      <div className="logo  flex justify-center mx-auto w-10 mt-3">
        <Image
        src={logo}
        width={25}
        height={10}
        alt='logo'
        className={size}
        />
      </div>
      <div className="text flex flex-col pl-3 py-3 md:pl-3 ">
        <h1 className=' text-[#0F0E47] text-xl font-medium'>{heading}</h1>
        <p className='text-[#4B5563]'>{para}</p>
      </div>
    </div>
  )
}

export default KeyFeatureCard
