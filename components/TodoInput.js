import React, {useState} from 'react';
import {View, Button, TextInput, Text, StyleSheet, Modal} from 'react-native';


const TodoInput = props => {
  const [todo, setTodo] = useState('');

  const todoInputHandler = (enteredText) => {
    setTodo(enteredText);
  };

  const addTodoHandler = () => {
    props.onAddTodo(todo);
    setTodo('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      
    <View style={styles.inputContainer}>
      <Text style={{marginBottom: 40}}>Create A Todo!</Text>
       <TextInput
       placeholder='ToDo' 
       style={styles.tInput}
       onChangeText={todoInputHandler} 
       value={todo}
       />
       <View style={styles.buttonContainer}>
       <Button title='ADD' onPress={addTodoHandler} />
       <Button title='CANCEL' color= 'red' onPress={props.onCancel} /> 
       </View>
      
      </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  tInput: {
    width: '80%' , 
    borderColor:'black', 
    borderWidth: 1, 
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'center'
  }
}) 

export default TodoInput;