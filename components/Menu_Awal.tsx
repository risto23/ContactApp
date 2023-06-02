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
  let [gambar, setgambar] = useState("");
  let [halaman, sethalaman] = useState("1");
  let [show_halaman, setshow_halaman] = useState("");
  let [start_page, setstart_page] = useState(0);
    let [end_page, setend_page] = useState(10);
  
  

  get_data =()=>
  {

     // console.log("bbbb");
     axios.get('https://contact.herokuapp.com/contact')
    .then(function (responseJson) {
      console.log(responseJson.data);
      if (responseJson.status == 200)
      {
        setjson_view_data(responseJson.data.data);
      }

      
    })
  }
//   modal_show = () => {
//     return(
        
//     )
    
//   }

load_more = async() =>
{
  
}

  hapus_data =(id)=>
  {

     console.log(id);
     axios.delete('https://contact.herokuapp.com/contact/'+id)
    .then(function (responseJson) {
      console.log(responseJson.data);
      get_data();
    //   if (responseJson.status == 200)
    //   {
    //     // console.log(responseJson.data.data.age)
    //     // setnama_depan(responseJson.data.data.firstName)
    //     // setnama_belakang(responseJson.data.data.lastName)
    //     // setumur(responseJson.data.data.age)
    //     // setgambar(responseJson.data.data.photo)
    //   }

      
    })
  }

  useEffect(async() =>
    {
      // await set_tanggal();
      get_data();
    //   api_list_search_1();
    }, [])
  
    show_data = () => 
    {
        return json_view_data.map((item) =>{
            return(
                <ScrollView>
                    <Card containerStyle={{width: "100%", marginLeft: 0, backgroundColor : 'white'}} wrapperStyle={{}}>
                        <View>
                            <Card containerStyle={{width: "100%", marginLeft: 0, backgroundColor : 'white'}} wrapperStyle={{}}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:1,flexDirection:'column'}}>
                                            <View style={{flex:1, alignItems: 'center'}}>
                                                
                                                        <Image
                                                        style={{
                                                            width: imageWidth,
                                                            height: imageHeight,
                                                            flex: 1
                                                        }}
                                                            source={{
                                                                uri: item.photo
                                                            }}
                                                            // resizeMode= "contain"
                                                        />
                                            </View>
                                            <View style={{flex:1,flexDirection:'row'}}>
                                                <View style={{flex:1}}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 ,color:'#000000',}}>ID</Text>
                                                </View>
                                                <View style={{flex:1}}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 ,color:'#000000',}}>: {item.id}</Text>
                                                </View>
                                            </View>
                                            <View style={{flex:1,flexDirection:'row'}}>
                                                <View style={{flex:1}}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 ,color:'#000000',}}>Nama</Text>
                                                </View>
                                                <View style={{flex:1}}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 ,color:'#000000',}}>: {item.firstName} {item.lastName}</Text>
                                                </View>
                                            </View>
                                            <View style={{flex:1,flexDirection:'row'}}>
                                                <View style={{flex:1}}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 ,color:'#000000',}}>Umur</Text>
                                                </View>
                                                <View style={{flex:1}}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 ,color:'#000000',}}>: {item.age}</Text>
                                                </View>
                                            </View>
                                            <View style={{flex:1,flexDirection:'row'}}>
                                                <View style={{flex:1}}>
                                                    <TouchableOpacity
                                                        style={{backgroundColor: '#2196F3',width:'80%',borderRadius: 20,marginTop:10,height:40}}
                                                        onPress={async() =>{
                                                            navigation.navigate('Edit_Data',item)
                                                        }}>
                                                        <Text style={{color: 'white',fontWeight: 'bold',textAlign: 'center',marginTop: 10}}>EDIT</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{flex:1}}>
                                                        <TouchableOpacity
                                                            style={{backgroundColor: 'red',width:'80%',borderRadius: 20,marginTop:10,height:40}}
                                                            onPress={() =>Alert.alert(
                                                                'CONFIRMATION',
                                                                'Are You Sure?',
                                                                [
                                                                {
                                                                    text: 'OK',
                                                                    onPress: () => {
                                                                        hapus_data(item.id)
                        
                                                                    }
                                                                },
                                                                {
                                                                    text: 'CANCEL',
                                                                },
                                                                ],
                                
                                                                {
                                                                cancelable: true
                                                                }
                                                                )}>
                                                            <Text style={{color: 'white',fontWeight: 'bold',textAlign: 'center',marginTop: 10}}>Hapus</Text>
                                                        </TouchableOpacity>
                                                </View>
                                            </View>
                                           
                                            
                                            
                                        </View>
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </Card>
                    
                </ScrollView>
                
                
            )
        }) 
    }

  return (
    <View>
        <View style={{marginBottom: 0, backgroundColor:'white'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1, flexDirection: 'row'}}>
                    
                    <View style={{flex:1,marginTop:5,alignItems:'center'}}>
                        <TouchableOpacity
                            style={{backgroundColor: 'green',width:'80%',borderRadius: 20,marginTop:10,height:40}}
                            onPress={async() =>{
                                navigation.navigate('Add_Data')
                            }}>
                            <Text style={{color: 'white',fontWeight: 'bold',textAlign: 'center',marginTop: 10}}>New Contact</Text>
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
                <View style={{flex:1,marginLeft: 5,alignItems:'center'}}>
                        <TouchableOpacity
                            style={{backgroundColor: 'grey',width:'80%',borderRadius: 20,marginTop:10,height:40}}
                            onPress={async() =>{
                                get_data();
                            }}>
                            <Text style={{color: 'white',fontWeight: 'bold',textAlign: 'center',marginTop: 10}}>Refresh</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
        <ScrollView>
            {show_data()}
            
            
        </ScrollView>
        
    </View>
    );


   
}
