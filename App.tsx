import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./screens/Navigation/BottomTabs";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";



const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <BottomTabs />
      <StatusBar translucent backgroundColor="green"/>
    </NavigationContainer>
    </SafeAreaProvider>
    
      
  );
}

export default App