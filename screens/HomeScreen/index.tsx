import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View,StyleSheet, FlatList } from "react-native";
import ProductItem from "../../components/ProductItem";
import products from "../../data/products";
const HomeScreen = ({svalue}:{svalue:string}) => {
    return (
        <View style={styles.page}>
           {/* <ProductItem item={products[0]}></ProductItem> */}
           <FlatList
             data={products}
             renderItem={({item})=><ProductItem item={item}
             keyExtractor={({id})=>id}
             ></ProductItem>}
           ></FlatList>
        </View>
    )
};
const styles = StyleSheet.create({
    page: {
       
        padding: 10

    }
})
export default HomeScreen;