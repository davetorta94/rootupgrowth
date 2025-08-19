import { TypingAnimation } from "@/components/magicui/typing-animation";
import { abonos } from "@/data/data";




export const Services = () => {
  return (
    <>
          <section className="text-center py-16 h-100 w-auto">
              <h2 className='text-8xl text-[#5a22f5]'>
                <TypingAnimation startOnView duration={100}>NUESTROS ABONOS</TypingAnimation>
              </h2>

              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                {abonos.map(({ id, name, description }) => (
                  <div
                    key={id}
                    className="bg-white shadow-lg rounded-2xl p-6 w-full sm:w-[90%] md:w-[280px] hover:shadow-xl transition"
                  >
                    <h4 className="font-semibold text-2xl mb-2">{name}</h4>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                      Contratar
                    </button>
                  </div>
                ))}
              </div>
          </section>
           
        </>
  )
}

