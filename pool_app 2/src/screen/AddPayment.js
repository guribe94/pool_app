import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView, AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DatePicker from 'react-native-datepicker';
import { useLinkProps } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import { baseUrl } from '../constant/Constants';
import moment from 'moment';
// import SpinnerModal from '../component/SpinnerModal'

const options = {
  title: 'Select Image',
  maxWidth: 500,
  maxHeight: 500,
  quality: 0.7,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const Data = [{
  name: 'Male',
  id: 0
},
{
  name: 'Female',
  id: 1
}]

const AddPayment = (props) => {

  const [gender, setGender] = useState('Gender');
  const [visible, unVisible] = useState(false);
  const [text, setText] = useState(false);
  const [datee, setDatee] = useState(new Date())
  const [userImage, setuserImage] = useState(require('../images/friend.png'))
  const [name, setName] = useState('')
  const [age, setAge] = useState(age)
  const [bio, setBio] = useState('')
  const [imageUri, setImageUri] = useState('')
  const [imageName, setImageName] = useState('')
  const [imageType, setImageType] = useState('')
  const [isLoadingg, setLoading] = useState(false)

  const genderr = () => {
    unVisible(true)

  }

  const selectItem = (item) => {
    setGender(item.name)
    unVisible(false)
    setText(true)
    global.gender = item.name
  }
  const openImagePicker = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri, fileName: response.fileName };
        console.log(source)
        setuserImage(source)
        setImageUri(response.uri)
        setImageName(response.name)
        setImageType('image/jpeg')

        global.Urii = response.uri
        global.imageNamee = response.fileName
        global.type = 'image/jpeg'
        global.image = source
      }
    });
  }



  const done = async () => {
    setLoading(true)
     props.navigation.navigate('Dashboard')
      
  }

  const namee = (text) => {
    setName(text)
    global.userName = text
  }

  const bioo = (text) => {
    setBio(text)
    global.bio = text
  }




  const dateChange = (date) => {
    setDatee(date);
    global.dateOf = date

    var dd = date.slice(0, 4)
    var year = moment().year();
    var agee = year - dd
    setAge(agee)
    global.age = agee


  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'rgb(246,246,246)' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
        <Text style={{ marginLeft: '20%', fontSize: 20, textAlignVertical: 'center' }}>SET UP YOUR PROFILE</Text>
        <TouchableOpacity onPress={() => done()} >
          <Text style={{ fontSize: 16, textAlignVertical: 'center', marginRight: 20, color: 'rgb(0,95,107)' }}>DONE</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{ alignSelf: 'center', marginTop: 30 }} onPress={() => openImagePicker()}>
   <Image style={{ width: 130, height: 130,borderRadius:70 }} source={userImage} />
        <Image style={{ width: 30.1, height: 30, marginTop: -30, marginLeft: 90 }} source={require('../images/add.png')} /> 
      </TouchableOpacity>

      <View style={{ width: wp('90%'), height: 50, backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 34 }}>
        <View style={{ flexDirection: 'row', padding: 5 }}>
          <Image style={{ width: 15, height: 19, marginTop: 10, marginLeft: 10 }} source={require('../images/user.png')} />
          <TextInput placeholder="Name" value={name} onChangeText={(text) => namee(text)} style={{ marginLeft: 10,paddingTop:10 }} placeholderTextColor='rgb(174, 175, 175)' />
        </View>
      </View>

      <View style={{ width: wp('90%'), height: 50, backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 20 }}>
        <View style={{ flexDirection: 'row', padding: 5 }}>
          <Image style={{ width: 15, height: 19, marginTop: 10, marginLeft: 10 }} source={require('../images/user.png')} />
          <TextInput placeholder="Bio" value={bio} onChangeText={(text) => bioo(text)} style={{ marginLeft: 10, paddingTop:10}} placeholderTextColor='rgb(174, 175, 175)' />
        </View>
      </View>

      <View style={{ width: wp('90%'), height: 50, backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 20 }}>
        <View style={{ flexDirection: 'row', padding: 5 }}>
          <Image style={{ width: 19, height: 19, marginTop: 10, marginLeft: 10 }} source={require('../images/age.png')} />
          <Text style={{ marginLeft: 10, textAlignVertical: 'center', marginTop: 5, color: 'rgb(174, 175, 175)' }}>{age}</Text>
        </View>
      </View>

      <DatePicker
        style={{
          width: 200,
          marginTop: 20}}
        date={datee}
        mode="date"
        placeholder="Date of birth"
        format="YYYY-MM-DD"
        minDate="1990-01-01"
        maxDate="2022-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}

        onDateChange={(date) => {

          dateChange(date)

        }}
      />

      <TouchableOpacity onPress={() => genderr()} style={{ width: wp('90%'), height: 50, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 30 }}>
        <View style={{ flexDirection: 'row', }}>
          <Image style={{ width: 17, height: 19, marginTop: 15, marginLeft: 15 }} source={require('../images/gender.png')} />
          <Text style={{ padding:13, textAlignVertical: 'center', color: text == false ? 'rgb(170, 171, 173)' : "black" }}>{gender}</Text>
        </View>
        <Image style={{ width: 15, height: 9, marginRight: 30, marginTop: 20 }} source={require('../images/down.png')} />
      </TouchableOpacity>




      {visible == false ?
        null :
        <View style={{ height: 70, backgroundColor: '#fff', width: wp('83%'), alignSelf: 'center' }}>
          <FlatList
            data={Data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectItem(item)} style={{}}>
                <Text style={{ fontSize: 16, padding: 5, marginLeft: 20, color: '#a9a9a9' }}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>}



      <Text style={{ marginTop: 30, fontSize: 20, marginLeft: 20, }}>Payment Source</Text>
      <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 50, marginTop: 10 }}>
        <Image style={{ width: 25, height: 20, marginTop: 15, marginLeft: 20 }} source={require('../images/card.png')} />
        <View style={{ width: '100%', marginLeft: 30, }}>
          <Text style={{ marginTop: 15, fontSize: 16, }}>Link Credit Card</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 20, backgroundColor: '#fff', height: 50, borderTopWidth: 1, borderTopColor: 'rgb(245,245,245)' }}>
        <Image style={{ width: 25, height: 25, marginTop: 15, marginLeft: 20 }} source={require('../images/bank.png')} />
        <View style={{ width: '100%', marginLeft: 30, }}>
          <Text style={{ marginTop: 15, fontSize: 16, }}>Link Bank Account</Text>
        </View>
      </View>

      {/* <SpinnerModal
        visible={isLoadingg}
        heading="Please Wait ..."
      /> */}

    </ScrollView>

  );
}
export default AddPayment;