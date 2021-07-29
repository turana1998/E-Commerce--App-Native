import React from 'react';
import {View,Text,StyleSheet, Pressable} from 'react-native';

interface Buttonprops{
    text:string,
    onPress:()=>{},
    containerStyles?:object,
}

const Buttons =({text,onPress,containerStyles}:Buttonprops)=>{
    return(
        <Pressable onPress={onPress}  style={[styles.root,containerStyles]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles=StyleSheet.create({
   root:{
       backgroundColor:'#e47917',
       marginVertical:10,
       height:35,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:5,
       borderWidth:1,
       borderColor:'#a15e1b'
   },
   text:{
       fontSize:16
   }
})
export default Buttons;