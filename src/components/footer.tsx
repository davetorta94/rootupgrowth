import Link from "next/link"


export const Footer = () => {
  return (
    <>
      <footer className="w-full h-auto flex flex-col md:flex-row  bg-amber-50 justify-center md:justify-around">

        <div className="items-center">

            
                <Link href={"/"} className="px-4">
                    Home
                </Link>
            

            
                <Link href={"/"} className="px-4">
                    Home
                </Link>
            

            
                <Link href={"/"} className="px-4">
                    Home
                </Link>
            

            
                <Link href={"/"} className="px-4">
                    Home
                </Link>
            
            
        </div>

      </footer>
    </>
  )
}

