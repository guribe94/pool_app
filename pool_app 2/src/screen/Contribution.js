
import React, { Component, useEffect } from 'react';
import { AsyncStorage, ImageBackground } from 'react-native';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Contribution extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // value: 0,
      // items: ['January','Febraury', 'March', 'April']
    }

    this.controller;
  }

  async componentDidMount() {
    await AsyncStorage.setItem("errors", "false")
  }

  textChange(text) {
    this.setState({ value: text })
    this.props.value(text)
    var num = Number(text)
    var val = num / 12
    var num1 = val.toFixed(2)

    global.text_val = num1
    global.amount = text
    console.log(num1)
  }

  setMOnth(item) {

    global.month = item.label
    global.val = item.value
  }

  next() {
    this.props.navigation.navigate('Pool')
  }

  render() {
    // var num = global.text_val.toFixed(2);
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#fff', flex: 1 }} >


          <View style={{ marginLeft: 30, elevation: 1, marginRight: 30, height: 200, borderRadius: 20, backgroundColor: 'rgb(237,246,245)' }}>
            <ImageBackground source={require('../images/dash.png')} style={{ width: '75%', height: '85%', marginTop: 30, alignSelf: 'flex-end', marginTop: '10%' }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, position: 'absolute' }}>
              <View>
                <View style={{ flexDirection: 'row', marginTop: 15, }}>
                  <Text style={{ fontSize: 24, }}>I WANT TO RECEIVE </Text>
                  <View style={{ width: '30%', flexDirection: 'row', height: 30, backgroundColor: '#fff', borderRadius: 10, alignSelf: 'center', }}>

                    <Text style={{ backgroundColor: 'rgb(0,126,135)', color: '#fff', textAlign: 'center', fontSize: 20, width: 30, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>$</Text>
                    <TextInput
                      value={this.state.value}
                      style={{ marginLeft: 5, width: 100, padding: 5 }}
                      placeholderTextColor='rgb(170, 171, 173)'
                      maxLength={7}
                      keyboardType='numeric'
                      onChangeText={(text) => this.textChange(text)}
                    />
                  </View>
                </View>


                <View style={{ flexDirection: 'row', marginTop: 15, }}>

                  <Text style={{ textAlign: 'center', fontSize: 20, color: '#000' }}>EVERY </Text>
                  <View style={{ width: '80%' }}>
                    <DropDownPicker
                      placeholder="Select Month"
                      autoScrollToDefaultValue={true}
                      items={[
                        { label: 'January', value: 'item1' },
                        { label: 'February', value: 'item2' },
                        { label: 'March', value: 'March' },
                        { label: 'April', value: 'April' },
                        { label: 'May', value: 'item1' },
                        { label: 'June', value: 'item2' },
                        { label: 'July', value: 'item1' },
                        { label: 'August', value: 'item2' },
                        { label: 'September', value: 'item1' },
                        { label: 'October', value: 'item2' },
                        { label: 'November', value: 'item1' },
                        { label: 'December', value: 'item2' },
                      ]}
                      defaultValue={global.val}
                      defaultIndex={1}
                      containerStyle={{ height: 30 }}
                      onChangeItem={item => this.setMOnth(item)}
                      style={{ position: 'absolute' }}
                    />
                  </View>

                </View>
              </View>



            </View>


          </View>

          <Text style={{ color: 'rgb(40,50,98)', textAlign: 'center', fontSize: 24, marginTop: 70 }}>WHICH MEANS EVERYONE</Text>
          <Text style={{ color: 'rgb(22,137,146)', textAlign: 'center', fontSize: 24, marginTop: 10 }}>WILL CONTRIBUTE $ <Text>{(`${global.text_val}`)}</Text></Text>
          <Text style={{ color: 'rgb(40,50,98)', textAlign: 'center', fontSize: 24, marginTop: 10, marginBottom: 160 }}>PER MONTH</Text>

        </View>


      </View>

    );
  }
}
export default Contribution;