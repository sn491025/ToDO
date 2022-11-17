import { useState, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList, Button } from 'react-native';
import { Card } from 'react-native-paper';

export default function AddEvent({creatingnew}) {

    const [items, setEvent] = useState(' ');
    const changer = (val) => {
        setEvent(val);
    }
    return (
        <View style={Additemstyle.but}>
            <TextInput
                placeholder='Enter new todo...'
                onChangeText={changer}
                style={Additemstyle.inputtext}
            />
         <Button style={Additemstyle.button} onPress={() => creatingnew(items)} title="NEW ToDO" color={'#002BFF'}></Button>
        </View>
    );


}
const Additemstyle = StyleSheet.create({
    inputtext: {
        margin: 20,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#B5B5B6',
        padding: 20,
        
    },
    but: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    button: {
        textAlign:'center',
        backgroundColor:'#183CF0',
        borderWidth: 20,
        borderRadius:10,
        color:' #FFFFFF ',
    }
   
});
