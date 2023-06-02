/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,  { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Linking,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Button, Alert,Image,
  Dimensions,
  BackHandler,
  Modal
} from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from '../css/CSS_all';
// import {Header,Left,Right,Body} from 'native-base';
// import { faBook, faDoorOpen, faHome, faMailBulk, faPen, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { CommonActions } from '@react-navigation/native';
import { Card } from "@rneui/base";
// import Lightbox from 'react-native-lightbox-v2';
// import ImageModal from 'react-native-image-modal';

// import DeviceInfo from 'react-native-device-info';
// import { Provider, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import messaging from '@react-native-firebase/messaging';




export default  main_program=({route, navigation})=>{

  const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 1/2);
const imageWidth = Math.round(dimensions.width * 1/2);
const logoWidth = Math.round(dimensions.width * 9 / 16);
  const [isLoading, setisLoading]     = useState(false);

  let [json_view_data, setjson_view_data]       =useState([]);
  let [loading_history, setloading_history] = useState(false);
  let [show_modal, setshow_modal] = useState(false);
//   let [gambar, setgambar] = useState("");
  let [halaman, sethalaman] = useState("1");
  let [show_halaman, setshow_halaman] = useState("");
  let [nama_depan, setnama_depan] = useState("");
  let [nama_belakang, setnama_belakang] = useState("");
  let [umur, setumur] = useState("");
  let [gambar, setgambar] = useState("");
  let [umur_contact, setumur_contact] = useState("");
  let [id, setid] = useState(route.params.id);
  let [start_page, setstart_page] = useState(0);
    let [end_page, setend_page] = useState(10);
    
  
  

  edit_data =()=>
  {

     // console.log("bbbb");
     axios.put('https://contact.herokuapp.com/contact/'+id,{
        "firstName" : nama_depan,
        "lastName"  : nama_belakang,
        "age"       : umur,
        "photo"     : gambar
     })
    .then(function (responseJson) {
      console.log(responseJson.data);
      if (responseJson.status == 201)
      {
        // setjson_view_data(responseJson.data.data);
        alert("Data Berhasil Disimpan")
        navigation.replace("Menu_Awal")
      }

      
    })
  }


  get_data =()=>
  {

     // console.log("bbbb");
     axios.get('https://contact.herokuapp.com/contact/'+id)
    .then(function (responseJson) {
      console.log(responseJson.data);
      if (responseJson.status == 200)
      {
        console.log(responseJson.data.data.age)
        setnama_depan(responseJson.data.data.firstName)
        setnama_belakang(responseJson.data.data.lastName)
        setumur(responseJson.data.data.age)
        setgambar(responseJson.data.data.photo)
      }

      
    })
  }

  

  validasi =()=>
  {
    let NamaDepan = nama_depan;
    let NamaBelakang = nama_belakang;
    let Age = umur;
    let Foto = gambar;

    if(NamaDepan != '' && NamaBelakang != '' && Age != ''&& Foto != '')
    {
        edit_data();
    }
    else
    {
        alert("Ada Data yang belum Diisi")
    }
  }
//   modal_show = () => {
//     return(
        
//     )
    
//   }

load_more = async() =>
{
  
}

  useEffect(async() =>
    {
      // await set_tanggal();
      get_data();
      console.log(umur)
    //   api_list_search_1();
    }, [])
  
    

  return (
    <View>
        
        <ScrollView>
            <View style={{marginBottom: 0, backgroundColor:'white'}}>
                <Text style={{color: 'black',fontWeight: 'bold',textAlign: 'center',marginTop: 10,fontSize:20}}>Edit Contact</Text>
            </View>
            <View>
                <Card containerStyle={{width: "100%", marginLeft: 0, backgroundColor : 'white'}} wrapperStyle={{}}>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'column'}}>
                            <Text>Nama Depan</Text>
                            <TextInput
                                placeholder='Nama Depan'
                                style={styles.text_input}
                                // defaultValue={data_unit[index]['tahun']}
                                value={nama_depan}
                                editable={true}
                                onChangeText={text => {
                                    setnama_depan(text)
                                }}
                            />
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <Text>Nama Belakang</Text>
                            <TextInput
                                placeholder='Nama Belakang'
                                style={styles.text_input}
                                // defaultValue={data_unit[index]['tahun']}
                                value={nama_belakang}
                                editable={true}
                                onChangeText={text => {
                                    setnama_belakang(text)
                                }}
                            />
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <Text>Umur</Text>
                            <TextInput
                                placeholder='Umur'
                                keyboardType='numeric'
                                style={styles.text_input}
                                // defaultValue={data_unit[index]['tahun']}
                                value={umur}
                                editable={true}
                                onChangeText={text => {
                                    setumur(text)
                                }}
                            />
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <Text>Gambar</Text>
                            <TextInput
                                placeholder='Gambar'
                                style={styles.text_input}
                                // defaultValue={data_unit[index]['tahun']}
                                value={gambar}
                                editable={true}
                                onChangeText={text => {
                                    setgambar(text)
                                }}
                            />
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity
                                style={{backgroundColor: 'green',width:'80%',borderRadius: 20,marginTop:10,height:40}}
                                onPress={async() =>{
                                    validasi();
                                }}>
                                <Text style={{color: 'white',fontWeight: 'bold',textAlign: 'center',marginTop: 10}}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>
            </View>
            
            
            
        </ScrollView>
        
    </View>
    );


   
}
