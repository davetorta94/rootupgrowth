import { Cover } from "@/components/cover";
import { Leaf } from "@/components/leaf";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { Title } from "@/components/title";

export default function Home() {
  return (
  <>
    <header className="flex justify-between w-full h-50">

      <Leaf />
      <Navbar />
      <Logo />

    </header>

    <section className="flex justify-center w-full h-200">
      
      <Title />

    </section>

    <section className="flex justify-center w-full h-100">
      
      <Cover />

    </section>

  </>
  );
}
