import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, FlatList, StatusBar, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import nexticon from '../images/next.png'
import frendicon from '../images/friend.png'
import poolimage from '../images/poolimage.png'
import pooldateicon from '../images/date.png'
import dateicon from '../images/date1.png'
import personicon from '../images/person.png'


export default class PreviousInvites extends Component {


    constructor(props) {
        super(props);
        this.state = {
            activelist: true,
            pastlist: false,
            activepooldata: [{ name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }, { name: 1 },]

        }
        // this.didFocus = this.props.navigation.addListener("focus", (payload) =>
        // this.get(),


        // );
    }

    renderActivelist(item, index) {

        return (
            <View style={{
                shadowColor: '#707070',
                shadowOffset: {
                    width: 0,
                    height: .5
                },
                shadowRadius: 3,
                shadowOpacity: .2, marginTop: "4%", width: wp("90%"), alignSelf: 'center', backgroundColor: '#FBFBFB', borderRadius: 10, height: hp("15%"),
            }}>


                <View style={{ flexDirection: 'row' }}>

                    <View>
                        <Image source={frendicon} style={{ marginLeft: "3%", marginTop: "18%", height: hp("9%"), width: wp("28%"), resizeMode: 'contain' }} />
                    </View>

                    <View style={{ marginTop: "10%", justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={personicon} style={{ height: 22, width: 40, resizeMode: 'contain' }} />
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Person name</Text>
                        </View>

                        <View style={{ marginTop: "10%", flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={dateicon} style={{ marginLeft: "3%", height: 22, width: 45, resizeMode: 'contain' }} />
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Date of joining</Text>
                        </View>


                    </View>




                </View>


            </View>

        )
    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <StatusBar barStyle={'dark-content'} />
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text style={{ fontSize: 20, marginTop: "15%", marginLeft: "80%",color: 'rgb(0,106,115)' }}>BACK</Text>
                    <Image style={{ height: hp('2.2%'), width: wp('7.5%'), marginLeft: "74%", bottom: 22 }} source={require('../images/back.png')} ></Image>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', fontSize: 20, color: "#000000", fontWeight: "700",bottom:10 }}>INVITE FRIENDS</Text>


                <View>
                    <FlatList
                        style={{ marginBottom: 80 }}
                        data={this.state.activepooldata}
                        renderItem={({ item, index }) => this.renderActivelist(item, index)}
                    />
                </View>

              

            </View >
        )
    }
}

