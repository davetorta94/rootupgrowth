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

            <Link href={"/"} className="px-4 hover:underline">
                HOME
            </Link>

            <Link href={"/servicios"} className="px-4 hover:underline">
                SERVICIOS
            </Link>

            <Link href={"/cursos"} className="px-4 hover:underline">
                CURSOS
            </Link>

            <Link href={"/tarifas"} className="px-4 hover:underline">
                TARIFAS
            </Link>

            <Link href={"/title"} className="px-4 hover:underline">
                ABOUT US
            </Link>
        </div>

        {/* RESPONSIVE MENU */}
        <div className="block md:hidden px-5">
            <button onClick={HandleOnClick}>MENU</button>
            {
                display ?
                (
                    <div className="flex flex-col">
                        <Link href={"/"} className="px-4 hover:underline">
                            HOME
                        </Link>

                        <Link href={"/servicios"} className="hover:underline" >
                            SERVICIOS
                        </Link>

                        <Link href={"/cursos"} className="hover:underline">
                            CURSOS
                        </Link>

                        <Link href={"/tarifas"} className="hover:underline">
                            TARIFAS
                        </Link>

                        <Link href={"/"} className="hover:underline">
                            ABOUT
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
