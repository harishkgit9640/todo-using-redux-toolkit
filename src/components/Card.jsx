import React from 'react'

export const Card = ({ data }) => {
    return (
        <>
            <div className="mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-lime-500">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="max-h-52 w-full" src={data.image} alt="product-img" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-md mb-2">{data.title.substr(0, 20)}</div>
                        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #{data.category}
                        </p>
                        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <span> Prince : Rs.{data.price} </span>
                        </p>
                        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <span> Rate : {data.rating.rate} Count:{data.rating.count} </span>
                        </p>
                    </div>
                    <div className="mb-3 flex justify-around items-center">
                        <button className="inline-block text-slate-100 rounded-full px-5 py-2 text-sm font-semibold bg-orange-700 hover:bg-orange-900 mr-2 mb-2"> Add Cart </button>
                        <button className="inline-block text-slate-100 rounded-full px-5 py-2 text-sm font-semibold bg-blue-700 hover:bg-blue-900 mr-2 mb-2">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
