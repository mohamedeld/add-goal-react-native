import { Pressable, StyleSheet, Text, View } from "react-native"

const GoalItem = ({itemData,handleDelete,id}) => {
  return (
    <Pressable android_ripple={{color:'#dddddd '}} onPress={()=> handleDelete(id)} style={({pressed})=> pressed && styles.itemPress }>

    <View style={styles.itemStyle}>
    <Text style={styles.itemText} >{itemData}</Text>
  </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  itemStyle:{
    backgroundColor:'purple',
    marginBottom:2,
  },
  itemPress:{
    opacity:0.5
  },  
  itemText:{
    padding:4,
    color:'#fff'
  }
})