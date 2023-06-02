import {StyleSheet} from 
'react-native';
export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        // margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height:'100%',
        width:'100%'
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop:10
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      text_input: {
        padding: 10, 
        borderWidth: 1,
        borderRadius: 5,
        width:'100%'
      },
})