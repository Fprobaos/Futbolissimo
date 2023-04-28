import { Button, Modal, Text, View } from "react-native"

import {styles} from './style'

const ModalContainer = ({selectedEvent, modalVisible, onHandleCancelModal, onHandleDeleteEvent}) => {
  return (
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
  )
}

export default ModalContainer