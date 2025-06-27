/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-reanimated'; // Mandate to import 

// import StackRoute from './src/Route/StackRoute';
// import TabRoute from './src/Route/TabRoute';
import DrawerRoute from './src/Route/DrawerRoute';

function App(): React.JSX.Element {
  // console.disableYellowBox ();

  return (
    <NavigationContainer>
      {/* <StackRoute /> */}
      {/* <TabRoute /> */}
      <DrawerRoute />
    </NavigationContainer>
  );
}

export default App;
