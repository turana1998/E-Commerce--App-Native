
import React from "react";
import { View,StyleSheet, FlatList, Text } from "react-native";
const Headers = () => {
    return (
        <View style={styles.page}>
           <Text style={styles.text}> Header</Text>
          
        </View>
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