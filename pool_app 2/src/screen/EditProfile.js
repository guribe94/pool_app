import React, { Component, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Modal, AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios'

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


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [
        { id: 0, image: require('../images/race.png'), name: 'INTEREST NAME', visible: true, image1: require('../images/racingWhite.png') },
        { id: 1, image: require('../images/paint.png'), name: 'INTEREST NAME', visible: true, image1: require('../images/paint.png') },
        { id: 2, image: require('../images/diaphgram.png'), name: 'INTEREST NAME', visible: true, image1: require('../images/diaphragmWhite.png') },
        { id: 3, image: require('../images/race.png'), name: 'INTEREST NAME', visible: true, image1: require('../images/racingWhite.png') },
        { id: 4, image: require('../images/diaphgram.png'), name: 'INTEREST NAME', visible: true, image1: require('../images/diaphragmWhite.png') },
        { id: 5, image: require('../images/race.png'), name: 'INTEREST NAME', visible: true, image1: require('../images/racingWhite.png') },
        { id: 6, image: require('../images/diaphgram.png'), name: 'INTEREST NAME', visible: true, image1: require('../images/diaphragmWhite.png') }
      ],
      gender: 'Gender',
      visible: false,
      text: false,
      date: new Date(),
      // modal: false,
      userImg: require('../images/friend.png'),
      nickName: '',
      interestData: [],
      data: []
    };
    this.didFocus = this.props.navigation.addListener("focus", (payload) =>
      global.image = this.state.userImg


    );

  }


  getInterest = async () => {
    
  }


  async componentDidMount() {
    
  }


  genderr = () => {
    this.setState({ visible: true })

  }

  selectItem = (item) => {
    this.setState({ gender: item.name })
    this.setState({ visible: false })
    this.setState({ text: true })
  }

  

  openImagePicker = () => {
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
        var img = {
          uri: response.uri,
          name: response.fileName,
          type: 'image/jpeg'

        }
        this.setState({ userImg: source })
        global.image = img

      }
    });
  }

  

  render() {
    console.log("user image render---", global.image)
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'rgb(246,246,246)' }}>
        <View style={{justifyContent:"flex-end",alignItems:"flex-end",right:30,marginTop:"10%"}}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={{ fontSize: 16, marginLeft: 20, color: 'rgb(0,95,107)',fontSize:19 }}>BACK</Text>
            <Image style={{height:hp("2.2%"),width:wp("7.5%"),bottom:20,right:4}} source={require('../images/back.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems:"center",right:33,bottom:14 }}>
          
          <Text style={{ marginLeft: '20%', fontSize: 20, textAlignVertical: 'center' }}>EDIT YOUR PROFILE</Text>

        </View>

        <TouchableOpacity style={{ alignSelf: 'center', marginTop:10 }} onPress={() => this.openImagePicker()}>
          <Image style={{ width: 130, height: 130 }} source={this.state.userImg} />
          {/* <Image style={{width: 30.1, height: 30,marginTop: -30, marginLeft: 90}} source={require('../images/add.png')}/> */}
        </TouchableOpacity>

        <View style={{ width: wp('90%'), height: 50, backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 34 }}>
          <View style={{ flexDirection: 'row', padding: 5 }}>
            <Image style={{ width: 15, height: 19, marginTop: 10, marginLeft: 10 }} source={require('../images/user.png')} />
            <Text style={{ marginLeft: 10, marginTop: 10, textAlignVertical: 'center', color: 'rgb(174, 175, 175)' }}>{global.userName ? global.userName : "name"}</Text>
          </View>
        </View>

        <View style={{ width: wp('90%'), height: 50, backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 15 }}>
          <View style={{ flexDirection: 'row', padding: 5 }}>
            <Image style={{ width: 15, height: 19, marginTop: 10, marginLeft: 10 }} source={require('../images/user.png')} />
            <TextInput placeholder="Nickname" value={this.state.nickName} onChange={(text) => this.setState({ nickName: text })} style={{ marginLeft: 10, alignItems: 'center', padding: 5 ,marginTop: 6}} placeholderTextColor='rgb(174, 175, 175)' />
          </View>
        </View>

        <View style={{ width: wp('90%'), height: 50, backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 15 }}>
          <View style={{ flexDirection: 'row', padding: 5 }}>
            <Image style={{ width: 19, height: 19, marginTop: 10, marginLeft: 10 }} source={require('../images/age.png')} />
            <Text style={{ marginLeft: 10, marginTop: 10, textAlignVertical: 'center', color: 'rgb(174, 175, 175)' }}>{global.age ? global.age : "age"}</Text>
          </View>
        </View>

        <View style={{ width: wp('90%'), height: 50, backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 15 }}>
          <View style={{ flexDirection: 'row', padding: 5 }}>
            <Image style={{ width: 19, height: 19, marginTop: 10, marginLeft: 10 }} source={require('../images/age.png')} />
            <Text style={{ marginLeft: 10, marginTop: 10, textAlignVertical: 'center', color: 'rgb(174, 175, 175)' }}>{global.dateOf ? global.dateOf : "date of birth"}</Text>
          </View>
        </View>



        <View style={{ width: wp('90%'), height: 50, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', }}>
            <Image style={{ width: 17, height: 19, marginTop: 15, marginLeft: 15 }} source={require('../images/gender.png')} />
            <Text style={{ marginLeft: 12, marginTop: 15, textAlignVertical: 'center', color: 'rgb(174, 175, 175)' }}>{global.gender ? global.gender : "gender"}</Text>
          </View>

        </View>






        <View style={{ width: wp('90%'), height: 80, backgroundColor: '#fff', borderRadius: 24, alignSelf: 'center', marginTop: 15 }}>
          <View style={{ flexDirection: 'row', padding: 5 }}>
            <Image style={{ width: 19, height: 19, marginTop: 12, marginLeft: 10 }} source={require('../images/age.png')} />
            <TextInput placeholder="Bio" value={global.bio} style={{ marginLeft: 10, textAlignVertical: 'center',marginTop: 15 }} placeholderTextColor='rgb(174, 175, 175)' />
          </View>
        </View>


        
          
         

      </ScrollView>

    );
  }
}
export default EditProfile;