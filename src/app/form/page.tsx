"use client"

import { Leaf } from "@/components/leaf";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import  { FormComponent }  from "@/components/formComponent";

export default function Form() {
  return (
    <>
            <header className="flex justify-between w-full h-50">
        
              <Leaf />
              <Navbar />
              <Logo />
        
            </header>

            <section className="flex justify-center w-full h-200">
                  
                <FormComponent />     
            
            </section>
    </>
  )
}
