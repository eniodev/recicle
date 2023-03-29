import { StyleSheet, SafeAreaView, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PickUp, ForYou, Header } from '../Components/index'

const Tab = createMaterialTopTabNavigator();

const  MaterialTopTabs = () => {
  return (
    
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Pickup" component={PickUp} />
      <Tab.Screen name="For you" component={ForYou} />
    </Tab.Navigator>
    
    
  );
}


const screenOptions = {
  tabBarLabelStyle: { 
    fontSize: 12, 
    fontWeight: '700',
    textTransform: 'capitalize',
    
  },
  tabBarIndicatorStyle: {
    marginLeft: 65,
    width: 60,
    height: 3,
    borderRadius: 50,
    backgroundColor: '#4DA67F',
  }
}



const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <View style={styles.testing}>
           <MaterialTopTabs/>
        </View>
       
    </SafeAreaView>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'   
    },
    testing: {
      flex: 1,
      width: "100%"
    }
})