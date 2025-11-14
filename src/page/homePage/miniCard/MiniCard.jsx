import React from 'react';

const MiniCard = () => {
    const items = [
        { 
            id:1,
            name:"Eggs",
            items:'154 items',
            image:"https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/category/c-1.png"
        },
        { 
            id:2,
            name:"Clothes",
            items:'121 items',
            image:"https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/category/c-4.png"
        },
        { 
            id:3,
            name:"Watches",
            items:'344 items',
            image:"https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/54_1.jpg"
        },
        { 
            id:4,
            name:"Dresses",
            items:'554 items',
            image:"https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/category/c-1.png"
        },
        { 
            id:5,
            name:"Glasses",
            items:'321 items',
            image:"https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/category/c-4.png"
        },
        { 
            id:6,
            name:"Comsamatics",
            items:'154 items',
            image:"https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/54_1.jpg"
        },
    ]
    return (
        <div>
            <div className='container mx-auto px-4 md:px-26 py-8'>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8'>
                    {
                        items.map(item=>(
                            <div key={item.id} className='flex flex-col items-center bg-[#F3F4F6] py-3 hover:scale-110 duration-500 rounded-md cursor-pointer'>
                                <img className='w-16 md:w-13' src={item.image} alt={item.name} />
                                <h2 className='font-semibold text-gray-600 mt-2'>{item.name}</h2>
                                <p className='text-sm text-gray-400'>{item.items}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MiniCard;
