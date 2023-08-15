import { Button, SafeAreaView, View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import UserForm from '../components/UserForm'
import { deleteUserApi } from '../api/users'

export default function User(props) {
    const { navigation, route: { params } } = props

    useEffect(() => {
        console.log(params)
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => null,
        })
    }, [navigation, params])

    const deleteUser = async () => {
        try {
            await deleteUserApi(params.userId)
            console.log("Usuario eleminiado exitosamente")
            navigation.goBack();
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <SafeAreaView style={styles.spacing}>
            <UserForm userData={{ user: params, title: "Editar Usuarios" }} />
            <View style={styles.delete}>
                <Button title='Eliminar Usuario' onPress={deleteUser} color="red" />
            </View>
        </SafeAreaView>
    )
}

const styles =  StyleSheet.create({
    delete: {
        marginTop: 20
    },
    spacing: {
        marginTop: 50
    }
})