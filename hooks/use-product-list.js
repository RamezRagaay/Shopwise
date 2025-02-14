"use client"
import { listProducts } from "@/services/products"
import { useEffect, useState } from "react"


 const useProductsList=()=>{
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)

    const productsListAction=async()=>{
        setLoading(true)
        try {
            const {data}=await listProducts()
            setProducts(data)
            console.log(data);            
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
        
    }

    useEffect(()=>{
        productsListAction()
    },[])


    return{
        products,
        loading
    }


}

export default useProductsList