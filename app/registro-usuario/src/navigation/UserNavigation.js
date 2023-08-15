import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UsersScreen from '../screen/Users'

const Stack = createStackNavigator()

export default function UserNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="User" component={UsersScreen}   options={{ title: "", headerTransparent: true }}/>
    </Stack.Navigator>    
  )
}