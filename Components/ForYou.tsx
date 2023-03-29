import { View, Text, StyleSheet } from 'react-native'


const ForYou = () => {
  return (
    <View style={styles.container}>
      <Text>ForYou</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ForYou