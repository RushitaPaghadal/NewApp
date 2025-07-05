import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import SettingScreen from '../screen/SettingScreen';
import MovieScreen from '../screen/MovieScreen';
import HomeScreen from '../screen/HomeScreen';

const DrawerRoute = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Movie" component={MovieScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerRoute;
