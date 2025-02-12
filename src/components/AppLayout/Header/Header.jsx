import React from 'react'
import {Logo, SearchBar} from '../../index'
import { AlignRight } from 'lucide-react'

const Header = ({
  sidebarSetter
}) => {
  return (
    <>
      <div
      className='flex w-[100vw] h-[10vh] border-b-1 justify-between items-center'
      >
        <div className='pl-4'>
          <Logo src='/logo.png' className='w-16'/>
        </div>
        <div >
          <SearchBar/>
        </div>
        <div className='px-3 sm:hidden cursor-pointer' onClick={sidebarSetter}>
          <AlignRight />
        </div>
        <div className='pr-4 max-sm:hidden'>
          <Logo src='/avatar.jpg' />
        </div>

      </div>
    </>
  )
}

export default Header