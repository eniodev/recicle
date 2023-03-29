import { View, Text, StyleSheet } from 'react-native'


const Profile = () => {
  return (
    <View style={style.container}>
      <Text>Profilee</Text>
    </View>
  )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'brown'
    }
})


export default Profile