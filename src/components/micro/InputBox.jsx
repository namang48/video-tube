import React from 'react'

const InputBox = ({
    type='text',
    name="",
    id="",
    placeholder='Enter Text',
    className='',
    ...props
}) => {
  return (
    <div>
        <input 
            type={type}
            placeholder={`${placeholder}`} 
            className={`py-1.5 px-2 m-1 border-2 border-amber-50 rounded-xl outline-none w-full shrink bg-transparent placeholder-white ${className}`}
            {...props}
            />

    </div>
  )
}

export default InputBox