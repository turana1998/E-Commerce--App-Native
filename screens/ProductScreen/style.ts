import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    padding:10,
    backgroundColor:'white'
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
  title: {},
  desc: {
    marginVertical:10,
    lineHeight:20
  }
});

export default styles;