import React, {  useContext, useState } from 'react'
 import addToCartIcon from "../assets/images/icon-add-to-cart.svg"
import incrementIcon from "../assets/images/icon-increment-quantity.svg"
import decrementIcon from "../assets/images/icon-decrement-quantity.svg"
import { CartContext } from '../context/CartContext.jsx'

function Card({category,name,price,imgSrc,obj}) {

  const [toggle,setToggle]= useState(false)
  const [count,setCount]=useState(1)
     const {cartItems,addToCart,removeFromCart}= useContext(CartContext)

  function add(){
    setToggle(true);
    obj.quantity=count
     addToCart(obj)
     console.log(cartItems,"cart items")
  }

  function decrement(){
    if(count<=1){
      setToggle(false);
      removeFromCart(name)
      return
      } 
    setCount(prev=>{
      const newCount = prev -1
      obj.quantity = newCount
      return newCount
    })
    

  }

  function increment(){
    setCount(prev=>{
      const newCount = prev+1
      obj.quantity = newCount
      return newCount
    });

  }

  return (
    <div className='flex flex-col gap-9'>
        <div className='relative '>
            <img src={imgSrc} alt="image-baklava" className='w-[250px] h-[240px] rounded-2xl' />
            
{  toggle ? 
<button className='absolute text-white bottom-[-25px] left-14 flex flex-row items-center gap-6 pt-2 pb-2 pr-4 pl-4 rounded-4xl cursor-pointer bg-[#C73B0F]'><img src={decrementIcon} onClick={decrement} alt="decrement-icon" className='border-2 border-white pt-2 pb-2 pr-1 pl-1 rounded-full'/>{count}<img src={incrementIcon} onClick={increment} alt="increment-icon" className='border-2 border-white p-1 rounded-full' /> </button> : 
<button onClick={add} className='absolute bottom-[-25px] left-14  bg-white flex flex-row gap-1 pt-2 pb-2 pr-4 pl-4 rounded-4xl cursor-pointer border border-[#AD8A85]  hover:border-[#C73B0F]'><img src={addToCartIcon} alt="icon-add-to-cart" className='w-5 h-5'  /><span className='text-[#260F08] hover:text-[#C73B0F] font-semibold '>Add to Cart</span></button>}
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