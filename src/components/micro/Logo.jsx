import React from 'react'

const Logo = ({
    src='',
    className='',
}) => {
  return (
    <div>
        <img 
            src={src} 
            className={`aspect-square  rounded-full w-10 ${className}`}
            alt="" 
            />
    </div>
  )
}

export default Logo