import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import SettingScreen from '../screen/SettingScreen';
import MovieScreen from '../screen/MovieScreen';

const DrawerRoute = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Movie">
      <Drawer.Screen name="Movie" component={MovieScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerRoute;
