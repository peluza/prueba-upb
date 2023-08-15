import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function UsersCard(props) {
    const { user } = props

    const navigation = useNavigation()

    const getToUser = () => {
        navigation.navigate("UserProfile", user)
    }

    return (
        <TouchableWithoutFeedback onPress={getToUser}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bgstyle}>
                        <Text style={styles.txt}>Usuario: {user.usuario}</Text>
                        <Text style={styles.txt}>Nombres: {user.nombres}</Text>
                        <Text style={styles.txt}>Apellidos: {user.apellidos}</Text>
                        <Text style={styles.txt}>Correo: {user.correo}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 150
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgstyle: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
        backgroundColor: "#A8A878",
        alignItems: "center"
    },
    txt: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10
    },
})