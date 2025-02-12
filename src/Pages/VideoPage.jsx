import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container,Header, Sidebar } from "../components";
import axios from "axios";

const VideoPage = () => {
  const {id} = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios.get(`/api/v1/videos/${id}`)
    .then((res) => {
      setVideo(res.data.data);
    })
    .catch(err=>console.log(err))
  }, []);
  return(
  <>  
    <Header />
    <div className="flex">
      <Sidebar className='max-w-16 overflow-hidden'/>
      <Container className=''>
    
    <div className="p-2">
        <video src={video?.videoFile.url} controls></video>
    </div>    
    <div></div>    
  </Container>
    </div>
  </>
  )
};

export default VideoPage;
