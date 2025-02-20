import React from 'react'
import {Container,Logo} from './index'
import { useNavigate } from 'react-router-dom'

const VideoCard = ({video}) => {

  const navigate = useNavigate();

   const {thumbnail,duration,title,views,createdAt,channel}= video

   const gotoVideo= (event)=>{
     navigate(`/video/${video._id}`);
    //  event.stopPropogation();
  } 

   const gotoChannel= (event)=>{
     navigate(`/${channel?.username}`);
     event.stopPropagation();
   } 

  return (
    video && <Container className='w-76 h-60 rounded cursor-pointer' onClick={gotoVideo} >
    <div className="relative">
      <img src={thumbnail?.url} alt='thumbnail' className=''/>
      <p className='absolute right-2 bottom-2 text-wite bg-black p-0.5 rounded'>{duration}</p>
    </div>
    <div className="flex p-2">
      <div className="my-auto" >
        <Logo src = {channel?.avatar?.url  || "logo.png"} onClick={gotoChannel} />
      </div>
      <div className="pl-3">
        <div className='font-medium text-lg'>{title}</div>
        <div>
          <span className=''>{views} Views | </span>
          <span>{60} minutes ago</span>
        </div>
        <span onClick={gotoChannel}>{channel?.fullname}</span>
      </div>
    </div>
</Container>
  )
}

export default VideoCard