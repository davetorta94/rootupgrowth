import { About } from '@/components/about';
import './styles.css';
import { Cta } from "@/components/CTA";
import { Presentation } from "@/components/presentation";
//import { Services } from '@/components/services';
import { Title } from "@/components/title";
import { VideoSample } from '@/components/video-sample';
import { Footer } from '@/components/footer';
import { Services } from '@/components/services';

export default function Home() {
  return (
  <>

    <section className="flex justify-center w-full h-100">
      
      <Title />

    </section>

    <section className="flex flex-col w-full h-100">
      
      <Presentation/>

     {/* <Services /> */}

      <About />

    
      <VideoSample />

      <Services />
    

      <Cta />

      <Footer />
      

    </section>

  </>
  );
}
