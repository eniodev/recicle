import { View, Text, StyleSheet } from 'react-native'
import Post  from './Post'


const ForYou = () => {
  return (
    <View style={styles.container}>
      <Post />
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