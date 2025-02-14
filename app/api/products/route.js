export const GET = async ()=>{
     try {
        const res = await fetch('https://fakestoreapi.com/products')

        const data=await res.json()

        return Response.json({status:200, data})
     } catch (error) {
        return new Response.json({error})
     }
}