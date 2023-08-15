import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native'
import { getUserApi } from '../api/users'
import UsersList from '../components/UsersList'


export default function Users() {

    const [ users, setUsers ] = useState([])

    useEffect(()=>{
        (async ()=> {
            await loadUsers()
        } )()
    }, [])

    const loadUsers = async () => {
        try {
            const response = await getUserApi()
            setUsers(response)
            console.log(users)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <SafeAreaView>
            <UsersList users={users}/>
        </SafeAreaView>
    )
}