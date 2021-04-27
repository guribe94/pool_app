import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage, FlatList } from 'react-native';
import axios from 'axios'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

global.listData = []

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userList: '',
      data: [],
      dataa: []
    }
  }

  selectItem = (key) => {
    var array = this.state.data
    var arrayy = this.state.dataa
    let authUsers = [...this.state.userList]
    for (let item of authUsers) {
      if (item.id == key) {
        item.isSelected = (item.isSelected == null) ? true : !item.isSelected;

        array.push(item)
        arrayy.push(item.id)
        break;
      }

    }

    this.setState({ data: array })
    this.setState({ dataa: arrayy })
    global.listData = this.state.data
    global.arrayItem = this.state.dataa
    console.log("----", this.state.data)
    this.setState({ userList: authUsers });




  }

  userList = (item, index) => {
    return (
      <View style={{
        marginLeft: 20, marginBottom: 10, marginRight: 20, height: hp("24%"), backgroundColor: '#fff', elevation: 2, shadowColor: '#707070',
        shadowOffset: {
          width: 0,
          height: .5
        },
        shadowRadius: 3, shadowOpacity: .2, backgroundColor: '#e9e9e9', borderRadius: 10, marginTop: 20,
      }}>
        <View>
          <View style={{ flexDirection: 'row', }}>
            <Image source={{ uri: item.profile_photo_path == null ? 'https://www.w3schools.com/howto/img_avatar.png' : 'http://112.196.64.118/poolapp/storage/app/public/users/' + item.profile_photo_path || 'https://www.w3schools.com/howto/img_avatar.png' }} style={{ width: 80, height: 80, borderRadius: 40, marginTop: 20, marginLeft: 20 }} />
            <View>
              <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 20 }}>{item.name}</Text>
              <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 20 }}>{item.age == null ? 0 : item.age}</Text>
              <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 20 }}>{item.bio == null ? 'bio' : item.bio}</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 30, marginLeft: 20, justifyContent: 'flex-end', alignSelf: 'flex-end' }}>

          {item.frnd_status == "no" ? <TouchableOpacity style={{ width: 90, height: 38, borderTopLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: 'rgb(41,52,98)', }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', padding: 7, color: '#fff' }}>ADD</Text>
          </TouchableOpacity> : null}

        </View>

      </View>
    )
  }


  render() {
    return (
      <View style={{ flex: 1, }}>
        <View style={{ justifyContent: "space-evenly", marginTop: "10%", alignSelf: "center" }}>

          <Text style={{ fontWeight: "bold", fontSize: 20, top: 25, paddingLeft: 90 }}>JOIN A POOL</Text>

 
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ justifyContent: "space-evenly", alignSelf: "center"}}>
            <Text  style={{color: '#00818A', fontWeight: "bold",fontSize: 20, marginLeft: "75%"}}>BACK</Text>
            <Image style={{ height: hp('2.2%'), width: wp('7.5%'),marginLeft:"69%",top:-20 }} source={require('../images/back.png')} ></Image>
          </TouchableOpacity> 


        </View>

        <FlatList
          data={this.state.userList}
          renderItem={({ item, index }) => this.userList(item, index)}
        />


      </View>

    );
  }
}
export default UserList;