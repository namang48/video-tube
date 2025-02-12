import React from 'react'

const SubmitBtn = ({
    text='Sign up',
    icon,
    className='',
}) => {
  return (
    <div
      className={`flex bg-[#ae7aff] font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto
        ${className}`}
      >
        {icon && <div
        className='pl-3 pt-2'
        >
          {icon}
        </div>}
        <button
        className={`mr-1 w-full px-3 py-2 text-center `}
        >
            {text}
        </button>
    </div>
  )
}

export default SubmitBtn