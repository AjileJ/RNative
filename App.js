import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';


export default function App() {
 
 const [myTodos, setMyTodos] = useState([]);
 const [isAddMode, setIsAddMode] = useState(false);



 const addTodoHandler = (todoTitle) => {
   setMyTodos(currentTodo => [
     ...currentTodo,
     {id: Math.random().toString(), value: todoTitle}
   ]);
   setIsAddMode(false);
 };

 const removeTodoHandler = todoId => {
   setMyTodos(currentTodo => {
     return currentTodo.filter((todo) => todo.id !== todoId);
   });
 };

 const cancelTodo = () => {
   setIsAddMode(false);
 }

  return (
    <View style={styles.screen}>
    <Text style={{color: 'black', paddingBottom: 15, textAlign:'center', fontSize: 20}}>Jordan's Todo App!</Text>
      <Button title='add new Todo' onPress={() => setIsAddMode(true)}/>
      <TodoInput visible={isAddMode} onAddTodo={addTodoHandler} onCancel={cancelTodo}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={myTodos} 
        renderItem={itemData => (
        <TodoItem 
        id={itemData.item.id}
        onDelete={removeTodoHandler} 
        title={itemData.item.value}
        />
        )}
      />
    </View>
  );
} 

const styles = StyleSheet.create({
  screen: {
    padding: 50
  } , 
})


