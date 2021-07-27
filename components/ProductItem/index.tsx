import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View ,StyleSheet,Image,Text } from "react-native";

interface ProductItemProps{
    item:{
        id:string;
        title:string;
        image:string;
        avgRating:number;
        ratings:number;
        price:number;
        oldPrice:number;
    }
}

const ProductItem=({item}:ProductItemProps)=>{
    return (
        <View style={styles.root}>
        <Image style={styles.image} source={{ uri: item.image }}></Image>
        <View style={styles.right}>
            <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
            <View style={styles.rating}>
                {[0,0,0,0,0].map((el,i)=>
                 <FontAwesome style={styles.star} 
                 name={i<Math.floor(item.avgRating) ? 'star' : 'star-o'}
                  size={18} 
                  color={"#e47911"}></FontAwesome>
                )}
               
                <Text>{item.ratings}</Text>
            </View>
            <Text style={styles.price}>From ${item.price}
               {item.oldPrice && <Text style={styles.oldPrice}>${item.oldPrice}</Text>}
            </Text>
        </View>
    </View>
    )
};

const styles=StyleSheet.create({
    rating:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    star:{
        margin:2
    },
    page: {
       
        padding: 10

    },
    root: {
        flexDirection: 'row',
        marginVertical:5,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
       
    },
    image: {
        flex:2,
        height: 150,
        resizeMode:'contain'
    },
    title: {
        fontSize:18,

    },
    price: {
      fontSize:18,
      fontWeight:'bold'
    },
    oldPrice:{
       fontSize:12,
       fontWeight:'normal',
       paddingLeft:5,
       textDecorationLine:'line-through'
       
    },
    right: {
        padding: 10,
        flex:3,
        marginVertical:5
    }
})

export default ProductItem;