"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { services } from "@/data/data";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Cta } from "@/components/CTA";

export default function ServicesPage() {
  return (
    <>
    
    <section className="w-full py-10 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 }
          }
        }}
        className="max-w-6xl mx-auto px-6 space-y-24"
      >

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center text-6xl md:text-7xl font-bold mb-24 text-[#5a22f5]"
        >
          Nuestros Servicios
        </motion.h1>

        {services.map((service, index) => (
          <motion.section
            key={service.id}
             initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-center gap-10 hover:shadow-2xl hover:rounded-2xl ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Imagen con Parallax suave */}
            <motion.div
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden rounded-2xl shadow-lg group"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileTap={{ scale: 1.12 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={service.img}
                  alt={service.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            </motion.div>

            {/* Texto */}
            <div className="md:w-1/2 space-y-4 px-6">
              <motion.h2 className="text-3xl md:text-4xl font-semibold text-[#5a22f5]"
                          initial={{ opacity: 0, y: -50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, ease: "easeOut" }}>
                {service.name}
              </motion.h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                {service.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-2 mb-4 rounded-full bg-[#5a22f5] text-white font-medium hover:bg-[#7238ff] transition"
              >
                <Link href="/tarifas">
                  Ver más
                </Link>
              </motion.button>
            </div>
          </motion.section>
        ))}
      </motion.div>

      <div className="mt-20">
        <Cta />
      </div>

    </section>
    <Footer />
    </>
  );
}
