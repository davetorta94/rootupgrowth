import { TiktokNumberTicker } from "./tiktoknumberticker"

export const VideoSample = () => {
  return (
    <>

      <div className="flex flex-col md:flex-row justify-center align-middle md:justify-evenly bg-[#5a22f5] shadow-2xl">

            <div>
              <TiktokNumberTicker />
            </div>
    
            <div className="video-container mt-4 mb-4 h-full">
                <span className="video-top-border" />

                <video className='video' width="320" height="592" autoPlay muted loop >
                    <source src={'https://p0czmulpqym8d3xv.public.blob.vercel-storage.com/videotiktok.mp4'} type="video/mp4"/>
                </video>

                <span className="video-right-border video-top" />
           </div>
      
     </div>

    </>
  )
}

