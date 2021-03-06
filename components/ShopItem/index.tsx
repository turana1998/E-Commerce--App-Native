import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import QuantitySelector from '../QuantitySelector';
import {useNavigation} from '@react-navigation/native'
interface ShopItemProps {
    carditem: {
        id: string;
        quantity: number;
        option?: string;
        item: {
            title: string;
            image: string;
            avgRating: number;
            ratings: number;
            price: number;
            oldPrice: number;
        }

    }
}

const ShopItem = ({ carditem }: ShopItemProps) => {
    const navigation=useNavigation();
    const onPress=()=>{
      navigation.navigate('ProductDetail')
    }
    const { quantity: quantityProp, item } = carditem;
    const [quantity, setQuantity] = useState(quantityProp);
    return (
      <Pressable style={styles.root} onPress={onPress}>
            <View  style={styles.row}>
            <Image style={styles.image} source={{ uri: item.image }}></Image>
            <View style={styles.right}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                <View style={styles.rating}>
                    {[0, 0, 0, 0, 0].map((el, i) =>
                        <FontAwesome style={styles.star}
                            name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
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
        <View style={styles.quantity}>
           <QuantitySelector  quantity={quantity} setQuantity={setQuantity}></QuantitySelector>
        </View>
       
      </Pressable>
    )
};

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    star: {
        margin: 2
    },
    page: {

        padding: 10

    },
    root: {
        
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',

    },
    row:{
        flexDirection:'row'
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 18,

    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        paddingLeft: 5,
        textDecorationLine: 'line-through'

    },
    right: {
        padding: 10,
        flex: 3,
        marginVertical: 5
    },
    quantity:{
        marginVertical:10,
        marginLeft:5
    }
})

export default ShopItem;