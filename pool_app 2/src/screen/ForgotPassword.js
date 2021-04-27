import React, { Component, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { baseUrl } from '../constant/Constants'



const ForgotPassword = (props) => {

  const [email, setEmail] = useState('')


  const sendEmail = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == '') {
      alert("Please Enter Your Email Address")
    }
    else if (!re.test(email)) {
      alert("Email not valid")
    }
    
    else{
      props.navigation.navigate('Dashboard')
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(41,52,98)' }}>
      {/* <StatusBar hidden /> */}
      <Image style={{ width: wp('73%'), height: hp('33%'), position: 'absolute', top: -10 }} source={require('../images/imageTop.png')} />


      <Image style={{ width: wp('100%'), height: hp('15%'), justifyContent: 'flex-end', alignSelf: 'flex-end', bottom: 0, position: 'absolute' }} source={require('../images/imageBottom.png')} />
      <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ flex: 1, marginTop: "20%", justifyContent: "flex-end", alignSelf: "flex-end", right: 40 }}>
        <Image style={{ height: hp('2.2%'), width: wp('7.5%') }} source={require('../images/backarrow.png')}></Image>
      </TouchableOpacity>
      <View style={{ marginTop: '45%' }}>
        <Text style={{ fontSize: 30, color: '#fff', alignSelf: 'center', }}>Forgot Password</Text>

        <View style={{ width: wp('90%'), height: 50, backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 50 }}>

          <TextInput
            value={email}
            placeholder="Enter your email address"
            style={{ marginLeft: 10, padding: 15 }}
            placeholderTextColor='rgb(170, 171, 173)'
            onChangeText={(text) => setEmail(text)}
            keyboardType='default'
          />

        </View>

        <TouchableOpacity onPress={() => sendEmail()} style={{ width: '40%', height: 50, backgroundColor: 'rgb(0,128,138)', borderRadius: 24, marginTop: '14%', alignSelf: 'center', }}>
          <Text style={{ fontSize: 24, color: '#fff', textAlign: 'center', textAlignVertical: 'center', padding: 7 }}>Submit</Text>
        </TouchableOpacity>

      </View>
    </View>

  );
}
export default ForgotPassword;