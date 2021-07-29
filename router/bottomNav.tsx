import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Entypo } from '@expo/vector-icons';
import ShoppingCard from '../screens/ShoppingCard'
// import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './HomeStack';
import ShoppingStack from './Shopping'
const Tab = createBottomTabNavigator();
const BottomNav = () => {
    return (

        <Tab.Navigator tabBarOptions={{ showLabel: false, inactiveTintColor: "#ffbd7d", activeTintColor: "#e47911" }}>
            <Tab.Screen
                component={HomeStack}
                name="Home"
                options={
                    {
                        tabBarIcon: ({ color }) => (<Entypo name="home" color={color} size={20}></Entypo>)
                    }
                }
            />
            <Tab.Screen component={HomeScreen} name="Profile"
                options={
                    {
                        tabBarIcon: ({ color }) => (<Entypo name="user" color={color} size={20}></Entypo>)
                    }
                } />
            <Tab.Screen component={ShoppingStack} name="Card"
                options={
                    {
                        tabBarIcon: ({ color }) => (<Entypo name="shopping-cart" color={color} size={20}></Entypo>)
                    }
                } />
            <Tab.Screen component={HomeScreen} name="More"
                options={
                    {
                        tabBarIcon: ({ color }) => (<Entypo name="menu" color={color} size={20}></Entypo>)
                    }
                } />
        </Tab.Navigator>

    )
};

export default BottomNav;