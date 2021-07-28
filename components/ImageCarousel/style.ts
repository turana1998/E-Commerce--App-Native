import {StyleSheet} from 'react-native';

const styles = StyleSheet.create(
    {
      root:{},
      image:{
       
          height:250,
          padding:20,
          margin:10,
          resizeMode:'contain',
      },
      dot:{
          width:10,
          height:10,
          borderRadius:25,
          borderWidth:1,
          borderColor:'#C9C9C9',
          margin:5,
          backgroundColor:'#e0e0e0'
      },
      dots:{
          flexDirection:'row',
          justifyContent:'center'
      }
    }
);

export default styles;