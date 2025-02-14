export const getUsers = async()=>{
    try {
      const res =await fetch(`http://localhost:3000/api/users`)
      const data = await res.json()
      return data
    } catch (error) {
      return new Response.json({error})
    }
    
}

export const postUser = async(data)=>{
    try {
      const res =await fetch(`http://localhost:3000/auth/login`,{
        method:"POST",
        
      })
      const data = await res.json()
      return data
    } catch (error) {
      return new Response.json({error})
    }
}