import { Card } from "./card";
import { Marquee } from "./magicui/marquee";




export const Services = () => {

  

  return (
    <section className="bg-amber-50 py-16 px-4">


  <div className="text-center mb-12 max-w-xl mx-auto">
    <h2 className="text-3xl md:text-4xl text-[#5a22f5] mb-2">
      Servicios para crecer
    </h2>
    <p className="text-gray-700">
      Explora y descubre cómo podemos acompañarte en tu crecimiento digital.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
    <Marquee>
      <Card />
    </Marquee>
  </div>

</section>
  );

}

