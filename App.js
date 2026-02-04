import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ButtonScreen from './Screens/ButtonScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name = "Home" component={HomeScreen}/>
      <Stack.Screen name = "Button Animations" component={ButtonScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9f9f9f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
