"use client"
import React from 'react'
import useProductList from '@/hooks/use-product-list';
import Card from '@/components/card1';
import Link from 'next/link';

const Products = () => {
  const {products, loading} = useProductList();

  return (
    <>
    <div className='flex flex-col container justify-center items-center' id='products-section'>
        <h3 className='text-secondary text-4xl pt-14 pb-5 font-semibold '>Exclusive Products</h3>
        <div className='w-20 h-0.5 bg-primary'></div>
    </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container'>
      {
        products?.map((product) => (
            <Card product={product} loading={loading}/>
        ))
      }
    </div>
    </>
  )
}

export default Products