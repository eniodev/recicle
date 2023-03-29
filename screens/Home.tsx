import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Header } from '../Components'

const Home = () => {
  return (
    <SafeAreaView>
        <Header/>
    </SafeAreaView>
    
  )
}

export default Home

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})