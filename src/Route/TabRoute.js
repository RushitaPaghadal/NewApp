import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeScreen from '../screen/HomeScreen';
import SettingScreen from '../screen/SettingScreen';

const TabRoute = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
        //   headerShown: false, // 👈 Hides the title/header
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Setting', //  Custom Title
          headerStyle: {backgroundColor: 'darkgreen'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontSize: 18},
        }}
      />
      <Tab.Screen
        name="Order"
        component={SettingScreen}
        options={{
          title: 'Order', //  Custom Title
          headerStyle: {backgroundColor: 'darkgreen'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontSize: 18},
        }}
      />
      <Tab.Screen
        name="Supplier"
        component={SettingScreen}
        options={{
          title: 'Supplier', //  Custom Title
          headerStyle: {backgroundColor: 'darkgreen'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontSize: 18},
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabRoute;
