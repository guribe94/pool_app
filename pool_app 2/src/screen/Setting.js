import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, Modal, AsyncStorage, FlatList } from 'react-native';
import PINCode, { hasUserSetPinCode, resetPinCodeInternalStates, deleteUserPinCode } from "@haskkor/react-native-pincode";
import PasswordGesture from 'react-native-gesture-password'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';

var Password1 = '';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinLock: false,
      modal: false,
      status: 'right',
      message: 'Password is right, success.',
      image: require('../images/friend.png')
    }
    this.didFocus = this.props.navigation.addListener("focus", (payload) =>
      this.setState({ image: global.image })

     
    );
  }

 

  componentDidMount() {
    this.setState({ image: global.image })
  }



  pin = () => {
    this.setstate({ pinLock: true })
  }

  _finishProcess = async () => {
    const hasPin = await hasUserSetPinCode();
    if (hasPin) {
      Alert.alert(null, "You have successfully set/entered your pin.", [
        {
          title: "Ok",
          onPress: () => {
            // do nothing
          },
        },
      ]);
      this.setstate({ pinLock: false })
    }
  };



  editInterest = () => {
    this.setState({ modal: true })
  }

  coloChange = async (key) => {
    let array = this.state.data
    let interestData = [...this.state.interestData]
    for (let item of interestData) {
      if (item.id == key) {
        item.checked = (item.checked == null) ? true : !item.checked;
        array.push(item.id)
        break;
      }

    }
    this.setState({ data: array })
    global.listData = this.state.data
    console.log("----", this.state.data)
    this.setState({ interestData: interestData });


  }
  renderItem = (item, index) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <TouchableOpacity onPress={() => this.coloChange(item.id)} style={{
          borderWidth: 1, width: wp('40%'), height: hp('22%'), marginTop: 30, marginLeft: 30, borderRadius: 20,
          alignItems: 'center', justifyContent: 'center', borderColor: 'rgb(222,223,228)', backgroundColor: item.checked ? 'rgb(0,126,135)' : "white"
        }}>
          <Image source={{ uri: `http://112.196.64.118/poolapp/storage/app/public/interest/${item.image}` }} style={{ width: 62, height: 60 }} />
          <Text style={{ fontSize: 18, color: item.checked ? "white" : 'rgb(0,126,135)', textAlign: 'center', marginTop: 10 }}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  async done() {

    var token = await AsyncStorage.getItem("token")

    const headers = {
      'Authorization': 'Bearer ' + token
    }

    let data = {
      interests: this.state.data
    }

    console.log(headers)

    
  }

  onReset = () => {
    this.setState({ status: 'normal' })
    this.setstate({ message: 'Please input your password(again).' })
    this.onStart()
  }

  onEnd = (password) => {
    if (Password1 === '') {
      // The first password
      Password1 = password;
      this.setState({ status: 'normal' })
      this.setstate({ message: 'Please input your password secondly.' })
    } else {
      // The second password
      if (password === Password1) {
        this.setState({ status: 'right' })
        this.setstate({ message: 'Your password is set to ' + password })
        this.props.navigation.navigate('Setting')
        //  onReset()
        Password1 = '';
        // your codes to close this view
      } else {
        this.setState({ status: 'wrong' })
        this.setstate({ message: 'Not the same, try again.' })
      }
    }
  }

  onStart = () => {
    if (Password1 === '') {
      this.setstate({ message: 'Please input your password.' })
    } else {
      this.props.navigation.navigate('Dashboard')
      this.setstate({ message: 'Please input your password secondly.' })
      Password1 = '';

    }
  }

  changePassword = () => {
    this.props.navigation.navigate('ChangePassword')
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}> 
          <View style={{ marginTop: "12%", marginLeft: "83%" }}>
            <Text style={{ fontSize: 19, color: 'rgb(0,95,107)' }}>BACK</Text>
            <Image style={{ height: hp('2.2%'), width: wp('7.5%'), marginTop: "-28.5%", right: 27 }} source={require('../images/back.png')}></Image>
          </View>
          </TouchableOpacity>


        {this.state.pinLock == false ? <View>

          <View style={{ width: '100%', borderBottomWidth: 2, borderBottomColor: '#f9f9f9' }}>
            <Text style={{ textAlign: 'center', fontSize: 24, bottom: 25 }}>Settings</Text>
          </View>


          <View style={{ flexDirection: "row", alignItems: "center", bottom: 22 }}>
            <Image style={{ height: hp("10.3%"), width: wp("22.2%"), marginLeft: "5%" }} source={require("../images/friend.png")}></Image>
            <Text style={{ fontSize: 25, color: "black", marginLeft: "5%", fontWeight: "bold", bottom: 15 }}>jan sondermaann</Text>
            <Text style={{ fontSize: 23, color: "gray", bottom: 20, right: 30, position: "absolute" }}>jansoderman@gmail.com</Text>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 20, backgroundColor: 'rgb(251,251,251)' }}>
            <View style={{ flexDirection: 'row', marginLeft: 30 }}>


              <View style={{ marginLeft: 20, top: 35 }}>
                <Text style={{ fontSize: 18 }}>{global.userName ? global.userName : "Name"}</Text>
                <Text style={{ fontSize: 16, }}>{global.bio ? global.bio : "Bio"}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile')}>
              <Image style={{ width: 50, height: 50, top: 35 }} source={require('../images/edit_profile.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.editInterest()} style={{
            width: wp('90%'), height: 60, backgroundColor: '#fff', elevation: 1, borderColor: '#fff', borderRadius: 15, alignSelf: 'center',
            marginTop: 15, marginBottom: 50, top: 25
          }}>
            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-around' }}>
              <Image style={{ width: 19, height: 19, marginTop: 12, marginLeft: 10 }} source={require('../images/age.png')} />
              <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 20 }}>Change Your Interests</Text>
              <Image style={{ width: 40, height: 40, marginTop: 12 }} source={require('../images/edit_interest.png')} />
            </View>
          </TouchableOpacity>


          {this.state.modal == false ? null :
            <Modal
              animationType={"slide"} transparent
              visible={this.state.modal}
              onRequestClose={() => { this.setState({ modal: false }) }}>

              <View>
                <TouchableOpacity onPress={() => this.setState({ modal: false })} style={{ flex: 1, alignItems: 'center', padding: 100 }} >
                </TouchableOpacity>
                <View style={{ position: 'absolute', top: 190, backgroundColor: '#fff', width: '100%', height: '310%', borderRadius: 20 }}>
                  <FlatList
                    data={this.state.interestData}
                    numColumns={2}
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                  />


                </View>
              </View>
              <TouchableOpacity onPress={() => this.done()} style={{ flexDirection: 'row', height: 60, backgroundColor: '#fff', width: '100%', alignSelf: 'center', justifyContent: 'center', bottom: 0, position: 'absolute', borderTopColor: 'rgb(222,223,228)', borderTopWidth: 1 }}>
                <Text style={{ fontSize: 20, color: 'rgb(0,4,60)', textAlignVertical: 'center', marginLeft: 20 }}>Done 2</Text>
                <Icon name="right" size={20} color="rgb(40,50,98)" style={{ marginTop: 0, marginRight: 25, alignSelf: 'center', bottom: 17 }} />
              </TouchableOpacity>
            </Modal>
          }

          <View style={{ width: '100%', marginTop: 4, borderBottomWidth: 2, borderBottomColor: '#f9f9f9' }}>
          </View>

          <Text style={{ fontSize: 20, marginLeft: 20, bottom: 7 }}>Security</Text>

          <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 20, }} onPress={() => this.changePassword()}>
            <Image style={{ width: 16, height: 20, marginTop: 25, marginLeft: 10 }} source={require('../images/lock.png')} />
            <View style={{ width: '100%', marginLeft: 30, }}>
              <Text style={{ marginTop: 25, fontSize: 16, }}>Change Password</Text>
              <Text style={{ borderBottomWidth: 2, borderBottomColor: '#f9f9f9', width: '100%', marginTop: 5 }}></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 20, }} onPress={() => this.props.navigation.navigate("Login")}>
            <Image style={{ width: 16, height: 20, marginTop: 20, marginLeft: 10 }} source={require('../images/lock.png')} />
            <View style={{ width: '100%', marginLeft: 30, }}>
              <Text style={{ marginTop: 20, fontSize: 16, }}>LOGOUT</Text>
              <Text style={{ borderBottomWidth: 2, borderBottomColor: '#f9f9f9', width: '100%', marginTop: 5 }}></Text>
            </View>
          </TouchableOpacity>

          <Text style={{ marginTop: 30, fontSize: 20, marginLeft: 20, bottom: 7 }}>Payment Options</Text>
          <View style={{ flexDirection: 'row', marginLeft: 20, }}>
            <Image style={{ width: 25, height: 20, marginTop: 20, marginLeft: 10 }} source={require('../images/card.png')} />
            <View style={{ width: '100%', marginLeft: 30, }}>
              <Text style={{ marginTop: 20, fontSize: 16, }}>0000</Text>
              <Text style={{ borderBottomWidth: 2, borderBottomColor: '#f9f9f9', width: '100%', marginTop: 5 }}></Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 20, }}>
            <Image style={{ width: 25, height: 25, marginTop: 20, marginLeft: 10 }} source={require('../images/bank.png')} />
            <View style={{ width: '100%', marginLeft: 30, }}>
              <Text style={{ marginTop: 20, fontSize: 16, }}>Add Bank</Text>
              <Text style={{ borderBottomWidth: 2, borderBottomColor: '#f9f9f9', width: '100%', marginTop: 5 }}></Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 20, }}>
            <Image style={{ width: 22, height: 25, marginTop: 20, marginLeft: 10 }} source={require('../images/newPool.png')} />
            <View style={{ width: '100%', marginLeft: 30, }}>
              <Text style={{ marginTop: 20, fontSize: 16, }}>Add Credit Card</Text>
              <Text style={{ borderBottomWidth: 2, borderBottomColor: '#f9f9f9', width: '100%', marginTop: 5 }}></Text>
            </View>
          </View>
        </View>
          :

         


          <PINCode status={'choose'}
            touchIDDisabled={true}
            finishProcess={() => this._finishProcess()} />
        }

      </View>
    );
  }
}
export default Setting;
