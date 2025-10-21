import { About } from '@/components/about';
import './styles.css';
import { Cta } from "@/components/CTA";
import { Presentation } from "@/components/presentation";
//import { Services } from '@/components/services';
import { Title } from "@/components/title";
import { VideoSample } from '@/components/video-sample';

export default function Home() {
  return (
  <>

    <section className="flex justify-center w-full h-100 sm:h-100">
      
      <Title />

    </section>

    <section className="flex flex-col justify-center w-full h-100">
      
      <Presentation/>

     {/* <Services /> */}

      <About />

    <div className='flex justify-center'>
      <VideoSample />
    </div>

      <Cta />
      

    </section>

  </>
  );
}
