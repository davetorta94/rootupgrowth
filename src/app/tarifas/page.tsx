"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { tarifas } from "@/data/data";
import { Footer } from "@/components/footer";
import { TextAnimate } from "@/components/magicui/text-animate";
import Link from "next/link";

export default function TarifasGrid() {
  return (
    <>
    <section className="w-full py-28">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-center text-6xl md:text-7xl font-bold mb-24 text-[#5a22f5]">
          Tarifas y Planes 🌿
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {tarifas.map(({ id, name, description, img }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white border border-green-100 shadow-lg rounded-3xl p-10 w-full sm:w-[48%] lg:w-[30%] 
                         flex flex-col justify-between hover:shadow-2xl hover:border-green-300 transition-all"
            >
               <Image
                src={img}
                alt={name}
                width={300}
                height={200}
                className="rounded-2xl mb-6 object-cover w-full h-64"
              /> 

              <div className="text-3xl md:text-4xl font-semibold text-[#5a22f5] mb-4 text-center">
                <TextAnimate animation="slideUp" by="word">
                  {name}
                </TextAnimate>
              </div>

              <div className="text-gray-700 text-lg leading-relaxed text-center">
                <TextAnimate animation="slideUp" by="word">
                  {description}
                </TextAnimate>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mt-8 mx-auto bg-[#5a22f5] text-white font-medium px-8 py-3 rounded-full 
                           shadow-md hover:shadow-lg hover:bg-[#4a18d5] transition-all"
              >
                <Link href={"/form"}>
                  ¡La quiero!
                </Link>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
