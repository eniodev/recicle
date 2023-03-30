import { View, StyleSheet, ScrollView } from 'react-native'
import Post  from './Post'


const ForYou = () => {
  return (
    <ScrollView  
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{  
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Post />
        <Post />
        <Post />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

export default ForYou