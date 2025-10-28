import Image from "next/image";



export const Logo = () => {
  return (
    <>
    {/* LOGO */}
     <div className="hidden md:block animate-fade-up animate-ease-in-out animate-delay-[1500ms]">
          <Image 
          src="/logo.png"
          alt="logo root up growth"
          width={256}
          height={256}
          priority={true}/>
      </div>

    {/* LOGO RESPONSIVE */}
      <div className="block md:hidden animate-fade-up animate-ease-in-out animate-delay-[1500ms]">
          <Image 
          src="/logo.png"
          alt="logo root up growth"
          width={128}
          height={128}
          priority={true}/>
      </div>
    </>
  )
}
