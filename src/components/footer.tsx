"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#fffbf3] text-[#5a22f5] pt-20 pb-12 mt-32 border-t border-[#e8e0ff]">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-16">
        
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Root Up Growth 🌿</h3>
          <p className="text-sm text-[#7c6ad3] leading-relaxed">
            Te ayudamos a hacer crecer tu presencia online con estrategia,
            creatividad y contenido auténtico.
          </p>
        </motion.div>

        {/* Enlaces */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-xl font-semibold mb-4">Enlaces útiles</h4>
          <ul className="space-y-3 text-[#6a58c7]">
            <li>
              <Link href="/servicios" className="hover:text-[#5a22f5] transition-colors">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/tarifas" className="hover:text-[#5a22f5] transition-colors">
                Tarifas y Planes
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Redes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold mb-4">Sígueme</h4>
          <p className="text-[#6a58c7] mb-4">Contenido, consejos y más:</p>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/fridaboserni/" className="hover:text-[#5a22f5]">Instagram</Link>
            <Link href="https://www.tiktok.com/@fridaboserni" className="hover:text-[#5a22f5]">TikTok</Link>
            <Link href="https://www.linkedin.com/in/elenabotana/" className="hover:text-[#5a22f5]">LinkedIn</Link>
          </div>
        </motion.div>

      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-[#e5dbff] text-center text-sm text-[#7c6ad3]">
        © {new Date().getFullYear()} Root Up Growth by Frida Boserni — Todos los derechos reservados.
      </div>
    </footer>
  );
}


