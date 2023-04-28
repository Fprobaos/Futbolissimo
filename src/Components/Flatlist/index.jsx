
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

import {styles} from './style'

const EventList = ({data, onHandlerEvent}) => {

    const renderItem = ({item}) => ( 
        <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerEvent(item.id)}>
            <Text style={styles.item}> {item.value} </Text>
        </TouchableOpacity>
      )
      
  return (
    <View style={styles.listContainer}>
        <FlatList renderItem={renderItem} data={data} keyExtractor={(item) => item.id}/>          
    </View> 
  )
}

export default EventList