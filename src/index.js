import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import Input from './Components/Input';


import { styles } from './style'; 

export default function App() {

  const [text, setText] = useState('')
  const [events, setEvents] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  

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

  const onAddList = () => {
    if(text.length > 0) 
      setEvents([...events, {id: Math.random().toString(), value: text}]);

      setText('')
    
     
    }
    
  return (
      <View style={styles.container}>
      <Input
        buttonColor='#52528C'
        buttonTitle='Add'
        placeholder='Enter your email'
        value={text}
        onChangeText={(text) => setText(text)}
        onAddList={onAddList}

      />
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

