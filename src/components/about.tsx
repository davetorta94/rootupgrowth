

export const About = () => {
  return (
    <>

    <div className="flex flex-col md:flex-row-reverse md:justify-around pb-4 animate-fade-up animate-ease-in-out animate-delay-[2000ms]">


        <div className="flex justify-center">

           <img src="/about-me-photo.webp" 
               alt="about me photo"
               width={500}
               height={150}
               className="rounded-2xl" />

        </div>

        <div className="flex justify-center">

           <h4 className="text-2xl md:text-3xl text-center">¡Hola! <br /> Me llamo Elena. Copywriter y Social Media Manager. <br/> Estoy aquí para ayudarte a alcanzar tus objetivos y crecer junto a tí.</h4>

        </div>

        

    </div>
    </>
  )
}


