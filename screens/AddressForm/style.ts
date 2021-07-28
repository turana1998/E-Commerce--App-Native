import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
   row:{
      marginVertical:10
   },
   root:{
    padding:20
   },
   label:{
     fontSize:16,
     fontWeight:'bold',
     marginBottom:10
   },
   input:{
     height:40,
     backgroundColor:'white',
     padding:5,
 
     borderWidth:1,
     borderColor:"lightgrey",
     borderRadius:2
   },
   input2:{
    height:40,
    backgroundColor:'white',
    padding:5,
    borderWidth:1,
    borderColor:"lightgrey",
    borderRadius:2
  },
   picker:{
  
    backgroundColor:'white',
    padding:5,
    marginVertical:5,
    borderWidth:1,
    borderColor:"lightgrey",
    borderRadius:5,
  
  },
  error:{
      color:'red'
  }
})

export default styles;