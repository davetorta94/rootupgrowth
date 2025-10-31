import Image from "next/image";


export const Leaf = () => {
  return (
    <div className="relative w-[540px] h-[540px] overflow-hidden animate-fade-right animate-ease-in-out animate-delay-[1000ms]">
      <Image 
        src="/2.png"
        alt="hoja decoración"
        width={1080}
        height={1080}
        priority
        className="-translate-y-1/2"
      />
    </div>
  )
}
