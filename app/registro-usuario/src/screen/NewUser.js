import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import UserForm from '../components/UserForm'


export default function NewUser() {

    const user = {
        nombres: "",
        apellidos: "",
        usuario: "",
        correo: "",
    }

    return (
        <SafeAreaView style={styles.spacing}>
          <UserForm userData={{user: user, title: "Nuevo Usuario"}} />
        </SafeAreaView>
    )
}

const styles =  StyleSheet.create({
    spacing: {
        marginTop: 50
    }
})