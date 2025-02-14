export const listProducts = async()=>{
    try {
        const res = await fetch('http://localhost:3000/api/products')

        const data =await res.json()
        return data
    } catch (error) {
        return new Response.json({error})
    }
}

export const getProd = async(id)=>{
    try {
      const res =await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      return data

    } catch (error) {
      console.log(error);
    
    }
    finally{
      // setLoading(false)
    }
}