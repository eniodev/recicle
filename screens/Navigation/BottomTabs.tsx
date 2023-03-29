import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, News, Scanner, Notifications, Profile } from '../index'
import { Truck, Article, Scan, Bell } from 'phosphor-react-native';


const Tabs = createBottomTabNavigator();


const BottomTabs = () => {
  return (
            <Tabs.Navigator screenOptions={screenOptions} >
                <Tabs.Screen 
                    name='Home' 
                    component={Home}
                    options={{ 
                        tabBarIcon: () => (
                            <Truck color="#242424"  size={24}/>
                        ),
                    }}
                />
                <Tabs.Screen 
                    name='News'
                    component={News} 
                    options={{ 
                        tabBarIcon: () => (
                            <Article color="#242424"  size={24}/>
                        ),
                    }}
                />
                <Tabs.Screen 
                    name='Scanner'
                    component={Scanner} 
                    options={{ 
                        tabBarIcon: () => (
                            <Scan color="#242424"  size={24}/>
                        ),
                    }}
                />
                <Tabs.Screen 
                    name='Notifications'
                    component={Notifications} 
                    options={{ 
                        tabBarIcon: () => (
                            <Bell color="#242424"  size={24}/>
                        ),
                    }}
                />
                 <Tabs.Screen 
                    name='Profile'
                    component={Profile} 
                    options={{ 
                        tabBarIcon: () => (
                            <Bell color="#242424" size={24}/>
                        ),
                    }}
                />
            </Tabs.Navigator>
  )
}


const screenOptions = {
    tabBarStyle:{
      backgroundColor:'#ffffff',
      height:105,
    },
    tabBarItemStyle:{
      backgroundColor:'#D9D9D9',
      margin:10,
      borderRadius:510,
    },
    tabBarShowLabel: false,
    headerShown: false
  };

const styles = StyleSheet.create({
    tab: {
        
    }
}) 

export default BottomTabs