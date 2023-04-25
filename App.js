import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import { styles } from './style'; 
import { useState } from 'react';

export default function App() {

  const [text, setText] = useState('')
  const [events, setEvents] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const onAddList = () => {
    if(text.length > 0)
    return(
      setEvents( [ ...events, {id: Math.random().toString(), value: text}]),
      setText('')

    )
  }  

  const onHandlerEvent = (id) => {
    setModalVisible(true);
    const selectedEvent = events.find(event => event.id === id)
    setSelectedEvent(selectedEvent)
  }

  const renderItem = ({item}) => ( 
    // aca hay un return implicito por eso los (). El render Item retorna un componente
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerEvent(item.id)}>
        <Text style={styles.item}> {item.value} </Text>
    </TouchableOpacity>
  )

  const onHandleCancelModal = () => {
    setModalVisible(!modalVisible)
    setSelectedEvent(null)
  }

  const onHandleDeleteEvent = (id) => {
    setModalVisible(!modalVisible)
    setEvents(events.filter(event => event.id !== id))

  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your email' 
          style={styles.input} 
          value={text} 
          onChangeText={(text) => setText(text)}/>
        <Button title='Add' color={'#6761A8'} onPress={onAddList}/>
        <Text />
      </View>
      <View style={styles.listContainer}>
        <FlatList renderItem={renderItem} data={events} keyExtractor={(item) => item.id}/>          
      </View>


      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}> Event Detail</Text>

          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>queres borrar este item?</Text>
            <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
          </View>

          <View style={styles.modalButtonContainer}> 
            <Button title='Cancel' color='#52528C' onPress={() => onHandleCancelModal()} />
            <Button title='Delete' color='#FF0011' onPress={() => onHandleDeleteEvent(selectedEvent.id)} />
          </View>

        </View>
      </Modal>
    </View>
  );
}

