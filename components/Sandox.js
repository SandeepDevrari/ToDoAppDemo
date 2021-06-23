import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.textOne}>One</Text>
            <Text style={styles.textTwo}>Two</Text>
            <Text style={styles.textThree}>Three</Text>
            <Text style={styles.textFour}>Four</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:40,
        paddingHorizontal:20,
        backgroundColor:'#ddd'
    },
    textOne:{
        backgroundColor:'#ff0080',
        padding:10
    },
    textTwo:{
        backgroundColor:'#8000ff',
        padding:20
    },
    textThree:{
        backgroundColor:'#00ff40',
        padding:30
    },
    textFour:{
        backgroundColor:'#800000',
        padding:40
    }
});