import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { baseUrl } from '../constant/Constants'
import SpinnerModal from '../component/SpinnerModal'

const LoginScreen = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoadingg, setLoading] = useState(false)



  const Login = () => {
    
    props.navigation.navigate('Dashboard')
    

  }

  const Signup = () => {
    props.navigation.navigate('Signup')
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(41,52,98)' }}>
      <StatusBar hidden />
      <Image style={{ width: wp('73%'), height: hp('33%'), position: 'absolute', top: -10 }} source={require('../images/imageTop.png')} />


      <Image style={{ width: wp('100%'), height: hp('15%'), justifyContent: 'flex-end', alignSelf: 'flex-end', bottom: 0, position: 'absolute' }} source={require('../images/imageBottom.png')} />

      <View style={{ marginTop: '50%' }}>
        <Text style={{ fontSize: 30, color: '#fff', alignSelf: 'center', marginTop: 10 }}>LOG IN</Text>

        <View style={{ width: wp('90%'), justifyContent: 'center', height: hp("5.5%"), backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 26 }}>
          <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center' }}>
            <Image style={{ width: 19, height: 15, marginLeft: 12 }} source={require('../images/email.png')} />
            <TextInput
              value={email}
              placeholder="Email"
              style={{ marginLeft: 10, padding: 5 }}
              placeholderTextColor='rgb(170, 171, 173)'
              onChangeText={(text) => setEmail(text)}
              keyboardType='email-address'
            />
          </View>
        </View>

        <View style={{ width: wp('90%'), justifyContent: 'center', height: hp("5.5%"),
         backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 28 }}>
          
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

        <TouchableOpacity
          style={{ borderRadius: 24, justifyContent: 'center', width: wp('90%'), alignSelf: 'center', height: hp("5.5%"), backgroundColor: 'rgb(0,128,138)', marginTop: 30, }}
          onPress={() => Login()}>
          <Text style={{
            fontSize: 20, textAlign: 'center', textAlignVertical: 'center', color: '#fff',
          }}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPassword')}>
          <Text style={{ fontSize: 14, color: '#fff', alignSelf: 'center', marginTop: 15 }}>Forgot Password?</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 20, color: '#fff', alignSelf: 'center', marginTop: 30 }}>OR SIGNIN WITH</Text>

        <View style={{ flexDirection: 'row', marginLeft: '15%', marginRight: '15%', marginTop: 20, marginBottom: '20%' }}>
          <Image style={{ width: 70, height: 50, marginTop: 10, marginLeft: 10 }} source={require('../images/google.png')} />
          <Image style={{ width: 70, height: 50, marginTop: 10, marginLeft: 30 }} source={require('../images/facebook.png')} />
          <Image style={{ width: 70, height: 50, marginTop: 10, marginLeft: 30 }} source={require('../images/twitter.png')} />
        </View>







        <View style={{ alignSelf: 'center', flexDirection: 'row', position: 'absolute', bottom: 10 }}>
          <Text style={{ fontSize: 14, color: 'rgb(211,212,233)', alignSelf: 'center', }}>Don't have an account? </Text>
          <Text onPress={() => Signup()} style={{ fontSize: 14, color: '#fff', alignSelf: 'center', fontWeight: 'bold' }}>Sign Up</Text>
        </View>
      </View>

      <SpinnerModal
        visible={isLoadingg}
        heading="Please Wait ..."
      />
    </View>

  );
}
export default LoginScreen;