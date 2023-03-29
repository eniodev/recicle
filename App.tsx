import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./screens/Navigation/BottomTabs";

import { useFonts } from "expo-font";




const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
      
  );
}

export default App