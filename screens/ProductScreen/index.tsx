import React ,{useState} from 'react';
import { View, Text ,ScrollView} from 'react-native';
import styles from './style'
import product from '../../data/product';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Buttons from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
const ProductScreen = () => {
    const [selectedValue, setSelectedValue] = useState(product.options[0]);
    const [quantity, setQuantity] = useState(1);
    
    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            <ImageCarousel images={product.images}></ImageCarousel>
            <Picker
             selectedValue={selectedValue}
             style={{ height: 50, width: 150 }}
             onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                {
                    product.options.map(option=>(
                       <Picker.Item label={option} value={option} />
                    ))
                }
                
                {/* <Picker.Item label="JavaScript" value="js" /> */}
            </Picker>
            <Text style={styles.price}>From ${product.price}
                {product.oldPrice && <Text style={styles.oldPrice}>${product.oldPrice}</Text>}
            </Text>
            <Text style={styles.desc}>{product.description}</Text>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity}></QuantitySelector>
            <Buttons 
            text={'Add to Cart'} 
            onPress={()=>{console.warn("add cart")}}
            containerStyles={{backgroundColor:'#e3c905'}}
            ></Buttons>
            <Buttons text={'Buy Now'} onPress={()=>{console.warn("Buy now")}}></Buttons>
            
        </ScrollView>
    )
};

export default ProductScreen;