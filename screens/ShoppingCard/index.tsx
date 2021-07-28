import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View,StyleSheet, FlatList ,Text} from "react-native";
import ShopItem from '../../components/ShopItem'
import products from "../../data/card";
import Buttons from "../../components/Button";
const ShoppingCard = () => {
   const totalPrice=products.reduce((summed,product)=>(
       summed+product.item.price*product.quantity
   ),0)
    return (
        <View style={styles.page}>
            <View>
                <Text style={{fontSize:18}}>Subtotal ({products.length}): 
                {' '}
                <Text style={{color:'#e47911',fontWeight:'bold'}}>${totalPrice.toFixed(2)}</Text></Text>
                <Buttons  text={"Proceed to checkout"} onPress={()=>console.warn("checkout")}
                containerStyles={{backgroundColor:"#f7e300",borderColor:"#c7b702" }}
                ></Buttons>
            </View>
           {/* <ProductItem item={products[0]}></ProductItem> */}
           <FlatList
             data={products}
             renderItem={({item})=><ShopItem carditem={item}
             
             ></ShopItem>}
           ></FlatList>
        </View>
    )
};
const styles = StyleSheet.create({
    page: {
       
        padding: 10

    }
})
export default ShoppingCard;