import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';



const App=  () => {
  // const [randomColor,setRandomColor] = useState('rgb(32,0,145)')
  const [randomColor, setRandomColor] = useState("rgb(32,0,145)")
  const changeBG =() =>{
    let color="rgb(" + Math.floor(Math.random() * 256) + "," 
    + Math.floor(Math.random() * 256) + ","
    + Math.floor(Math.random() * 256) + ")"
    setRandomColor(color)
  }
  const changeB =() =>{
    setRandomColor("rgb(0,0,0)")
  }
  return (
    <>
    <StatusBar style={{backgroundColor:randomColor}}/>
    <View style={[styles.container,{backgroundColor:randomColor}]}>
     <TouchableOpacity onPress={() => { changeBG()}}>
     <Text style={[{color:"#fff"},styles.text]}>Tap Me!!</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => { changeB()}}>
     <Text style={[{color:"#fff", marginTop:50},styles.text]}>Reset!</Text>
</TouchableOpacity>
    </View>
    </>
  );
};

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    fontSize:30,
    paddingHorizontal:40,
    paddingVertical:10,
    borderRadius:15,
    borderColor:"#fff",
    backgroundColor:"#BB2CD9"
  }
})


export default App;
