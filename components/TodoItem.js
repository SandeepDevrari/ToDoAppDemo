import React, {useState} from 'react';
import { View, Text , TouchableOpacity, StyleSheet, Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons' 

export default function TodoItem({data, removeTodo}){
    return(
        <View style={styles.itemContainer}>
            <Text style={styles.item}>
                {data.todo}
            </Text>
            <TouchableOpacity
                onPress={()=>removeTodo(data.id)}>
                <MaterialIcons name='delete'
                    size={18}
                    color='red' />
            </TouchableOpacity>
        </View>
        
    );
}

const styles=StyleSheet.create({
    itemContainer:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderColor:'#bbb',
        borderWidth:2,
        borderStyle:'dashed',
        borderRadius:10,
        marginHorizontal:20,
        marginTop:10,
        flexDirection:'row'
    },
    item:{
        fontSize:14,
        color:'#000',
        textAlign:'center',
        marginEnd:10
    }
})