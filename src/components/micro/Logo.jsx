import React from 'react'

const Logo = ({
    src='',
    className='',
    ...props
}) => {
  return (
    <div>
        <img 
            src={src} 
            className={`aspect-square  rounded-full w-10 ${className}`}
            alt="" 
            {...props}
            />
    </div>
  )
}

export default Logo