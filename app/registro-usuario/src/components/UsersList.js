import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import UsersCard from './UsersCard'


export default function UsersList(props) {

    const { users } = props

    return (
        <FlatList
            data={users}
            numColums={1}
            showsVerticalScrollIndicator={false}
            keyExtrator={(users) => String(users.userId)}
            renderItem={({item}) => <UsersCard user={item}/>} 
            contentContainerStyle={styles.flatListContentContainer}
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    }
})