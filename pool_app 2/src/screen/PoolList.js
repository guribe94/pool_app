import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, FlatList, StatusBar, AsyncStorage, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import nexticon from '../images/next.png'
import poolnameicon from '../images/poolname.png'
import poolimage from '../images/poolimage.png'
import pooldateicon from '../images/date.png'
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


const slideHeight = viewportHeight;
const slideWidth = wp(90);


export default class PoolList extends Component {


  constructor(props) {
    super(props);
    this.state = {
      activelist: true,
      pastlist: false,
      activepooldata: [{ name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }, { name: 1 },],
      poolData: '',
      openPool: false

    }
  }

  async componentDidMount() {
  }

  poolDetails = () => {
    this.props.navigation.navigate('PoolDetails')
  }

  renderActivelist(item, index) {
    var num = Number(item.amount)
    var val = num / 12
    var num1 = val.toFixed(2)
    console.log(item)
    return (
      <TouchableOpacity onPress={() => this.poolDetails()} style={{
        shadowColor: '#707070',
        shadowOffset: {
          width: 0,
          height: .5
        },
        shadowRadius: 3, marginLeft: 30,
        shadowOpacity: .2, marginTop: "4%", width: wp("100%"), backgroundColor: '#e9e9e9', borderRadius: 10, height: hp("20%"),
      }}>


        <View style={{ flexDirection: 'row' }}>

          <View>
            <Image source={{ uri: `http://112.196.64.118/poolapp/storage/app/public/pool/${item.grp_img}` }} style={{ marginLeft: "3%", marginTop: "2%", height: hp("15%"), width: wp("38%"), resizeMode: 'contain' }} />
          </View>

          <View style={{ marginTop: "10%" }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={poolnameicon} style={{ height: 22, width: 40, resizeMode: 'contain' }} />
              <Text style={{ fontSize: 14, fontWeight: '500', marginTop: "5%" }}>{item.name}</Text>
            </View>

            <View style={{ marginTop: "10%", flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={pooldateicon} style={{ height: 25, width: 40, resizeMode: 'contain' }} />
              <Text style={{ fontSize: 14, fontWeight: '500' }}>{item.month}</Text>
            </View>


          </View>




        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ color: "#00818A", fontSize: 18, marginLeft: "4%" }}>$</Text>
          <Text style={{ color: "black", fontSize: 16, marginLeft: "2%" }}>Payout:</Text>
          <Text style={{ color: "#00818A", fontSize: 16, marginLeft: "2%" }}>{item.amount}</Text>


        </View>

      </TouchableOpacity>

    )
  }

  renderOpenPool = (item, index) => {
    var num = Number(item.amount)
    var val = num / 12
    var num1 = val.toFixed(2)
    return (
      <View style={{
        shadowColor: '#707070',
        shadowOffset: {
          width: 0,
          height: .5
        }, marginLeft: 30,
        shadowRadius: 3,
        shadowOpacity: .2, marginTop: "4%", width: wp("82%"), backgroundColor: '#e9e9e9', borderRadius: 10, height: hp("40%"),
      }}>

        <Text style={{ fontSize: 24, fontWeight: '500', marginTop: "5%", textAlign: 'center' }}>{item.name}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 40 }}>
          <Text style={{ fontSize: 18, }}>LumpSum payout: </Text>
          <Text style={{ color: "#00818A", fontSize: 16, }}>${item.amount}</Text>


        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 10 }}>
          <Text style={{ color: "#00818A", fontSize: 18, }}>($</Text>
          <Text style={{ color: "#00818A", fontSize: 16, }}>{num1}</Text>
          <Text style={{ color: "black", fontSize: 16, marginLeft: "2%" }}>Monthly Contribution)</Text>


        </View>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('JoinNow', { poolName: item.name, amount: item.amount, available_months: item.available_months, poolId: item.id })} style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: 10, width: '40%', borderRadius: 15, height: 40, backgroundColor: '#fff', marginTop: 80 }}>
          <Text style={{ color: "#00818A", fontSize: 20, }}>Join Now</Text>
        </TouchableOpacity>

      </View>
    )
  }



  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <StatusBar barStyle={'dark-content'} />
        <Text style={{ alignSelf: 'center', marginTop: "14%", fontSize: 18, color: "#000000", fontWeight: "700" }}>Pool List</Text>


        <TouchableOpacity style={{ justifyContent: "space-evenly", alignSelf: "center"}}>
            <Text onPress={() => this.props.navigation.goBack()} style={{
              color: '#00818A', fontWeight: "bold",
              fontSize: 20, marginLeft: "75%",top:-22
            }}>BACK</Text>
            <Image style={{ height: hp('2.2%'), width: wp('7.5%'),marginLeft:"69%",top:-42 }} source={require('../images/back.png')} ></Image>
          </TouchableOpacity>

        <View style={{ alignSelf: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "#F5F5F5", width: wp("80%"), height: ("4%"), borderRadius: 8 }}>

          <TouchableOpacity
            onPress={() => { this.setState({ activelist: true, pastlist: false, openPool: false }) }}
            style={{ justifyContent: 'center', borderRadius: 6, marginLeft: '2%', width: wp("25%"), height: hp("2.8"), backgroundColor: this.state.activelist ? 'white' : null }}>
            <Text style={{ fontSize: 14, fontWeight: '500', alignSelf: 'center' }}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { this.setState({ activelist: false, pastlist: true, openPool: false }) }}
            style={{ justifyContent: 'center', borderRadius: 6, marginRight: '2%', width: wp("23%"), height: hp("2.8"), backgroundColor: this.state.pastlist ? 'white' : null }}>
            <Text style={{ fontSize: 14, fontWeight: '500', alignSelf: 'center' }}>Past</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { this.setState({ activelist: false, pastlist: false, openPool: true }) }}
            style={{ justifyContent: 'center', borderRadius: 6, marginRight: '2%', width: wp("23%"), height: hp("2.8"), backgroundColor: this.state.openPool ? 'white' : null }}>
            <Text style={{ fontSize: 14, fontWeight: '500', alignSelf: 'center' }}>Open pools</Text>
          </TouchableOpacity>

        </View>
        {this.state.activelist == true ? <View style={{ marginTop: "4%" }}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.poolData}
            renderItem={({ item, index }) => this.renderActivelist(item, index)}
            sliderWidth={slideWidth}
            itemWidth={slideHeight}
          />

        </View> : null}

        {this.state.pastlist == true ? <View style={{ marginTop: "4%" }}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.poolData}
            renderItem={({ item, index }) => this.renderActivelist(item, index)}
            sliderWidth={slideWidth}
            itemWidth={slideHeight}
          />

        </View> : null}

        {this.state.openPool == true ? <View style={{ marginTop: "4%" }}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.poolData}
            renderItem={({ item, index }) => this.renderOpenPool(item, index)}
            sliderWidth={slideWidth}
            itemWidth={slideHeight}
          />

        </View> : null}


        <TouchableOpacity onPress={() => this.props.navigation.navigate('Pool')} style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', borderTopWidth: .2, borderTopColor: "#707070", position: 'absolute', bottom: 0, backgroundColor: '#F6F6F6', width: wp("100%"), height: hp("8%") }}>
          <Text style={{ fontSize: 22, color: "#293462", fontWeight: '500' }}>Start a new Pool</Text>
          <Image source={nexticon} style={{ height: 18, marginLeft: 10, width: 10, resizeMode: 'contain' }} />
        </TouchableOpacity>

      </View>
    )
  }
}
