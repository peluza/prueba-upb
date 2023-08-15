import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function User(props) {
    const { navigation, route: { params } } = props

    useEffect(() => {
        navigation.setOptions({
          headerRight: () => null,
          headerLeft: () => null,
        })
      }, [navigation, params])
    
    return (
        <View>
            <Text>Usuario: {params.usuario}</Text>
            <Text>Nombres: {params.nombres}</Text>
            <Text>Apellidos: {params.apellidos}</Text>
            <Text>Correo: {params.correo}</Text>
        </View>
    )
}