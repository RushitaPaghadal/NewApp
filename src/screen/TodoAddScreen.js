import {observer} from 'mobx-react-lite';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import TodoStore from '../Store/TodoStore';

const TodoAddScreen = observer(({navigation}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={TodoStore.newTodo}
        onChangeText={(text) => TodoStore.setNewTodo(text)}
        keyboardType="default"
        placeholder="Add a new task..."
      />
      <Button
        style={styles.button}
        title="Add Todo"
        onPress={() => {
          TodoStore.addTodo();
          navigation.goBack();
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  input: {
    borderWidth: 0,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: 100,
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    
  },
});

export default TodoAddScreen;
