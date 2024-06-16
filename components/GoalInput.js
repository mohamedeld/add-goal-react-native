import React, { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ visible,addGoal,handleCloseModal }) => {
  const [goalText, setGoalText] = useState('');
  function goalInputHandle(enteredText) {
    setGoalText(enteredText);
  }
  function handleAddGoal() {
    addGoal(goalText);
    setGoalText('');
    handleCloseModal();
  }
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputs}>
        <Image  style={styles.inputsImage} source={require('../assets/images/goal.png')}/>
        <TextInput style={styles.textInput} placeholder='enter your goal' onChangeText={goalInputHandle} value={goalText} />
        <View style={styles.buttons}>
          <Button title="Add Goal" onPress={handleAddGoal} />
          <Button title="Cancel" color={"red"} onPress={handleCloseModal}/>
          </View>
      </View>
    </Modal>


  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
    backgroundColor:'#311b6b'
  },
  inputsImage:{
    width:100,
    height:100,
    margin:20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: "70%",
    paddingHorizontal: 10,
  },
  buttons:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:20,
    alignItems:"center",
   gap:20
  }
})