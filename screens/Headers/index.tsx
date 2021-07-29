
import React from "react";
import { SafeAreaView, TextInput, View,StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
interface HeaderComponentsProps{
    svalue:string,
    setSValue:()=>void;
}
const Headers = ({svalue,setSValue}:HeaderComponentsProps) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#22e3dd" }}>
        <View style={{ margin: 10, marginTop: 60, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
             <Feather name="search" size={20}></Feather>
            <TextInput style={{ height: 40,marginLeft:10 }} placeholder="Search...." value={svalue}
            onChangeText={setSValue}></TextInput>
        </View>
    </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    page: {
       
        padding: 20,
        backgroundColor:'lightblue',
        alignItems:'center',
        
        

    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff'
    }
})
export default Headers;