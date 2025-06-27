import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TouchButton = ({style, text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.view}>
      <Text style={[style, styles.text]}>{text}</Text>
      {/* Or use an icon component here */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {marginRight: 10},
  text: {fontWeight: 'bold', fontSize: 20, color: '#fff'},
});

export default TouchButton;
