import React from 'react'

const Container = ({children , className='',...props}) => {
  return (
    <div
        className={`w-full max-w-7xl ${className}`}
        {...props}
        >{children}</div>
  )
}

export default Container;