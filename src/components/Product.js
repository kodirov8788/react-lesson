import React from 'react'

function Product({ title, price, desc, img }) {
    return (
        <ul className='flex justify-center'>
            <li className='flex border-black border-[2px] w-1/5 justify-center py-2 m-1 rounded' >{title}</li>
            <li className='flex border-black border-[2px] w-1/5 justify-center py-2 m-1 rounded'>{price}</li>
            <li className='flex border-black border-[2px] w-2/5 justify-center py-2 m-1 rounded'>{desc}</li >
            <li className='flex border-black border-[2px] w-1/5  justify-center  m-1 rounded'><img className='w-full h-full object-cover' src={img} alt="" /></li>
        </ul>
    )
}

export default Product