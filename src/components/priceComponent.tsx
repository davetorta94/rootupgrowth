import React from 'react';
import { brands } from '@/data/data';

export const PriceComponent = () => {
  return (
   <>
    <div className='flex-wrap flex flex-row justify-center gap-8 my-20 animate-fade-up animate-ease-in-out animate-delay-[1500ms]'>
      {
        brands.map((brand) => (
          <div key={brand.id} className='w-26'>
            <img src={brand.img} alt={brand.img} />
          </div>
        ))
      }
    </div>
   </>
  )
}