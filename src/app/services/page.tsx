"use client"

import { motion } from "motion/react"; 
import { services } from "@/data/data"
import { Footer } from "@/components/footer";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextReveal } from "@/components/magicui/text-reveal";




export default function ServiceHomePage() {
  return (
    <>

    <section className="border shadow-black-2xl mt-10">

    
     <div className="flex flex-col justify-center w-[100%] h-auto">
     
        {services.map(({ id, name, description }) => (

        
            <div className="w-[100%] h-auto flex justify-center my-5 border-b-4 border-gray" key={id}
                        >

                <div className="flex flex-col md:text-start text-center">
                  <motion.div className="text-4xl p-10"
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 2, ease: "easeOut" }}>
                    {name}
                  </motion.div>
                  <div className="font-medium text-center">
                  <TextReveal>{description}</TextReveal>
                  </div>
                </div>

            </div>
        ))}

     </div>

     </section>

     <Footer />
    </>
  )
}