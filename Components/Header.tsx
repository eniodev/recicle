import { View, Text,StyleSheet } from 'react-native'
import { ChatText, MagnifyingGlass } from 'phosphor-react-native'
//import { useSafeAreaInsets } from 'react-native-safe-area-context'




const Header = () => {

  //const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recicle</Text>
      <View style={styles.headerAndSearch}>
          <MagnifyingGlass color='#242424' size={24} />
          <View style={styles.message}>
            <ChatText color='#242424' size={24} />
          </View>
          
        </View>
          
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 0,
        justifyContent: 'space-between',
        backgroundColor: '#ffffff'
    },
    text: {
        fontSize: 24,
        fontWeight: '900',
    },
    message: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 510
    },
    headerAndSearch: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: 95,
      marginRight: -5,
    }
  
})
export default Header