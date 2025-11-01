import { Card } from "./card";
import { ScrollVelocityContainer, ScrollVelocityRow, } from "./magicui/scroll-based-velocity";




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

  <div className="flex justify-center gap-6 max-w-6xl mx-auto">
      <ScrollVelocityContainer className="text-4xl font-bold md:text-7xl">
  <ScrollVelocityRow baseVelocity={3} direction={1}>
    <Card />
  </ScrollVelocityRow>
  <ScrollVelocityRow baseVelocity={3} direction={-1}>
    <Card />
  </ScrollVelocityRow>
</ScrollVelocityContainer>
  </div>

</section>
  );

}

