import React, { useEffect, useState } from 'react';
import ProductsCart from './ProductsCart';

const ProductS = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    console.log(products);
    
    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {products.map((product ,index) => <ProductsCart index ={index} product = {product} key={product._id}></ProductsCart>)}
            </div>
        </div>
    );
};

export default ProductS;