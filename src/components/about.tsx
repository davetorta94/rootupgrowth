"use client"

import { motion } from "motion/react"; 



export const About = () => {
  return (
    <>

    <motion.div className="flex flex-col md:flex-row-reverse md:justify-around py-6 mt-14 md:pt-0 md:mt-2 md:mb-10 h-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}>


        <div className="flex justify-center">

           <img src="/about-me-photo-resized.webp" 
               alt="about me photo"
               width={500}
               height={150}
               className="rounded-2xl" />

        </div>

        <div className="flex justify-center align-text-top">

           <h4 className="text-2xl md:text-3xl md:text-start text-center">¡Hola! <br /> Me llamo Elena. Copywriter y Social Media Manager. <br/> Estoy aquí para ayudarte a alcanzar tus objetivos y crecer junto a tí.</h4>

          
        </div>

        

    </motion.div>
    </>
  )
}


