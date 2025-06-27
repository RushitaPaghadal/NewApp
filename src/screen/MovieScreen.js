import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';

const MovieScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Movie Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    textAlign: 'center',
  },
});

export default MovieScreen;
