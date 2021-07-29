import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './bottomNav'
import { createStackNavigator } from '@react-navigation/stack';

const Root = createStackNavigator();
const Router = () => {
    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown:false}}>
                <Root.Screen component={BottomNav} name="Hommetabs"/>
            </Root.Navigator>
        </NavigationContainer>
    )
};

export default Router;