import {newsreader} from '@/app/ui/fonts';
import { TypingAnimation } from "@/components/magicui/typing-animation";



export const Cover = () => {
  return (
    <>
          <div className='animate-fade-up animate-ease-in-out animate-delay-[1500ms]'>
                <h1 className={`${newsreader.className} text-8xl text-[#5a22f5]`}></h1>
                <TypingAnimation startOnView duration={100}>Typing Animation</TypingAnimation>

          </div>
           
        </>
  )
}
