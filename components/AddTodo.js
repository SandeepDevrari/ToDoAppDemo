import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Button} from 'react-native';

export default function AddTodo({addTodo}){
    const [textEntered, setTextEntered] = useState('')
    return(
        <View style={styles.container}>
            <TextInput 
            multiline
            style={styles.inputBox}
            placeholder='Enter Todo'
            onChangeText={(text)=>{
                setTextEntered(text)
            }}/>
            <Button 
            style={styles.button}
            title='Add Todo'
            onPress={()=>{
                addTodo(textEntered)
            }}/>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        borderRadius:10,
        borderStyle:'dotted',
        borderWidth:2,
        borderColor:'#000',
        paddingHorizontal:20,
        paddingVertical:10,
        marginTop:30,
        marginHorizontal:20,
        backgroundColor:'#e0e0e0'
    },
    inputBox:{
        backgroundColor:'#dfdfdf',
        color:'#000',
        fontSize:14,
        padding:10,
        borderRadius:10
    },
    button:{
        height:40,
        fontSize:16,
        fontWeight:'bold',
        borderRadius:15,
        backgroundColor:'#9a2935',
        color:'#fff',
        padding:10
    }
});