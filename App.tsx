/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screen/HomeScreen';
import SettingScreen from './src/screen/SettingScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // headerShown: false ,// hide headers globally
          headerStyle: {
            backgroundColor: '#1e90ff', // 🔵 background color
          },
          headerTintColor: '#fff', // 🎨 back button and title color
          headerTitleStyle: {
            fontWeight: 'bold', // 🔠 bold text
            fontSize: 20,
          },
          headerTitleAlign: 'center', // 🧭 align title (left | center)
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}} // 👈 Hides the title/header
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{title: 'Setting' , //  Custom Title
            headerStyle: { backgroundColor: 'darkgreen' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontSize: 18 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
