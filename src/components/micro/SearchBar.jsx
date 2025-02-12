import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({
  onEnterPress,
  className='',
  placeholder="Search",
  width=80,
  ...props
  }) => {
  return (
    <div 
    className={`h-10 flex align-center border border-amber-50 border-s-2 bg-transparent rounded-sm w-${width} max-sm:w-40`}>
        <label htmlFor = "search" className='py-2 pl-1 cursor-pointer'>
          <Search 
          className='h-5 pt-1'
          />
        </label>
        <input
            type="text" 
            placeholder={`${placeholder}`} 
            className={`py-2 px-1 m-1 outline-none w-full shrink bg-transparent placeholder-white ${className}`}
            {...props}
            />

    </div>
  )
}

export default SearchBar