import { View, Text,StyleSheet } from 'react-native'
import { ChatText } from 'phosphor-react-native'



const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recicle</Text>

      <View style={styles.message}>
        <ChatText color='#242424' size={24} />
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: '#ffffff'
    },
    text: {
        fontSize: 20,
        fontWeight: '900',
    },
    message: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 510
    }
})
export default Header