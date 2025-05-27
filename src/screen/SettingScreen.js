import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function SettingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});