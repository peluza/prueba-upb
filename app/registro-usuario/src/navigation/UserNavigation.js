import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UsersScreen from '../screen/Users'
import UserScreen from '../screen/User'

const Stack = createStackNavigator()

export default function UserNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Users" component={UsersScreen}   options={{ title: "", headerTransparent: true }}/>
        <Stack.Screen name="User" component={UserScreen} options={{ title: "", headerTransparent: true }}/>
    </Stack.Navigator>    
  )
}