import React from 'react'

const BtnType1 = ({
    text="",
    className="",
    icon,
}) => {
  return (
    <div
    
    >
        
        <button
        className={` flex justify-center px-3 py-2 font-medium text-black bg-[#ae7aff] rounded-md transition-all duration-150 ease-out active:bg-[#616265] active:text-white active:border-2 ${className}`}
        >
          {icon &&
        <div
        className='pr-3'
            >
            {icon}
        </div>}
            {text}
        </button>
    </div>
  )
}

export default BtnType1