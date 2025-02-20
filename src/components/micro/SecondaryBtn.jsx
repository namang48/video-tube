import React from 'react'

const SecondaryBtn = ({
  text='',
  className="",
  icon,
  ...props

}) => {
  return (
    <div
    className=''
    >
      <div>{icon}</div>
      <button
      className={`px-3 py-2 mr-0.5 font-medium transition-all duration-150 ease-in-out  bg-transparent w-full  hover:bg-[#616265] ${className}`}
      {...props}
      >
        {text}
      </button>
    </div>
  )
}

export default SecondaryBtn