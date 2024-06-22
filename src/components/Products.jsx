import React, { useEffect, useState } from 'react'
import { Card } from './Card'

const Products = () => {
    const [data, setData] = useState([])
    // console.log(data);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
    }, [])

    return (
        <div className="w-full h-auto p-5 bg-slate-400 flex flex-wrap gap-5">
            {data.map((product) => (
                <Card
                    key={product.id}
                    data={product}
                />
            ))}
        </div>
    )
}

export default Products