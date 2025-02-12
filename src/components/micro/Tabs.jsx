import React from 'react'

const Tabs = ({
    text="Text",
    className="",
    icon,
}) => {
  return (
    <div
    
    >
        {icon &&
        <div
        className='pl-3 pt-2'
            >
            {icon}
        </div>}
        <button
        className={`px-3 py-2 text-center font-medium w-92 flex-1 rounded-md transition-all duration-150 ease-out focus:bg-[#d9ddec] text-white focus:text-[#ae7aff] ${className}`}
        >
            {text}
        </button>
    </div>
  )
}
export default Tabs