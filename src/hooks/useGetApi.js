import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'

const useGetApi = () => {
    
    const [users, setUsers] = useState()

    const URL = 'https://users-crud1.herokuapp.com/users/'

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = () => {
        axios.get(URL)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }


    return {users,getAllUsers}
}

export default useGetApi