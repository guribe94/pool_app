import React, { useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImagePropTypes } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PoolDetails = ({ navigation }) => {
  const [name, setname] = React.useState('');
  // useEffect(() => {
  //   const { name } = route.params
  //   setname(name)
  // });
  const goBack = () => {
    navigation.navigate('Dashboard')
  }


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <TouchableOpacity onPress={() => goBack()}>
        <Image style={{ height: hp('2.2%'), width: wp('7.5%'), alignSelf: "flex-end", marginRight: "15%", top: 45, color: 'rgb(0,106,115)' }} source={require('../images/back.png')}></Image>
        <Text style={{ textAlign: 'right', marginRight: 20, color: 'rgb(0,106,115)', fontSize: 18, top: 25 }}>BACK</Text>
      </TouchableOpacity>

      <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>{name}</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, marginLeft: 20, marginRight: 20 }}>
        <Text style={{ fontSize: 16, }}>Pool started by friends</Text>
        <Text style={{ fontSize: 14, color: '#a9a9a9' }}>View</Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 20 }}>
        <Image source={require('../images/friend.png')} style={{ width: 60, height: 60, right:15}} />
        <Image source={require('../images/friend.png')} style={{ width: 60, height: 60, marginLeft: 10,right:15 }} />
        <Image source={require('../images/friend.png')} style={{ width: 60, height: 60, marginLeft: 10,right:15   }} />
        <Image source={require('../images/friend.png')} style={{ width: 60, height: 60, marginLeft: 10 ,right:15  }} />
        <Image source={require('../images/friend.png')} style={{ width: 60, height: 60, marginLeft: 10,right:15   }} />
        <Image source={require('../images/friend.png')} style={{ width: 60, height: 60, marginLeft: 10,right:15 }} />
      </View>

      <Text style={{ marginTop: 30, fontSize: 20, marginLeft: 20 }}>Pool Info </Text>
      <Text style={{ marginTop: 20, fontSize: 18, marginLeft: 20 }}>Lorem ipsum dolor sir amet, consetutur sadipcing eliter,</Text>

      <Text style={{ marginTop: 30, fontSize: 20, marginLeft: 20, }}>Notifications</Text>
      <View style={{ flexDirection: 'row', marginLeft: 20, }}>
        <Image style={{ width: 22, height: 30, marginTop: 20, marginLeft: 10 }} source={require('../images/notification.png')} />
        <View style={{ width: '100%', marginLeft: 30, }}>
          <Text style={{ marginTop: 20, fontSize: 16, }}>Important notification</Text>
          {/* <Text style={{ borderBottomWidth: 2, borderBottomColor: '#f9f9f9', width: '100%', marginTop: 5 }}></Text> */}
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 20, }}>
        <Image style={{ width: 22, height: 30, marginTop: 20, marginLeft: 10 }} source={require('../images/notification.png')} />
        <View style={{ width: '100%', marginLeft: 30, }}>
          <Text style={{ marginTop: 20, fontSize: 16, }}>Important notification</Text>
          {/* <Text style={{ borderBottomWidth: 2, borderBottomColor: '#f9f9f9', width: '100%', marginTop: 5 }}></Text> */}
        </View>
      </View>

      <Text style={{ marginTop: 20, fontSize: 24, marginLeft: 20, }}>Chat with members</Text>

      <TouchableOpacity style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', borderTopWidth: .2, 
      borderTopColor: "#707070", position: 'absolute', bottom: 0, backgroundColor: '#F6F6F6', width: wp("100%"), height: hp("8%") }}>
        <TextInput style={{ fontSize: 20, color: "#a9a9a9", fontWeight: '500' }}
          placeholder="Type Your Message"></TextInput>
        
      </TouchableOpacity>
    </View>


  );
}
export default PoolDetails;