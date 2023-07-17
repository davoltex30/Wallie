import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from "./src/screens/SignUp";
import Tabs from "./src/navigation/Tabs";


const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'SignUp'}>
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
