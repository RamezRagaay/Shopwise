"use client"
import CurrentPageHeader from '@/components/currentPageheader'
import React from 'react'
import { Star } from './../../../components/svgs/Star';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '@/store/features/Cart/cartSlice';
import { RemoveItemDialog } from '@/components/RemoveItemDialog';
import { DrawerAddToCart } from '@/components/DrawerAddToCart';
const Page = () => {
    const dispatch = useDispatch();
    const { cartItems, total } = useSelector((state) => state.cart);
    console.log(cartItems);
    return (
    <>
    <CurrentPageHeader CurrPage={'Cart'}/>
    {
        cartItems.length === 0 ? (
            <div className="container px-4 py-8 flex items-center justify-center">
                <h1 className="text-2xl font-semibold">Your cart is empty</h1>
            </div>
        ) : (
        <div className="container mx-auto px-4 py-8">
        <table className="min-w-full ">
            <thead>
            <tr className="bg-white">
                <th className="py-2 px-4 border-b border-gray-200 text-left">Product</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Price</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Quantity</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Remove</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Total</th>
            </tr>
            </thead>
            <tbody>
            {cartItems.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b border-gray-200">
                    <div className="flex items-center">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                    <span>{product.name}</span>
                    </div>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{product.price}$</td>
                <td className="py-2 px-4 border-b border-gray-200">
                    <span className="inline-block px-3 py-1 text-sm text-white bg-green-500 rounded-full">
                    {product.quantity}
                    </span>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                    <div className="flex items-center" >
                    <RemoveItemDialog onClick={() => dispatch(removeItem(product))}/>

                    </div>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{product.price * product.quantity}$</td>
                </tr>
            ))}
            <tr>
                <td colSpan="4" className="py-2 px-4 border-b border-gray-200 font-semibold text-right">Total:</td>
                <td className="py-2 px-4 border-b border-gray-200 font-semibold">{Math.trunc(total)}$</td>
            </tr>
            </tbody>
        </table>
        </div>    
        )
    }
    </>
    
  )
}

export default Page
