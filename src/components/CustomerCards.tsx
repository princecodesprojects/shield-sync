import React from 'react'


interface Props{
    name:string
    profile:string
    about:string
    image:string
}

const CustomerCards = ({name,profile,about}:Props) => {
  return (
    <div className='   bg-white w-[90%] h-50 mx-auto px-5 pt-5 pb-8 flex flex-col gap-3 rounded-xl'>
          <div className="profile flex    gap-3">
             <div className="image w-10 bg-gray-400 rounded-[50%] p-5"></div>
             <div className="name">
                <h1 className='text-[#0F0E47]'>{name}</h1>
                <h1 className='text-[#4B5563]'>{profile}</h1>
             </div>
          </div>
          <div className="about   ">  
              <p className='text-[#4B5563]'>&quot;{about}&quot;</p>
          </div>
    </div>
  )
}

export default CustomerCards
