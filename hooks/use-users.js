"use client"

import { getUsers } from "@/services/users"
import { useEffect, useState } from "react"

const useUsers = () => {
    const [users, setUsers] = useState([])
    
    const usersListAction = async () => {
        try {
            const { users } = await getUsers()
            setUsers(users)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        usersListAction()
    }, [])
    return{
        users, 

    }
}

export default useUsers