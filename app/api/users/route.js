export const GET = async ()=>{
    try {
       const res = await fetch('https://fakestoreapi.com/users')

       const users=await res.json()

       return Response.json({status:200, users})
    } catch (error) {
       return new Response.json({error})
    }
}

export const POST = async (username, password)=>{
   try {
      fetch('https://fakestoreapi.com/auth/login',{
         method:'POST',
         body:JSON.stringify({
             username: {username},
             password: {password},
         })
     })
         .then(res=>res.json())
         .then(json=>console.log(json))
   } catch (error) {
      return new Response.json({error})
   }
}
