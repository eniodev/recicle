import { View, Text, StyleSheet } from 'react-native'
import { Header } from '../Components'

const Home = () => {
  return (
    <Header/>
  )
}

export default Home

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
})