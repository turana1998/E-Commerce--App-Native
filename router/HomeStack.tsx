import React, {useState} from 'react';
import BottomNav from './bottomNav'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { SafeAreaView, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
const Stack = createStackNavigator();
interface HeaderComponentsProps{
    svalue:string,
    setSValue:()=>void;
}
const Header = ({svalue,setSValue}:HeaderComponentsProps) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#22e3dd" }}>
            <View style={{ margin: 10, marginTop: 60, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
                 <Feather name="search" size={20}></Feather>
                <TextInput style={{ height: 40,marginLeft:10 }} placeholder="Search...." value={svalue}
                onChangeText={setSValue}></TextInput>
            </View>
        </SafeAreaView>
    )
}
const HomeStack = () => {
    const [svalue,setSValue]=useState('')
    return (
       
        <Stack.Navigator
            >
            <Stack.Screen  name="HomeScreen">{()=><HomeScreen svalue={svalue} ></HomeScreen>}</Stack.Screen>
            <Stack.Screen component={ProductScreen} name="ProductDetail" />
        </Stack.Navigator>

    )
};

export default HomeStack;