import React, {useState} from 'react'
import {
  StyleSheet, 
  Text, 
  View,
  Button
} 
from 'react-native'

export default function App(){
  const [name, setName] = useState('Ricky');
  const [about, setAbout]= useState({name: 'Ricky noviansyah', age: 18});

  const clickHandler = () =>{
    setName('Ricky noviansyah')
    setAbout({name:'ricky', age:20});
  }

  return (
    <View style={styles.container}>
      <Text>Hello, My name is {name}</Text>
  <Text>Hi My Name is {about.name} and his age {about.age}</Text>
      <View style={styles.button}>
        <Button title='Update State' onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
   flex :1,
   backgroundColor:'green',
   alignItems: 'center',
   justifyContent: 'center',
   fontSize:50
 },
 button :{
   marginTop:25,

   

 }
});