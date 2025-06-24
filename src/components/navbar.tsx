import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="flex">
        <Link href={"/title"} className="px-4">
            SERVICES
        </Link>

        <Link href={"/title"} className="px-4">
            EXPERTISE
        </Link>

        <Link href={"/title"} className="px-4">
            RESULTS
        </Link>

        <Link href={"/title"} className="px-4">
            ABOUT US
        </Link>

        <Link href={"/title"} className="px-4">
            RSS
        </Link>
    </div>
  )
}
