import React, { useState } from 'react'
import SideBarbtn from '../../micro/SideBarbtn.jsx'
import {
  House,
  ThumbsUp,
  History,
  Video,
  FolderClosed,
  UserRoundCheck,
  Settings,
  CircleHelp,} from '../../icons/icon.js'
import {SubmitBtn,SecondaryBtn} from '../../index.js'

const Sidebar = ({
  className='',
  toggle
}) => {
  const [isHover,setIsHover] = useState(false);
  const setHover = ()=>{
    setIsHover(!isHover);
  }

  return (
    <>
      <div className={`flex min-w-60 py-2 flex-col h-[90vh] justify-between px-2 overflow-hidden duration-200 max-md:sm:min-w-16 sm:left-0 sm: border-r-2 ${toggle?'right-0 border-l-2':'-right-60'} max-sm:z-10 max-sm:bg-[#232621]`}
      // onMouseEnter={(event)=>{
      //   if(event.target.contains())
      // }}
      >
        <div className="flex flex-col  gap-2">
            {!toggle && <SideBarbtn text='Home' icon={<House/>} />}
            <SideBarbtn text='Liked videos' icon={<ThumbsUp/>} />
            <SideBarbtn text='History' icon={<History/>}/>
            <SideBarbtn text='My Content' icon={<Video/>}/>
            {!toggle &&<SideBarbtn text='Collections' icon={<FolderClosed/>}/>}
            {!toggle &&<SideBarbtn text='Subscribers' icon={<UserRoundCheck/>}/>}
            {toggle && <SideBarbtn text='Support' icon={<CircleHelp/>}/>}
            {toggle &&<SideBarbtn text='Settings' icon={<Settings/>}/>}
        </div>
        <div className="flex flex-col gap-2">
            
        {!toggle && <SideBarbtn text='Support' icon={<CircleHelp/>}/>}
        {!toggle &&<SideBarbtn text='Settings' icon={<Settings/>}/>}
        {toggle && <SecondaryBtn text="Log in"/> }
        {toggle && <SubmitBtn text='Sign up' className='mb-2'/>}
        </div>
      </div>
    </>
  )
}

export default Sidebar