

export const Title = () => {
  return (
    <>
    {/* TITLE */}
      <div className='hidden md:block animate-fade-up animate-ease-in-out animate-delay-[1500ms]'>
            <p className='text-2xl text-[#5a22f5]'>Welcome to</p>
            <h1 className='text-9xl text-[#5a22f5]'>ROOT UP <br /> GROWTH</h1>
      </div>
       
    {/* RESPONSIVE TITLE */}
      <div className='md:hidden block animate-fade-up animate-ease-in-out animate-delay-[1500ms]'>
            <p className='text-xl text-[#5a22f5]'>Welcome to</p>
            <h1 className='text-4xl text-[#5a22f5]'>ROOT UP <br /> GROWTH</h1>
      </div>

    </>
  )
}
