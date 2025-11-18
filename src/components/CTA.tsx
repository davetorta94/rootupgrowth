import Link from "next/link"


export const Cta = () => {
  return (
    <>
        <div className="flex justify-center my-2.5">
            <button className="border-dashed rounded-xl border-2 border-amber-600 p-6 hover:bg-amber-600 hover:text-white min-h-11 px-6 py-3">
              <Link href='/form'>
                ¿Te unes al vivero?
              </Link>
            </button>
        </div>
    </>
  )
}
