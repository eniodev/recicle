import { View, Text, StyleSheet } from 'react-native'


const Scanner = () => {
  return (
    <View style={style.container}>
      <Text>Scanner</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }
})


export default Scanner