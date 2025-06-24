import {newsreader} from '@/app/ui/fonts';
import Image from 'next/image';


export const Cover = () => {
  return (
    <>
          <div className='animate-fade-up animate-ease-in-out animate-delay-[1500ms]'>
                <h1 className={`${newsreader.className} text-8xl text-[#5a22f5]`}></h1>
                
          </div>
           
        </>
  )
}
