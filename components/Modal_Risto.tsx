import React, { Component, useEffect, useState, version } from 'react'
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Dimensions,
  Modal,
  ActivityIndicator,
  TextInput,
  SafeAreaView,
  ScrollView
} from 'react-native';
// import styles from '../../css/CSS_Login'??
import styles_all from '../css/CSS_all'
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { Input } from '@rneui/base';
// import { useNavigation } from '@react-navigation/native';
// import { BlurView } from '@react-native-community/blur';

//autoresize gambar
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 18);
const imageWidth = dimensions.width;

export default lookup_modal = ({data, onSelect, style, value_show, display_value}) => {
  let debug_width = 0;
  let dispatch = useDispatch();
  let navigation = useNavigation();
  
  // VARIABEL COMPONENT
  let [search_bar, setsearch_bar]           = useState();
  let [visible, setvisible]                 = useState(false);
  let [valuecomponent, setvaluecomponent]   = useState("");
  let [filter_by, setfilter_by]             = useState("");
  
  
  //untuk bagian title bar
  const navigationOptions = {
    title: 'lookup_modal',
    headerStyle: {
      backgroundColor: '#FAD642',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  useEffect(()=>{
    // if (value_show == undefined || value_show=="") {
    // }
    // else {
    //   setvaluecomponent(value_show);
    // }
    setvaluecomponent(value_show);
  })

  

  return (
    <View>
      <Modal
          animationType="fade"
          transparent={true}
          visible={show_modal}
          onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setshow_modal(!show_modal);
              setgambar("");
            }}
      >
          {/* <View> */}
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  <Image
                      source={{
                          uri: gambar,
                          width: '95%',
                          height: '95%'
                      }}
                  />
                      <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setshow_modal(!show_modal)}>
                      <Text style={styles.textStyle}>Hide Modal</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          {/* </View> */}
      </Modal>
    </View>
  );

  
}