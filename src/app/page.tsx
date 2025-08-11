import './styles.css';
import { Cover } from "@/components/cover";
import { Cta } from "@/components/CTA";
import { Garden } from "@/components/garden";
import { Presentation } from "@/components/presentation";
import { Title } from "@/components/title";

export default function Home() {
  return (
  <>

    <section className="flex justify-center w-full h-200 sm:h-100">
      
      <Title />

    </section>

    <section className="flex flex-col justify-center w-full h-100">
      
      <Presentation/>
      <Cover />
      <Garden />
      <Cta />

    </section>

  </>
  );
}
