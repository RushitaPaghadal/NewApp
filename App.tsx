/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import StackRoute from './src/Route/StackRoute';
import TabRoute from './src/Route/TabRoute';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <StackRoute /> */}
      <TabRoute />
    </NavigationContainer>
  );
}

export default App;
