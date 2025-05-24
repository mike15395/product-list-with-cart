import React from 'react'
import Card from './Card'
import data from "./../../data.json"

export default function Dessert() {

 
  return (
    <div className='flex flex-col gap-8'>
        <div className='text-[#260F08] font-bold text-[40px]'>Desserts</div>
        <div className='flex flex-row flex-wrap w-[800px] gap-6 '>
            {data?.map((item)=>
                  <Card key={item.name} category={item?.category}  price={item?.price} name={item?.name} imgSrc={item?.image?.desktop} obj={item}/>
            )}            
        </div>
    </div>
  )
}
