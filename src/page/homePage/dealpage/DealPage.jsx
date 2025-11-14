import React from 'react';
import useCustomHook from '../../shared/customHook/UseCustomHook';
import ProductCard from '../../shared/shareProduct/ProductCard';

const DealPage = () => {
    const {items} = useCustomHook('products.json')
    return (
        
        <div>
            <div className='container mx-auto px-6 md:px-26 pt-12'>
                <div>
                    <h3 className='md:text-4xl text-2xl font-bold text-gray-700'>Day of <span className='text-[#29a56c]'>The Deal</span></h3>
                    <p className=' text-gray-500 text-sm md:textmd'>Don't wait. The time will never be just right.</p>
                    <div className='grid md:grid-cols-5 grid-cols-1 gap-6 py-8 px-13 md:px-0'>
                        {
                            items.slice(0,5).map(item=> <ProductCard item={item}/>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DealPage;