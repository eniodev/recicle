import { View, Text, StyleSheet } from 'react-native'


const News = () => {
  return (
    <View style={style.container}>
      <Text>News</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue'
  }
})

export default News