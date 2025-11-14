import React, { useEffect, useState } from 'react';

const useCustomHook = (url) => {
    
    const [items , setItems] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[url])

    return{items};
};

export default useCustomHook;