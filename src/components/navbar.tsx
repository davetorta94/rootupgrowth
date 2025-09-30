"use client"

import Link from "next/link"
import { useState } from "react"

export const Navbar = () => {
    const [display, setDisplay] = useState(false);
    const HandleOnClick = () => {
        if (!display) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }
  return (
    <>
        {/* MENU */}
        <div className="hidden md:flex">
            <Link href={"/title"} className="px-4">
                SERVICES
            </Link>

            <Link href={"/cursos"} className="px-4">
                CURSOS
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
        {/* RESPONSIVE MENU */}
        <div className="block md:hidden px-5">
            <button onClick={HandleOnClick}>MENU</button>
            {
                display ?
                (
                    <div className="flex flex-col">
                        <Link href={"/title"} >
                            SERVICIOS
                        </Link>

                        <Link href={"/cursos"} >
                            CURSOS
                        </Link>

                        <Link href={"/title"} >
                            RESULTS
                        </Link>

                        <Link href={"/title"} >
                            ABOUT
                        </Link>

                        <Link href={"/title"} >
                            RSS
                        </Link>
                    </div>
                ) :
                (
                    <></>
                )
            }
        </div>
    </>
  )
}
