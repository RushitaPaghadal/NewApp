/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect } from 'react';
import 'react-native-reanimated'; // Mandate to import

// import StackRoute from './src/Route/StackRoute';
// import TabRoute from './src/Route/TabRoute';
import DrawerRoute from './src/Route/DrawerRoute';
import {Linking} from 'react-native';
import StackRoute from './src/Route/StackRoute';

function App(): React.JSX.Element {
  const linking = {
    // enabled: 'auto' /* Automatically generate paths for all screens */,
    prefixes: ['myapp://', 'https://myapp.com'],
    config: {
      screens: {
        Todo: 'Todo',
        TodoAdd: 'TodoAdd',
        NotFound: '*',
      },
    },
  };

  // useEffect(() => {
  //   const handleDeepLink = ({url}) => {
  //     console.log('Received deep link:', url);
  //   };

  //   const sub = Linking.addEventListener('url', handleDeepLink);
  //   return () => sub.remove();
  // }, []);
  // console.disableYellowBox ();

  return (
    <NavigationContainer linking={linking}>
      <StackRoute />
      {/* <TabRoute /> */}
      {/* <DrawerRoute /> */}
    </NavigationContainer>
  );
}

export default App;
