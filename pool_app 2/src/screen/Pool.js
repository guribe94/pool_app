
import React, { Component, useState } from 'react';
import { TouchableNativeFeedbackBase } from 'react-native';
import { AsyncStorage } from 'react-native';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import { ProgressSteps, ProgressStep, ProgressButtons } from 'react-native-progress-steps';
import Contribution from './Contribution';
import ConfigurePool from "./ConfigurePool";
import InviteFriends from './InviteFriends';
import InviteFriend from './InviteFriend';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Pool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: true,
      isValid: false,
      label: "Inviting friends",
      text1: false,
      text2: false,
      text3: false,
      next: false,
      value: '',
      prev: '',
      value1: '',
      
    }
    this.didFocus = this.props.navigation.addListener("focus", (payload) =>
      this.get(),


    );
  }

  get = async () => {

    const val = await AsyncStorage.getItem("errors")
    if (val == null) {
      this.setState({ errors: true })

    }
    else {
      this.setState({ errors: false })
    }

  }

  async componentDidMount() {
    this.get()
    global.poolName = ''
    global.purpose = ''
   
  }

  onNextStep = () => {
    this.setState({ text1: true });
    this.setState({ text2: true });
    this.setState({ text3: true });
    if (this.state.isValid) {

      this.setState({ errors: true });
      
    } else {
      this.setState({ errors: false });
     
    }

  };

  

  onNextStep1 = () => {
    this.setState({ text2: false });
    this.setState({ text3: true });
    if (this.state.isValid) {

      this.setState({ errors: true });
      // 
    } else {
      this.setState({ errors: false });
      // this.setState({ text1: true });
      // this.setState({ text2: true });
      this.setState({ text3: true });
    }
    // alert(this.state.text3)
  };


  confirmation = (val) => {
   
    // alert(global.poolName)
    // alert(global.purpose)
    if (global.poolName === '') {
      alert("Field is empty")
    } else if(global.purpose === '')
    {
      alert("Field is empty")
    }
    else {
      this.props.navigation.navigate('Confirmation')
      this.setState({ errors: false });
    }
  }

  value = (val) => {

    this.setState({ value: true })

    this.setState({ prev: true })
  }


  values = (val) => {

    this.setState({ value1: true })
    this.setState({ prev: true })
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          {/* <Text style={{textAlign: 'center',marginTop: 50, fontSize: 20,fontWeight: 'bold'}}>create a new pool</Text> */}
        </View>
        <View style={{ marginTop: '0%', backgroundColor: '#fff' }}></View>
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-between', }}>
          <Text style={{ marginLeft: this.state.text1 == false ? '40%' : this.state.text2 == true ? '40%' : this.state.text3 == true ? '40%' : '', fontSize: 24, marginTop: 50 }}>{this.state.text1 == false ? 'Amounts' : this.state.text2 == true ? 'Friends' : this.state.text3 == true ? 'Configure' : ''}</Text>

          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>

            <Text style={{ right: 20, fontSize: 20, color: 'rgb(22,137,146)', marginTop: 28, top: 10 }}>{this.state.text1 == false ? 'BACK' : ''}</Text>
            <Image style={{ height: hp('2.2%'), width: wp('7.5%'), right: 45, top: -10 }} source={require('../images/back.png')} ></Image>
          </TouchableOpacity>

          


        </View>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <ProgressSteps>
            <ProgressStep value={this.state.value} scrollViewProps={true} style={{ flex: 1, }} label="$ Contribution" errors={this.state.errors} removeBtnRow={this.state.errors} >
              <Contribution value={this.value} navigation={this.props.navigation} data={this.state.errors} />
            </ProgressStep>

            <ProgressStep value={this.state.value} label={this.state.label} onNext={this.onNextStep1} errors={this.state.errors} removeBtnRow={this.state.errors}>
              <InviteFriend navigation={this.props.navigation} data={this.state.errors} />
            </ProgressStep>

            <ProgressStep value={this.state.value} label='Configure' onSubmit={this.confirmation} errors={this.state.errors} removeBtnRow={this.state.errors}>
              <ConfigurePool values={this.values} navigation={this.props.navigation} data={this.state.errors} />
            </ProgressStep>




          </ProgressSteps>
        </View>

      </View>

    );
  }
}
export default Pool;