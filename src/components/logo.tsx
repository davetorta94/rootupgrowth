import Image from "next/image";



export const Logo = () => {
  return (
    <>
    {/* LOGO */}
     <div className="hidden md:block animate-fade-up animate-ease-in-out animate-delay-[1500ms]">
          <Image 
          src="/logo.png"
          alt="logo root up growth"
          width={100}
          height={30}
          priority={true}/>
      </div>

    {/* LOGO RESPONSIVE */}
      <div className="block md:hidden animate-fade-up animate-ease-in-out animate-delay-[1500ms]">
          <Image 
          src="/logo.png"
          alt="logo root up growth"
          width={50}
          height={15}
          priority={true}/>
      </div>
    </>
  )
}
