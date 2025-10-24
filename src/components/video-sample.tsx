import { TiktokNumberTicker } from "./tiktoknumberticker"

export const VideoSample = () => {
  return (
    <>

      <div className="flex flex-col md:flex-row justify-center items-centre md:justify-evenly shadow-2xl section-pattern">

            <div>
              <TiktokNumberTicker />
            </div>
    
            <div className="flex flex-col items-center justify-center min-h-screen px-4">
              <div className="video-container w-[285px] h-[600px] max-w-full flex flex-col items-center relative">
                <span className="video-top-border" />
                <video className="video" width="320" height="592" autoPlay muted loop>
                  <source src="https://p0czmulpqym8d3xv.public.blob.vercel-storage.com/videotiktok.mp4" type="video/mp4" />
                </video>
                <span className="video-right-border video-top" />
              </div>
            </div>

      
     </div>

    </>
  )
}

