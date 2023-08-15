import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NewUserScreen from '../screen/NewUser'

const Stack = createStackNavigator()

export default function NewUserNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="NewUserScreen" component={NewUserScreen}  options={{ title: "", headerTransparent: true }} />
    </Stack.Navigator>
  )
}