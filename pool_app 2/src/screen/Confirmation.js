
import React, { Component, useEffect } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, AsyncStorage, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { baseUrl } from '../constant/Constants'
import { hasPinCode } from '@haskkor/react-native-pincode/dist/src/utils';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
let arr = []
class Confirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: [],
            id: '',
            listItem: [],
            array: []

        }
       
    }

    
    done = async () => {
        this.props.navigation.navigate('Dashboard')
    }

    async inviteFriend() {

        
    }
    

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: '#fff', marginTop: '20%', flex: 1, borderWidth: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderColor: '#e9e9e9' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={{ height: hp('2.2%'), width: wp('7.5%'), alignSelf: "flex-end", marginRight: "15%", top: 15, color: 'rgb(0,106,115)' }} source={require('../images/back.png')}></Image>
                        <Text style={{ textAlign: 'right', marginRight: 20, color: 'rgb(0,106,115)', fontSize: 18, bottom: 6 }}>BACK</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ textAlign: 'center', marginRight: '-3%', fontSize: 22,bottom:26 }}>YOU ARE ALL SET</Text>
                    </View>



                    <View style={{ backgroundColor: 'rgb(250,250,250)', borderRadius: 8, height: 140, justifyContent: 'center', marginLeft: 20, marginRight: 20, marginTop: 20, alignSelf: 'center' }}>
                        <Image style={{ width: 100, height: 100,bottom:40 }} source={global.image} />
                        {/* <Ionicons name="ios-images" size={60} color="rgb(143,143,143)" style={{marginTop:0,marginRight: 20,alignSelf: 'center'}} /> */}
                    </View>

                    <View style={{ marginLeft: 20, elevation: 1, marginRight: 20, height: 170,bottom:20, borderRadius: 20, backgroundColor: 'rgb(237,246,245)' }}>
                        <ImageBackground source={require('../images/dash.png')} style={{ width: '75%', height: '85%', marginTop: 30, alignSelf: 'flex-end', marginTop: '10%' }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, position: 'absolute' }}>
                            <View >
                                <View style={{ flexDirection: 'row', marginTop: 15, }}>
                                    <Text style={{ fontSize: 24, }}> I WANT TO RECEIVE </Text>
                                    <Text style={{ textAlign: 'center', fontSize: 22, color: 'rgb(0,103,115)' }}> $</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 22, color: 'rgb(0,103,115)' }}>{global.amount}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 15, }}>
                                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#000' }}> EVERY </Text>
                                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'rgb(0,103,115)' }}>  {global.month} </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginLeft: 20, elevation: 1, marginRight: 20, height: 130, marginTop: 20, borderColor: '#fff', borderRadius: 20, backgroundColor: 'rgb(237,246,245)' }}>
                        <ImageBackground source={require('../images/invite.png')} style={{ width: '80%', height: '85%', marginTop: 30, alignSelf: 'flex-end', marginTop: '10%', opacity: 0.2 }} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, position: 'absolute' }}>
                            <FlatList
                                data={this.state.listData}
                                horizontal
                                renderItem={({ item, index }) => (
                                    <View style={{ marginLeft: 20, alignItems: 'center', alignSelf: 'center' }}>
                                        <Image source={{ uri: item.profile_photo_path == null ? 'https://www.w3schools.com/howto/img_avatar.png' : 'http://112.196.64.118/poolapp/storage/app/public/users/' + item.profile_photo_path }} style={{ width: 50, height: 50, borderRadius: 25, marginTop: 10, marginBottom: 20, marginLeft: 10 }} />

                                        <Text style={{ color: 'rgb(22,137,146)', color: 'rgb(40,50,98)', fontSize: 14, marginTop: -20 }}>{item.name} </Text>
                                    </View>

                                )}
                            />
                        </View>
                    </View>





                </ScrollView>

                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center' }}>
                    <Text onPress={() => this.done()} style={{ color: 'rgb(40,50,98)', fontSize: 23, height: 60, textAlignVertical: 'center', marginTop: "4%", fontWeight: "bold" }}>DONE </Text>
                    <Icon name="check" size={25} color="rgb(40,50,98)" style={{ alignSelf: 'center', marginBottom: "4%" }} />
                </View>
            </View>

        );
    }
}
export default Confirmation;






