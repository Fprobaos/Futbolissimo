import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useEffect, useState } from 'react';
import Input from './Components/Input';
import EventList from './Components/Flatlist';


import { styles } from './style'; 
import { ModalContainer } from './Components';

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
      
      <EventList 
        data={events} 
        onHandlerEvent={onHandlerEvent}
       />

      <ModalContainer 
        selectedEvent={selectedEvent} 
        modalVisible={modalVisible} 
        onHandleCancelModal={onHandleCancelModal} 
        onHandleDeleteEvent={onHandleDeleteEvent}
      
      />

    </View>
  );
}

