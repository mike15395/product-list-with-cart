import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

//order confirmation modal
function Confirm() {
    
const {cartItems} = useContext(CartContext)
let total=0
cartItems.length>0 && cartItems?.map((i)=>(total=total+i.price*i.quantity))
  

  return (
    <article className='absolute top-[20%] left-[30%]  z-1 bg-white w-[40vw] h-fit rounded-2xl'>
        <div className='flex flex-col gap-8 p-10 '>
            <section className='flex flex-col justify-items-start gap-6'>
                <img  src="../../public/assets/images/icon-order-confirmed.svg" alt="icon-order-confirmed" className='w-11 h-11'/>
                <div className='flex flex-col gap-2'>
                    <span className='text-[#260F08] text-4xl font-bold'>Order Confirmed</span>
                    <h6 className='text-[#87635A]'>We hope you enjoy your food!</h6>
                </div>
            </section>
            {cartItems.map((item)=>( <section className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <img src={item?.image?.thumbnail} alt="food-image" className='w-12 h-12 rounded-xl'/>
                    <div className='flex flex-col gap-2'>
                        <span className='text-[#260F08] font-semibold'>{item?.name}</span>
                        <div className='flex flex-row gap-2'>
                            <span className='text-[#C73B0F]'>{item?.quantity}x</span>
                            <span className='text-[#87635A]'>@{item?.price}</span>
                        </div>
                    </div>
                </div>
                <div className='text-[#260F08] text-xl'>${item?.quantity*item?.price}</div>
            </section>))}
           
            <section className='flex justify-between items-center'>
                <span className='text-[#260F08]'>Order Total</span>
                <span className='text-[#260F08] text-4xl font-bold'>${total}</span>
            </section>
            <section>
                <button className='bg-[#C73B0F] rounded-3xl p-3 w-full border-0 text-white cursor-pointer' onClick={()=>window.location.reload()}>Start New Order</button>
            </section>
        </div>
    </article>
  )
}


export default Confirm
