import { Highlighter } from "./magicui/highlighter"
import { NumberTicker } from "./magicui/number-ticker"
import { TypingAnimation } from "./magicui/typing-animation"


export function TiktokNumberTicker() {
  return (
    <>
    
    <div className="flex flex-col pt-20 items-center">

     <NumberTicker
      value={3325}
      className="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-amber-50 text-center"
      />

     <TypingAnimation className="text-amber-50 text-center text-2xl">FOLLOWERS EN MENOS DE UN AÑO</TypingAnimation>

    <div className="animate-fade-up animate-ease-in-out animate-delay-[1500ms] pt-2 text-center items-middle text-2xl">
        <Highlighter>Y CRECIENDO...</Highlighter>
    </div>

    </div>
    </>
  )
}
