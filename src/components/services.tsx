import Link from "next/link";
import { Card } from "./card";
import { ScrollVelocityContainer, ScrollVelocityRow, } from "./magicui/scroll-based-velocity";
import { Slogan } from "./slogan";




export const Services = () => {

  

  return (
    <section className="bg-amber-50 py-16 px-4">


  <div className="text-center mb-12 max-w-xl mx-auto">
    <h4 className="text-3xl md:text-4xl font-bold text-[#5a22f5] mb-2">
      Servicios para crecer
    </h4>
    <Slogan />
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

  <div className="flex justify-center">
    <Link href={"/services"}>
        <button className="info-btn">
          <span className="transition-btn"></span>
          <span className="gradient-btn"></span>
          <span className="label-btn">Más Info</span>
        </button>
    </Link>
  </div>
</section>
  );

}

