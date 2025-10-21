
export const VideoSample = () => {
  return (
    <>

    
            <div className="video-container">
            <span className="video-top-border" />
     
            <video className='video' width="320" height="592" autoPlay muted loop >
                <source src={'https://p0czmulpqym8d3xv.public.blob.vercel-storage.com/videotiktok.mp4'} type="video/mp4"/>
            </video>
     
            <span className="video-right-border video-top" />
        </div>
    
    </>
  )
}

