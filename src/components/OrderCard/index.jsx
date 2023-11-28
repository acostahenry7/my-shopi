import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

function OrderCard({data, handleDelete}) {
  return (
    <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2 items-center">
            <figure className="w-20 h-20">
                <img className="w-full h-full rounded-lg object-cover" src={data?.images[0]} alt=""/>
            </figure>
            <p className="text-sm font-light">
                {data?.title}
            </p>
        </div>
        <div className="flex gap-2 items-center">
            <p className="text-md font-semibold">${data?.price}</p>
            { handleDelete ? <AiOutlineClose className='cursor-pointer' onClick={() => handleDelete(data.id)} /> : undefined }
        </div>
    </div>
  )
}

export {OrderCard}