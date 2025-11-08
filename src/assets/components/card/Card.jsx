import React from 'react'

export default function Card({image, header, price}) {
  return (
    <div className='flex w-40 h-[257px] pb-13 flex-col items-start'>
      <img src={image} alt="" />
      <p className='font-inter text-[12px] font-medium leading-3 text-left'>{header}</p>
      <p className='font-inter text-[14px] font-semibold leading-5 text-left'>{price}</p>
      <button className='rounded-2xl border-{1px} border-{#FF5722} border-solid'>+ Keranjang</button>
    </div>
  )
}

