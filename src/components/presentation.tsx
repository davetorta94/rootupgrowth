import Image from "next/image";
import  arrow  from "../../public/arrow.png"





export const Presentation = () => {
  return (
    <>
    <section className="md:flex justify-center px-3.5 sm:mb-68 sm:h-20 hidden">
      <div>
        <Image src={arrow} width={540} height={540} alt="flecha decorativa" className="p-0 m-0"/>
      </div>
    </section>
    </>
  )
}


