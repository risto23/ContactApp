/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,  { Component, useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import styles from '../css/CSS_all';
import { Card } from "@rneui/base";
import axios from 'axios';




export default  main_program=({route, navigation})=>{

  let [json_view_data, setjson_view_data]       =useState([]);
  let [loading_history, setloading_history] = useState(false);
  let [show_modal, setshow_modal] = useState(false);
  let [nama_depan, setnama_depan] = useState("");
  let [nama_belakang, setnama_belakang] = useState("");
  let [umur, setumur] = useState("");
  let [gambar, setgambar] = useState("");
    
  save_data =()=>
  {

     axios.post('https://contact.herokuapp.com/contact',{
        "firstName" : nama_depan,
        "lastName"  : nama_belakang,
        "age"       : umur,
        "photo"     : gambar
     })
    .then(function (responseJson) {
      console.log(responseJson.data);
      if (responseJson.status == 201)
      {
        alert("Data Berhasil Disimpan")
        navigation.replace("Menu_Awal")
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
        save_data();
    }
    else
    {
        alert("Ada Data yang belum Diisi")
    }
  }

  useEffect(async() =>
  {
    get_data();
  }, [])
  

  return (
    <View>
        <ScrollView>
            <View style={{marginBottom: 0, backgroundColor:'white'}}>
                <Text style={{color: 'black',fontWeight: 'bold',textAlign: 'center',marginTop: 10,fontSize:20}}>New Contact</Text>
            </View>
            <View>
                <Card containerStyle={{width: "100%", marginLeft: 0, backgroundColor : 'white'}} wrapperStyle={{}}>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'column'}}>
                            <Text>Nama Depan</Text>
                            <TextInput
                                placeholder='Nama Depan'
                                style={styles.text_input}
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
