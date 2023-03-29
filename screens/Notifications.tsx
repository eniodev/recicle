import { View, Text, StyleSheet } from 'react-native'


const Notifications = () => {
  return (
    <View style={style.container}>
      <Text>Notifications</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'purple'
  }
})

export default Notifications