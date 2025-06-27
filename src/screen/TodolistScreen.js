import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import TodoStore from '../Store/TodoStore';
import TouchButton from '../Component/TouchButton';

const TodolistScreen = observer(({navigation}) => {
  return (
    <View style={styles.container}>
      {TodoStore.todos.length !== 0 ? (
        <FlatList
          style={styles.flatListView}
          data={TodoStore.todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.todoItem}>
                <TouchButton
                  style={styles.title}
                  text={item.text}
                  onPress={() =>
                    navigation.navigate('TodoDetails', {item: item})
                  }
                />
              </View>
            );
          }}
        />
      ) : (
        <Text style={[styles.title, styles.titleAlign]}>Empty List</Text>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 5,
    // backgroundColor: 'red',
  },
  flatListView: {backgroundColor: 'grey'},
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleAlign: {textAlign: 'center'},
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
  },
  todoText: {
    fontSize: 18,
    color: '#000',
  },
  delete: {
    fontSize: 12,
    color: 'red',
  },
});

export default TodolistScreen;
