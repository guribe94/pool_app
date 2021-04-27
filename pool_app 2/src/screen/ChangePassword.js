import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, StatusBar, TouchableOpacity, Button } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { baseUrl } from '../constant/Constants'
import Icon from 'react-native-vector-icons/Entypo';

const LoginScreen = (props) => {

  const [show, setShow] = useState(false)
  const [shows, setShowss] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const setShows = () => {
    setShow(!show)
  }

  const setConfirm = () => {
    setShowss(!shows)
  }

  const submit = () => {
   
    if (currentPassword == '' && newPassword == '' && confirmPassword == '') {
      alert("Please Enter all Fields")
    }
    else if (currentPassword == '') {
      alert("Please Enter your Current password")
    }
    else if (newPassword == '') {
      alert("Please Enter New Password")
    }
    else if (confirmPassword == '') {
      alert("Please Enter Confirm Password")
    }
    else {
      props.navigation.navigate('Login')
      
    
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(41,52,98)' }}>
      <TouchableOpacity onPress={()=> props.navigation.goBack()} style={{top:50,justifyContent:"flex-end",flexDirection:"row",right:20}}> 
        <Image style={{ height: hp('2.2%'), width: wp('7.5%') }} source={require('../images/backarrow.png')}></Image>
        </TouchableOpacity>
      <View style={{ alignItems: "center", marginTop: "40%" }}>
        <Text style={{ fontSize: 35, color: "#fff" }}>Change Password</Text>
      </View>

      <View style={{
        height: hp("6%"), width: wp("80%"), backgroundColor: "#fff", borderRadius: 30,
        marginTop: "10%", alignSelf: "center"
      }}>
        <TextInput
        value={currentPassword}
          placeholder="Enter Current password"
          style={{ left: 15, marginTop: "5%" }}
          placeholderTextColor='rgb(170, 171, 173)'
          onChangeText={(text) => setCurrentPassword(text)} />


      </View>

      <View style={{
        height: hp("6%"), width: wp("80%"), backgroundColor: "#fff", borderRadius: 30,
        marginTop: "10%", alignSelf: "center"
      }}>
        <TextInput
         value={newPassword}
          placeholder="Enter New password"
          style={{ left: 15, marginTop: "5%" }}
          placeholderTextColor='rgb(170, 171, 173)'
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry={show == false ? false : true}
        />

        <Icon name={show ? "eye" : 'eye-with-line'} style={{ marginLeft: "86%", bottom: 16 }} size={20}
          color="rgb(143,143,143)" onPress={() => setShows()} />
      </View>

      <View style={{
        height: hp("6%"), width: wp("80%"), backgroundColor: "#fff", borderRadius: 30,
        marginTop: "10%", alignSelf: "center"
      }}>
        <TextInput
        value={confirmPassword}
          placeholder="Enter Confirm password"
          style={{ left: 15, marginTop: "5%" }}
          placeholderTextColor='rgb(170, 171, 173)'
          onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={shows == false? false : true}
        />
        <Icon name={shows ? "eye" : 'eye-with-line'} style={{ marginLeft: "86%", bottom: 16 }} size={20}
          color="rgb(143,143,143)" onPress={() => setConfirm()} />
      </View>
      <TouchableOpacity onPress={() => submit()} style={{
        borderRadius: 24, width: wp('50%'), alignSelf: 'center', height: hp("6%"),
        backgroundColor: 'rgb(0,128,138)', marginTop: 40
      }}>
        <Text style={{
          fontSize: 20, textAlign: 'center', color: '#fff', padding: 13
        }}>Submit</Text>
      </TouchableOpacity>






    </View>










  );
}







export default LoginScreen;