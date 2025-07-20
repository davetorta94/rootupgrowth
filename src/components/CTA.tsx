import Link from "next/link"


export const Cta = () => {
  return (
    <>
        <div className="flex justify-center mb-2.5">
            <button className="border-dashed rounded-xl border-2 border-amber-600 p-3 hover:bg-amber-600 hover:text-white">
              <Link href='/form'>
                Join
              </Link>
            </button>
        </div>
    </>
  )
}
