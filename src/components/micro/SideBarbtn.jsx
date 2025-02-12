import React from 'react'

const SideBarbtn = ({text = '' ,icon,toggle=false}) => {
  return (
    <>
        <div className='flex gap-2 px-3 py-1.5 border-1 border-white rounded-sm w-full font-medium hover:text-black hover:bg-[#ae7aff] active:border-[#ae7aff] transition-all duration-100 ease-in-out'>
            <div>{icon}</div>
            <div className={`${!toggle?'max-md:sm:hidden':''}`}>
                {text}
            </div>
        </div>
    </>
  )
}

export default SideBarbtn