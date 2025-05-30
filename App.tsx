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
import TodolistScreen from './src/screen/TodolistScreen';
import TodoAddScreen from './src/screen/TodoAddScreen';
import TodoDetailScreen from './src/screen/TodoDetailScreen';
import {Text, TouchableOpacity} from 'react-native';
import TouchButton from './src/Component/TouchButton';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Todo"
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
        }}>
        <Stack.Screen
          name="Todo"
          component={TodolistScreen}
          options={({navigation}) => ({
            // headerShown: false, // 👈 Hides the title/header
            title: 'TODO List',
            headerTitleAlign: 'left',
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => (
              <TouchButton
                style={{}}
                text="Add"
                onPress={() => navigation.navigate('TodoAdd')}
              />

            ),
          })}
        />

        <Stack.Screen
          name="TodoAdd"
          component={TodoAddScreen}
          options={{
            // headerShown: false, // 👈 Hides the title/header
            title: 'TODO Add',
          }}
        />
        <Stack.Screen
          name="TodoDetails"
          component={TodoDetailScreen}
          options={{
            // headerShown: false, // 👈 Hides the title/header
            title: 'TODO Details',
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false, // 👈 Hides the title/header
          }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: 'Setting', //  Custom Title
            headerStyle: {backgroundColor: 'darkgreen'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 18},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
