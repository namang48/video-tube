import React, { useEffect, useState } from 'react'
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
import { useFetcher } from 'react-router-dom'

const Sidebar = ({
  className='',
  toggle=false,
  small=false
}) => {

  const clicked = (event)=>{
    console.log(event);
    console.log(window);
  }

  
 
  return (
    <>
      <div 
      className={`${toggle?'right-0 border-l-2':'-right-60'} flex max-w-60 py-2 flex-col h-[90vh] justify-between px-2 border-r-2 max-sm:absolute max-sm:z-10 max-sm:bg-[#232621] ${small?'max-w-16':'min-w-60 max-md:sm:min-w-16'} transition-all ease-in-out duration-200`}
      onClick={clicked}
      
      >
        <div className="flex flex-col  gap-2">
            {!toggle && <SideBarbtn text='Home' icon={<House/>} small={small}/>}
            <SideBarbtn text='Liked videos' icon={<ThumbsUp/>} small={small}/>
            <SideBarbtn text='History' icon={<History/>} small={small}/>
            <SideBarbtn text='My Content' icon={<Video/>} small={small}/>
            {!toggle &&<SideBarbtn text='Collections' icon={<FolderClosed/>} small={small} />}
            {!toggle &&<SideBarbtn text='Subscribers' icon={<UserRoundCheck/>} small={small} />}
            {toggle && <SideBarbtn text='Support' icon={<CircleHelp/>} small={small}/>}
            {toggle &&<SideBarbtn text='Settings' icon={<Settings/>} small={small}/>}
        </div>
        <div className="flex flex-col gap-2">
            
        {!toggle && <SideBarbtn text='Support' icon={<CircleHelp/>} small={small}/>}
        {!toggle &&<SideBarbtn text='Settings' icon={<Settings/>} small={small}/>}
        {toggle && <SecondaryBtn text="Log in" small={small}/> }
        {toggle && <SubmitBtn text='Sign up' className='mb-2' small={small}/>}
        </div>
      </div>
    </>
  )
}

export default Sidebar