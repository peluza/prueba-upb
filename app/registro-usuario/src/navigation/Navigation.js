import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import UsersNavigation from './UserNavigation'
import NewUserNavigation from './NewUserNavigation'


const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='UsersTab' component={UsersNavigation} options={{
                tabBarLabel: "Usuarios",
                tabBarIcon: () =>(
                    <Icon name="user" color="#000" size={20} />
                ),
                title: "Usuarios",
            }

            } />
            <Tab.Screen name='NewUsersTab' component={NewUserNavigation}  options={{
                tabBarLabel: "Nuevo Usuario",
                tabBarIcon: ()=> (
                    <Icon name="user-plus" color="#000" size={20} />
                ),
                title: "Nuevo Usuario",
            }}/>
        </Tab.Navigator>

    )
}