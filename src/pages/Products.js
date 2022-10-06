import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Product from '../components/Product'

function Products() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = () => {
            axios.get(" https://api.escuelajs.co/api/v1/products")
                .then(res => setData(res.data))
        }
        getData()
    }, [])
    console.log(data)
    return (
        <div>
            {
                data.map(({ id, title, price, description, images }) => (
                    <Product key={id} title={title} price={price} desc={description} img={images} />
                ))
            }
        </div>
    )
}

export default Products