import { SafeAreaView, StyleSheet } from 'react-native'
import Settings  from './Settings'


const Profile = () => {
  return (
  <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Settings />
  </SafeAreaView>
    
    
    
    
  )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

export default Profile