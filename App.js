// hi this is sankara narayanan.s i just update here bye......
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, ScrollView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Header } from './screen.js/Header';
import { ToDoitems } from './screen.js/todoitems';
import AddEvent from './screen.js/AddEvent';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function App() {
  const [nameR, RSetname] = useState([
    { name: 'GO AND BUY MILK', id: '1' },
    { name: '10:00 TO 11:00 LEARING REACT-Native', id: '2' },
    { name: 'Finish today work', id: '3' },

  ]);

  const onpresss = (id) => {
    RSetname((deli) => {
      return deli.filter(per => per.id != id)
    })
  }

  const creatingnew = (text) => {
    if (text.length > 3) {
      RSetname((crear) => {
        return [
          { name: text, id: Math.random().toString() },
          ...crear
        ]
      });
    }
    else {
      Alert.alert("Char must more then 3");
    }

  }



  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View>
          <View style={styles.container1}>
            <AddEvent creatingnew={creatingnew} />
            <View style={styles.list}>
              <FlatList
                data={nameR}
                renderItem={({ item }) => (
                  <ToDoitems itemto={item} onpresss={onpresss} />
                )}
              />
            </View>
          </View>
        </View>
      </View>
      <Button></Button>
    </TouchableWithoutFeedback>


  );
}


const styles = StyleSheet.create({
  Red: {
    backgroundColor: 'red',
    marginTop: 100,
    margin: 5,
    padding: 10,
    alignItems: 'center',
  },
  Yellow: {
    backgroundColor: 'yellow',
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  Bulk: {
    backgroundColor: 'blue',
    marginTop: 100,
    margin: 5,
    padding: 10,
    alignItems: 'center',
  },
  Pink: {

    backgroundColor: 'Pink',
    marginTop: 100,
    margin: 5,

    alignItems: 'center',
  },
  Input: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
  },
  button: {
    marginTop: 14
  },
  container: {
    flex: 1,
  },
  container1: {
    margin: 30,
  },
  itemass: {
    backgroundColor: 'pink',
    padding: 30,
    margin: 10,
    borderWidth: 3,
    borderRadius: 10
  },
  flat: {
    marginTop: 50,
  },
  textstyles: {
    marginLeft: 50,

  },
  scrool: {
    padding: 10
  },
  list: {
    height: '70%',
    paddingTop: 20,
    
  },
  forflex: {
    flex: 1,
  }
});
