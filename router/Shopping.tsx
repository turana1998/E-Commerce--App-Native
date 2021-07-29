import React from 'react';
import BottomNav from './bottomNav'
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCard from '../screens/ShoppingCard';
import AddressForm from '../screens/AddressForm';

const Stack = createStackNavigator();
const ShoppingStack = () => {
    return (
     
            <Stack.Navigator>
                <Stack.Screen component={ShoppingCard} name="ShoppingCard"
                options={{title:"Shopping"}}/>
                <Stack.Screen component={AddressForm} name="AddressForm"/>
            </Stack.Navigator>
       
    )
};

export default ShoppingStack;