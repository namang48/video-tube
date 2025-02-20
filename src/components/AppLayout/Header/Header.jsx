import React, { useState } from 'react'
import {Logo, SearchBar,Auth, SubmitBtn, SecondaryBtn} from '../../index'
import { AlignRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
 

const Header = ({
  sidebarSetter
}) => {

  const [authbar,setAuthbar] = useState(false)
  const toggleAuthbar =()=>{
    setAuthbar(!authbar);
  }

  const navigate = useNavigate();
  return (
    <>
      <div
      className='flex w-[100vw] h-[10vh] border-b-1 justify-between items-center'
      >
        <div className='pl-8'>
          <Logo src='/logo.png' className='w-16' onClick={()=>{navigate('/')}} />
        </div>
        <div >
          <SearchBar/>
        </div>
        <div className='px-3 sm:hidden cursor-pointer' onClick={sidebarSetter}>
          <AlignRight />
        </div>
        <div className='pr-8 max-sm:hidden'>
          <Logo src='/avatar.jpg' onClick = {toggleAuthbar}/>
          <Auth toggle = {authbar} />
        </div>

      </div>
    </>
  )
}

export default Header