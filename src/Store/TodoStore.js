import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeAutoObservable} from 'mobx';

class TodoStore {
  todos = [];
  newTodo = '';

  constructor() {
    makeAutoObservable(this);
   this.getTodo();
  }

  setNewTodo(text) {
    this.newTodo = text;
  }

  async getTodo() {
    const jsonValue = await AsyncStorage.getItem('todosArray');
    this.todos = jsonValue != null ? JSON.parse(jsonValue) : [];

  }

  async addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({id: Date.now(), text: this.newTodo});
      AsyncStorage.setItem('todosArray', JSON.stringify(this.todos));
      const jsonValue = await AsyncStorage.getItem('todosArray');
      this.newTodo = '';
      console.log('json', jsonValue);
      this.getTodo();
    }
  }

  async editTodo(id, text) {
    const jsonValue = await AsyncStorage.getItem('todosArray');
    this.todos = JSON.parse(jsonValue);
    const index = this.todos.findIndex(item => item.id === id);
    const updatedItems = [...this.todos]; // create a copy

    updatedItems[index].text = text;  // modify the value
    this.todos = updatedItems;

    AsyncStorage.setItem('todosArray', JSON.stringify(this.todos));
    this.getTodo();

  }

  async removeTodo(id) {
    const jsonValue = await AsyncStorage.getItem('todosArray');
    this.todos = JSON.parse(jsonValue);
    this.todos = this.todos.filter(todo => todo.id !== id);
    AsyncStorage.setItem('todosArray', JSON.stringify(this.todos));
  }
}

export default new TodoStore();
