import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';


const Home = () =>
{
    return(
        <Card style={sabk.mycard}>
            <Text>Hi this is Sankara narayanan.S</Text>
            <Text>Im from Ambattur</Text>
        </Card>
        
    );
    
}
function San()
{
    return(
        <Card style={sabk.SecCard}>
        <Text>Hi this is Sankara narayanan.S</Text>
        <Text>Im from Ambattur</Text>
    </Card>
    );
}

const sabk = StyleSheet.create
({
    mycard:{
        marginTop:120,
        padding:50,
        backgroundColor:'#FF0000' 
        
    },
    SecCard:{
        marginTop:20,padding:50,backgroundColor:'#AA4A44'
    }
})

export {Home,San};