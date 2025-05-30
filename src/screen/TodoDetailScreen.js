import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import TouchButton from '../Component/TouchButton';
import TodoStore from '../Store/TodoStore';
import {useRoute} from '@react-navigation/native';

const TodoDetailScreen = ({navigation}) => {
  const route = useRoute();
  const item = route.params.item;
  const [title, setTitle] = useState(item.text);

  return (
    <View>
      <TextInput
        style={styles.title}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <View style={styles.buttonView}>
        <TouchButton
          style={styles.button}
          text="Edit"
          onPress={() => {
            TodoStore.editTodo(item.id, title);
            navigation.goBack();
          }}
        />
        <TouchButton
          style={styles.button}
          text="Delete"
          onPress={() => {
            TodoStore.removeTodo(item.id);
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: 15,
    margin: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#1e90ff',
  },
});

export default TodoDetailScreen;
