import React from 'react'
import {Container,Logo} from './index'

const VideoCard = ({video}) => {

   const {thumbnail,duration,title,views,createdAt,channel}= video

  return (
    video && <Container className='w-76 h-60 rounded'>
    <div className="relative">
      <img src={thumbnail?.url} alt='thumbnail' className=''/>
      <p className='absolute right-2 bottom-2 text-wite bg-black p-0.5 rounded'>{duration}</p>
    </div>
    <div className="flex p-2">
      <div className="my-auto">
        <Logo src = {channel?.avatar?.url  || "logo.png"} />
      </div>
      <div className="pl-3">
        <div className='font-medium text-lg'>{title}</div>
        <div>
          <span className=''>{views} Views | </span>
          <span>{60} minutes ago</span>
        </div>
        <span>{channel?.fullname}</span>
      </div>
    </div>
</Container>
  )
}

export default VideoCard