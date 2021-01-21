import React, {useState} from 'react'
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native'

import Dice1 from './assets/dice1.png'
import Dice2 from './assets/dice2.png'
import Dice3 from './assets/dice3.png'
import Dice4 from './assets/dice4.png'
import Dice5 from './assets/dice5.png'
import Dice6 from './assets/dice6.png'


const App = () => {
 const [uri, setUri] = useState(Dice2)
 const [uri1, setUri1] = useState(Dice3)
 const playerr = () => {
   let random= Math.floor(Math.random() * 6) + 1
   let random1= Math.floor(Math.random() * 6) + 1
   switch (random) {
     case 1:
       setUri(Dice1)
       break;
       case 2:
        setUri(Dice2)
        break;
        case 3:
          setUri(Dice3)
          break;
          case 4:
            setUri(Dice4)
            break;
            case 5:
              setUri(Dice5)
              break;
              case 6:
                setUri(Dice6)
                break;       
   
     default:
       setUri(Dice3)
       break;
   } 
    switch (random1) {
     case 1:
       setUri1(Dice1)
       break;
       case 2:
        setUri1(Dice2)
        break;
        case 3:
          setUri1(Dice3)
          break;
          case 4:
            setUri1(Dice4)
            break;
            case 5:
              setUri1(Dice5)
              break;
              case 6:
                setUri1(Dice6)
                break;       
   
     default:
       setUri(Dice3)
       break;
   } 
 }
  return (
    <>
    <View style={styles.container}>
      <Image style={styles.image} source={uri}/>
      <Image style={[styles.image,{marginTop:30}]} source={uri1}/>

  <TouchableOpacity onPress={() => {playerr()}}>  
    <Text style={styles.button}>Play!!</Text> 
   </TouchableOpacity>  
   </View>
    </>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#222831",
    alignItems:"center",
    justifyContent:"center"
  },
  image:{
    width:200,
    height:200,
  },
  button:{
    fontSize: 20,
    paddingHorizontal:40,
    paddingVertical:10,
    marginTop:30,
    color:"#F2A365",
    borderColor:"#30475E",
    borderWidth:5,
    borderRadius:3,
    fontWeight:"bold"
  }
})

export default App
