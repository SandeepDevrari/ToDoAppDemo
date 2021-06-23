import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import AppBar from './components/HeaderComponent';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandox';

export default function App() {
  
  const [todoList, setTodoList] = useState([
    {todo:'buy coffee',id:'1'},
    {todo:'develop app',id:'2'},
    {todo:'do somthing',id:'3'}
  ]);

  const todoRemove=(id)=>{
    setTodoList((todoPre)=>{
      return todoPre.filter((todoItem)=>{
          return(
            todoItem.id!=id
          );
        });
    });
  }

  const todoAdd=(text)=>{
    Keyboard.dismiss()
    if(text.toString().trim().length<1){
      Alert.alert('alert', 'todo can not be blank',[
        {text:'Ok', onPress:()=>console.log('')}
      ])
    }else{
      setTodoList((todoPre)=>{
        return(
          [
            {todo:text, id:Math.random().toString()},...todoPre
          ]
        );
      });
    }
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
     onPress={()=>{
       Keyboard.dismiss();
     }}>
      <View style={styles.container}>
      <AppBar title='My Todo'/>
      <View style={styles.addTodo}>
      <AddTodo
      addTodo={todoAdd}/>
      <View  style={styles.list}>
      <FlatList
      keyExtractor={(item)=>(
        item.id
      )}
      data={todoList}
      renderItem={({item})=>{
        return(
        <TodoItem data={item} removeTodo={todoRemove}/>
      );}}/>
      </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },
  addTodo:{
    flex:1
  },
  list:{
    flex:1,
    paddingVertical:10,
    margin:10
  }
});
