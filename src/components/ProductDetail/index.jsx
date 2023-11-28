import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import './index.css'
import { ShoppingCartContext } from '../../context';

function ProductDetail({data}) {

  const {isProductDetailOpen, closeProductDetail, productToShow} = React.useContext(ShoppingCartContext)

  return (
    <aside className={`${isProductDetailOpen ? "flex" : "hidden"} product-detail flex flex-col fixed right-0 bg-white border border-black rounded-lg`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div>
              <AiOutlineClose className='cursor-pointer' onClick={() => closeProductDetail()}/>
            </div>
        </div>
        <div>
          <figure className='px-6 h-60'>
            <img className='w-full h-full rounded-lg object-cover' 
                src={productToShow?.images[0]} 
                alt={productToShow?.name}/>
          </figure>
          <p className='flex flex-col p-6'>
            <span className='font-semibold text-xl mb-2'>${productToShow?.price}</span>
            <span className='font-medium text-md'>{productToShow?.title}</span>
            <span className='font-light text-sm'>{productToShow?.description}</span>
          </p>
        </div>
    </aside>
  )
}


export { ProductDetail}