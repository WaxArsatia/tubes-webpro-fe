import React from 'react'

export default function Card({image, header, price}) {
  return (
    <div className='flex w-40 h-[257px] p-2.5 flex-col justify-evenly rounded-[20px]'>
      <img src={image} alt="" />
      <p className='font-inter text-[12px] font-medium leading-3 text-left'>{header}</p>
      <p className='font-inter text-[14px] font-semibold leading-5 text-left'>{price}</p>
      <a href="#" className='w-full'>
        <div className='border-1 border-solid border-[#FF5722] w-full rounded-2xl text-center'>+ Keranjang</div>
      </a>
    </div>
  )
}

