import React, { useContext } from 'react'
import emptyCart from "../assets/images/illustration-empty-cart.svg"
import deleteIcon from "../assets/images/icon-remove-item.svg"
import carbonNeutralIcon from "../assets/images/icon-carbon-neutral.svg"
import {  CartContext } from '../context/CartContext'

function Cart() {


   const {cartItems,removeFromCart,setIsOpen} =useContext(CartContext)
   let total=0
   cartItems.length>0 && cartItems?.map((i)=>(total=total+i.price*i.quantity))
  
  return (
    <div className='flex flex-col justify-items-start items-start gap-6' >
        <div className='text-[#C73B0F] font-bold text-2xl'>Your Cart ({cartItems?.length})</div>
        <div className='flex flex-col justify-center items-center'>
           {cartItems?.length>0 ? 
            <div id='cart-with-items'>
              {cartItems.map((item)=>(
                
                <div className='flex flex-row gap-32 items-center shadow-xl p-4 rounded-2xl' key={item?.name}>
              <div>
                <span className='text-[#260F08] font-semibold'>{item?.name}</span>
                <div className='flex flex-row gap-4'><span className='text-[#C73B0F]'>{item?.quantity}x</span><span className='text-[#87635A]'>@{item?.price}</span> <span className='text-[#87635A] font-semibold'>${item?.quantity*item?.price}</span></div>
            
              </div>
              <button onClick={()=>removeFromCart(item.name)} className='cursor-pointer border border-[#AD8A85] rounded-full p-1 w-5.5 h-5.5 hover:border-black'><img src={deleteIcon} className='w-3 h-3' alt="delete-icon" /></button>
                </div>
              ))}
            
            <div className='flex flex-row gap-34 mt-6 items-center'><span className='text-[#260F08]'>Order Total</span><span className='text-[#260F08] font-extrabold text-3xl'>${total}</span></div>
            <div className='flex flex-row gap-2 items-center justify-center mt-6'><img src={carbonNeutralIcon} alt="carbon-neutral-icon" /> <p>This is a <b>carbon-neutral</b> delivery</p></div>
            <button className='bg-[#C73B0F] text-white p-4 rounded-4xl border-none w-full mt-6 cursor-pointer'onClick={()=>setIsOpen(true)}>Confirm Order</button>
          </div>
          
            :
             <div id="cart-empty" className='flex flex-col justify-center items-center'>
              <img src={emptyCart} alt="empty-cart-icon" className='w-[128px] h-[128px]'/>
              <p className='text-[#87635A]'>Your added items will appear here</p>
            </div>
          }
        </div>
    </div>
  )
}

export default Cart