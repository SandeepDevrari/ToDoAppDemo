import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function AppBar(header){
    return(
        <View style={styles.appbar}>
            <Text style={styles.toolbar}>{header.title}</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    appbar:{
        paddingTop:30,
        backgroundColor:'coral',
        height:80
    },
    toolbar:{
        paddingHorizontal:30,
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
});