import React from 'react'
import emptyCart from "../assets/images/illustration-empty-cart.svg"

function Cart() {
  return (
    <div className='flex flex-col justify-items-start items-start gap-6'>
        <div className='text-[#C73B0F] font-bold text-2xl'>Your Cart (0)</div>
        <div className='flex flex-col justify-center items-center'>
            <img src={emptyCart} alt="empty-cart-icon" className='w-[128px] h-[128px]'/>
            <p className='text-[#87635A]'>Your added items will appear here</p>
        </div>
    </div>
  )
}

export default Cart