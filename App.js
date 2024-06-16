import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [openModal,setOpenModal] = useState(false);
  const [goals,setGoals] = useState([]);
  
  function handleOpenModal(){
    setOpenModal(true);
  }
  function handleCloseModal(){
    setOpenModal(false);
  }

  function addGoal(goalText){
    if(goalText?.trim() === ""){
      return;
    }
    setGoals(prev=> [...prev,{text:goalText,id:Math.random()?.toString() }]);
  }
  function handleDelete(id){
    setGoals(prev=> prev?.filter(item=> item?.id !== id));
  }
  return (
    <View style={styles.container}>
      <Button title="Add Goal" color={"purple"} onPress={handleOpenModal}/>
      <GoalInput visible={openModal} addGoal={addGoal} handleCloseModal={handleCloseModal}/>
      
      <View style={styles.goals}>
        <FlatList data={goals} renderItem={(itemData)=> {
         return (
          <GoalItem handleDelete={handleDelete} itemData={itemData?.item?.text} id={itemData?.item?.id}/>
         )
        }}  keyExtractor={(item,index)=> {
          return item?.id
        }}/>
        {/* {goals?.length > 0 ? goals?.map((item,index)=>{
            return (
              <View key={`item+${index}`}>
                <Text >{item}</Text>
              </View>
            )
          }): <Text>No Items...</Text>} */}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16
  },
  
  
  goals:{
    flex:5
  },
  items:{
  
  }
});
