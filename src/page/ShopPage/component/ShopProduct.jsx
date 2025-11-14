import React from 'react';
import useCustomHook from '../../shared/customHook/UseCustomHook';
import ProductCard from '../../shared/shareProduct/ProductCard';


const ShopProduct = ({count , width}) => {
    const {items} = useCustomHook('products.json')
    const products =  items.filter(item=>{
    const matchId = count ? item.id == count : items
    const matchWidth = width ? item.width == width : items
    return matchId && matchWidth;

    })
    
    return (
        <div className=' grid grid-cols-4 gap-5 '>
            {
                products.map(item=> (
                    
                    <ProductCard item={item}/>
                    
                ))
            }
        </div>
    );
};

export default ShopProduct;