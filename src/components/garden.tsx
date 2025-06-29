import React from 'react'
import { brands } from '@/data/data'

export const Garden = () => {
  return (
   <>
    <div className='flex flex-col md:flex-row justify-center gap-8 my-20'>
      {
        brands.map((brand) => (
          <div key={brand.id}>
            <img src={brand.img} alt={brand.img} />
          </div>
        ))
      }
    </div>
   </>
  )
}
