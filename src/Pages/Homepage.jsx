import {useEffect, useState} from 'react'
import axios from 'axios'
import { Container, VideoCard } from '../components'

const Homepage = () => {
  const [videos,setVideos] = useState([])

  useEffect(() => {
    axios.get('/api/v1/videos/get-videos')
    .then(res=>{
      console.log(res.data.data);
      setVideos(res.data.data);
    })
    .catch(error=>{
    console.log(error);
    })
  }, []);

  return (
    videos==null 
    ?
    <Container className='p-2 grid grid-cols-3 grid-rows-3 w-full'>
      <h1 className='text-2xl'>Videos Appear Here </h1>
    </Container>

    : <Container className='p-2 grid grid-cols-3 grid-rows-2 w-full'>
      {/* {console.log(videos)} */}
      {videos.map((video)=>(
        <div key={video._id}>
          <VideoCard key={video._id} video={video} />
        </div>
      ))}
    </Container>
  )
}

export default Homepage