import React, { Component, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, StatusBar, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { baseUrl } from '../constant/Constants'
import SpinnerModal from '../component/SpinnerModal'


const SignupScreen = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isLoadingg, setLoading] = useState(false)

  const SignIn = () => {
    props.navigation.navigate('Login')
  }


  const SignUp = () => {
    props.navigation.navigate('Interest')
    
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(41,52,98)' }}>
      <StatusBar hidden />
      <Image style={{ width: wp('73%'), height: hp('33%'), position: 'absolute', top: -10 }} source={require('../images/imageTop.png')} />


      
      <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ flex: 1, marginTop: "20%", justifyContent: "flex-end", alignSelf: "flex-end", right: 40 }}>
        <Image style={{ height: hp('2.2%'), width: wp('7.5%') }} source={require('../images/backarrow.png')}></Image>
      </TouchableOpacity>
      <View style={{ marginTop: '30%' }}>

        <Text style={{ fontSize: 30, color: '#fff', alignSelf: 'center', marginTop: 10 }}>SIGN UP</Text>


        <View style={{ width: wp('90%'), height: 50, backgroundColor: '#fff', borderRadius: 35, alignSelf: 'center', marginTop: 30 }}>
          <View style={{ flexDirection: 'row', padding: 5 }}>
            <Image style={{ width: 19, height: 22, marginTop: 10, marginLeft: 10 }} source={require('../images/user.png')} />
            <TextInput
              value={name}
              placeholder="Name"
              style={{ marginLeft: 10, paddingTop: 10, }}
              placeholderTextColor='rgb(170, 171, 173)'
              onChangeText={(text) => setName(text)}
              keyboardType='default'
            />
          </View>
        </View>
        <View style={{ width: wp('90%'), height: 50, backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 25 }}>
          <View style={{ flexDirection: 'row', padding: 5 }}>
            <Image style={{ width: 19, height: 15, marginTop: 12, marginLeft: 10 }} source={require('../images/email.png')} />
            <TextInput
              value={email}
              placeholder="Email"
              style={{ marginLeft: 10, paddingTop: 10 }}
              placeholderTextColor='rgb(170, 171, 173)'
              onChangeText={(text) => setEmail(text)}
              keyboardType='email-address'
            />
          </View>
        </View>
       
        <View style={{ width: wp('90%'), justifyContent: 'center', height: hp("5.5%"), backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 28 }}>

          <Image style={{ width: 15, height: 19, marginLeft: 17, marginTop: 21 }} source={require('../images/password.png')} />
          <TextInput
            value={password}
            placeholder="Password"
            style={{ marginLeft: 45, marginTop: 7, bottom: 24 }}
            placeholderTextColor='rgb(170, 171, 173)'
            onChangeText={(text) => setPassword(text)}
            // keyboardType='default'
            secureTextEntry={true}
          />

        </View>

        <TouchableOpacity onPress={() => SignUp()}>
          <View style={{
            borderRadius: 40, width: wp('90%'), height: 50, backgroundColor: 'rgb(0,128,138)',
            marginTop: 25, textAlign: 'center', alignSelf: 'center'
          }} >
            <Text style={{
              alignSelf: "center", fontSize: 20, color: '#fff', paddingTop: 13

            }}>SIGNUP</Text>
          </View>
        </TouchableOpacity>






        <View style={{ alignSelf: 'center', flexDirection: 'row', top: '50%' }}>
          <Text style={{ fontSize: 14, color: 'rgb(211,212,233)', alignSelf: 'center', }}>Already have an account? </Text>
          <Text onPress={() => SignIn()} style={{ fontSize: 14, color: '#fff', alignSelf: 'center', fontWeight: 'bold' }}>Sign In</Text>
        </View>
      </View>

      <SpinnerModal
        visible={isLoadingg}
        heading="Please Wait ..."
      />
    </View>

  );
}
export default SignupScreen;