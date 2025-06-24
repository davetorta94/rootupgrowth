import Image from "next/image";



export const Logo = () => {
  return (
    <div className="animate-fade-up animate-ease-in-out animate-delay-[1500ms]">
          <Image 
          src="/logo.png"
          alt="logo root up growth"
          width={150}
          height={60}
          priority={true}/>
      </div>
  )
}
