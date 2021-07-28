import React, { useState ,useCallback} from 'react';
import { View, Text, FlatList, Image, useWindowDimensions } from 'react-native';
import styles from './style'


const ImageCarousel = ({ images }: { images: string[]}) => {
    const windowWidth = useWindowDimensions().width;
    const[acitve,setActive]=useState(0)
    const onFlatlistUpdate = useCallback(({viewableItems}) => {
        if (viewableItems.length > 0) {
          setActive(viewableItems[0].index || 0);
        }
        console.log(viewableItems);
      }, []);
    console.log(images)
    return (
        <View style={styles.root}>
            <FlatList

                data={images} 
                renderItem={({ item }) => (
                    <Image style={[styles.image, { width: windowWidth - 40 }]} source={{ uri: item }}></Image>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment='center'
                decelerationRate='fast'
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                  }}
                onViewableItemsChanged={onFlatlistUpdate}
            >

            </FlatList>
            <View style={styles.dots}>
                {images.map((image, index) => (
                    <View style={[
                        styles.dot,
                        {
                            backgroundColor:index===acitve ? '#c9c9c9' : '#ededed'
                        }
                    ]}></View>
                ))}

            </View>

        </View>
    )
};

export default ImageCarousel;