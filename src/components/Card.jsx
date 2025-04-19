import React from 'react'
// import brownie from "../assets/images/image-brownie-desktop.jpg"
import addToCartIcon from "../assets/images/icon-add-to-cart.svg"

function Card({category,name,price,imgSrc}) {
  return (
    <div className='flex flex-col gap-9'>
        <div className='relative'>
            <img src={imgSrc} alt="image-baklava" className='w-[250px] h-[240px] rounded-2xl' />
            <button className='absolute bottom-[-25px] left-14  bg-white flex flex-row gap-1 pt-2 pb-2 pr-4 pl-4 rounded-4xl cursor-pointer border border-[#AD8A85]'><img src={addToCartIcon} alt="icon-add-to-cart" className='w-5 h-5'  /><span className='text-[#260F08] font-semibold'>Add to Cart</span></button>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='text-[#87635A]'>{category}</span>
            <span className='text-[#260F08] font-bold'>{name}</span>
            <span className='text-[#C73B0F] font-semibold'>${price.toFixed(2)}</span>
        </div>
    </div>
  )
}

export default Card