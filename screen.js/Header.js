import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';

const Header = () =>
{
    return(
        <View style={sabk.headerstyle}>
            <Text style={sabk.textstyle}>ToDo</Text>
        </View>
    );
    
}
// function San()
// {
//     return(
//         <Card style={sabk.SecCard}>
//         <Text>Hi this is Sankara narayanan.S</Text>
//         <Text>Im from Ambattur</Text>
//     </Card>
//     );
// }

const sabk = StyleSheet.create
({
    headerstyle: {
        backgroundColor: '#2952EA',
        padding: 50,
        paddingLeft:30
    },
    textstyle: {
        color: '#fff',
        fontSize: 50,
    }
})

export {Header};