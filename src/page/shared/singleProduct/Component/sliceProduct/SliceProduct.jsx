import React, { useState } from 'react';
import useCustomHook from '../../../customHook/UseCustomHook';
import ProductCard from '../../../shareProduct/ProductCard';
import { Link } from 'react-router';

const SliceProduct = () => {
    const {items} = useCustomHook('/products.json')
    return (
        <div>
            <div className='container mx-auto px-26 py-6'>
                <div>
                    <h2 className='text-4xl font-bold text-gray-700'>Top Rted <span className='text-[#29a56c]'>Seleing Products</span></h2>
                    <p className='text-gray-600'>High-quality denim jeans for men with a comfortable</p>
                </div>
                <div className=' grid grid-cols-5 gap-5 py-6'>
                    {
                        items.slice(0,5).map(item=>(
                            <Link to={`singleProduct ${item.id}`}>
                             <ProductCard item={item}/>
                             </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SliceProduct;