import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';


const ToDoitems = ({ itemto, onpresss }) => {
    return (

        <TouchableOpacity>
                <View style={stylestodo.items}>
                    <Text style={stylestodo.fortextsize}>{itemto.name}</Text>
                    <MaterialIcons name='delete' size={25} color='#A81818' onPress={() => onpresss(itemto.id)} />
                </View>

                {/* <Button  onPress={() => onpresss(itemto.id)} >D</Button> */}
        </TouchableOpacity>
        
    )
}

const stylestodo = StyleSheet.create({
    items: {
        flex: 1,
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // but: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    button: {
        backgroundColor: '#EEA1A1',
        color: '#FB0A0A',
        padding: 1,
    },
    fortextsize: {
        width: 250,
    }
})






export { ToDoitems };
