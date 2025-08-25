"use client"

import { useState } from "react";
import { abonos } from "@/data/data";




export const Services = () => {

  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-amber-50 min-h-screen py-16 px-4">
      <div className="text-center mb-12 max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5a22f5] mb-2">
          Servicios para hacer crecer tu marca
        </h2>
        <p className="text-gray-700">
          Explora y descubre cómo podemos acompañarte en tu crecimiento digital.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {abonos.map(({ id, name, description }) => (
          <div
            key={id}
            className="bg-white border border-amber-100 rounded-2xl shadow-md overflow-hidden"
          >
            {/* Header clickable */}
            <button
              onClick={() => toggle(id)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-[#5a22f5] hover:bg-amber-100 transition"
            >
              {name}
              <span className="text-[#5a22f5]">
                {openId === id ? "−" : "+"}
              </span>
            </button>

            {/* Descripción con animación acordeón */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openId === id ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-4 text-gray-700">
                {description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

}

