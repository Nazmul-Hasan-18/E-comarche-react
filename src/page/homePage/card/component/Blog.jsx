import React from 'react';
import useCustomHook from '../../../shared/customHook/UseCustomHook';
import ProductCard from '../../../shared/shareProduct/ProductCard';
import { NavLink } from 'react-router';

const Blog = ({count}) => {
    const {items} = useCustomHook('products.json')
    const bal =count ? items.filter(item=> item.categoryName === count) :items
    return (
        <div className='grid md:grid-cols-5 grid-cols-1 container mx-auto md:px-26 px-19 gap-6 py-8'>
            
            {
                bal.
                sort((a,b)=> b.rating - a.rating)
                .slice(0,10)
                .map(item=>(
                  <NavLink>
                    <ProductCard item ={item}/>
                  </NavLink>
                ))
            }
        </div>
    );
};

export default Blog;