import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  
  
  listContainer: {
      flex: 1,
      backgroundColor: '#fff',
      marginVertical: 20,
  },
  itemContainer: {
      height: 80,
      justifyContent: 'center',
      backgroundColor: '#52528C',
      borderRadius: 5,
      marginVertical: 5,
  },

  item: {
      marginHorizontal: 10,
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  },

  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    paddingVertical: 20
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  modalDetailContainer: {
    paddingVertical: 20,

  },
  modalDetailMessage:{
    fontSize: 14,
    color: ''

  },

  selectedEvent:{
    fontSize: 14,
    color: '#FF0011',
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
    marginBottom: 20,
  },

  modalButtonContainer:{
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around'

  }
  });
  
