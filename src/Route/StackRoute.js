import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import TodolistScreen from '../screen/TodolistScreen';
import TodoAddScreen from '../screen/TodoAddScreen';
import TodoDetailScreen from '../screen/TodoDetailScreen';
import TouchButton from '../Component/TouchButton';

const StackRoute = () => {
  const Stack = createNativeStackNavigator();

  return (
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
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default StackRoute;
