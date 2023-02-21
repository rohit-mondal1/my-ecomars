import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductsCart from './ProductsCart';

const ProductS = () => {
   

    const { data :products = [] , isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/products`
          );
          const data = await res.json();
          return data;
        }})
        if(isLoading){
            return <div className="w-16 mx-auto mt-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
        }
    
    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {products.map((product ,index) => <ProductsCart index ={index} product = {product} key={product._id}></ProductsCart>)}
            </div>
        </div>
    );
};

export default ProductS;