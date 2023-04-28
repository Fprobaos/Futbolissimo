import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

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
    
      },

})