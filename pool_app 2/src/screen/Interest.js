import React, { useState } from 'react';
import { View, Text, FlatList, Image, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios'


export default class Interest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      interestData: [],
      data: []
    };


  }

  componentDidMount() {
    // this.getInterest()
  }

  getInterest = async () => {

    
    
  }


  coloChange = (key) => {
    let array = this.state.data
    let interestData = [...this.state.interestData]
    for (let item of interestData) {
      if (item.id == key) {
        item.isSelected = (item.isSelected == null) ? true : !item.isSelected;
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
          alignItems: 'center', justifyContent: 'center', borderColor: 'rgb(222,223,228)', backgroundColor: item.isSelected ? 'rgb(0,126,135)' : "white"
        }}>
          <Image source={{ uri: `http://112.196.64.118/poolapp/storage/app/public/interest/${item.image}` }} style={{ width: 62, height: 60 }} />
          <Text style={{ fontSize: 18, color: item.isSelected ? "white" : 'rgb(0,126,135)', textAlign: 'center', marginTop: 10 }}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  async continue() {
    this.props.navigation.navigate('AddPayment')

   

  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={{ marginTop:"20%", textAlign: 'center', fontSize: 27 }}>SELECT YOUR INTERESTS</Text>

        <FlatList
          horizontal={false}
          data={this.state.interestData}
          numColumns={2}
          renderItem={({ item, index }) => this.renderItem(item, index)}
        />

        <View style={{ flexDirection: 'row', height: 60, width: '100%', justifyContent: 'space-between', borderTopColor: 'rgb(222,223,228)', borderTopWidth: 1 }}>
          <Text style={{ fontSize: 20, color: 'rgb(186,186,186)', textAlignVertical: 'center', marginLeft: 20,top:6 }}>SKIP</Text>
          {/* <TouchableOpacity style={{padding: 15}}  onPress={()=>this.createPool()}>
            <Text style={{fontSize: 20, color: 'rgb(41,52,98)', textAlignVertical: 'center', marginRight: 20}}>CONTINUE 2 > </Text>
        </TouchableOpacity> */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => this.continue()} style={{ color: 'rgb(40,50,98)', textAlignVertical: 'center', fontSize: 20, height: 70,top:8}}>CONTINUE </Text>
            <Icon name="right" size={20} color="rgb(40,50,98)" style={{ marginTop: 0, marginRight: 20,bottom:16 }} />
          </View>
        </View>
      </View>
    )
  }
}
