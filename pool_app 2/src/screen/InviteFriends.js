import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class InviteFriends extends Component {


    invites() {
        this.props.navigation.navigate('Dashboard')
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Text style={{ fontSize: 20, marginTop: "15%", marginLeft: "80%",color: 'rgb(0,95,107)' }}>BACK</Text>
                    <Image style={{ height: hp('2.2%'), width: wp('7.5%'), marginLeft: "74%", bottom: 22 }} source={require('../images/back.png')} ></Image>
                </TouchableOpacity>
                <Text style={{ marginTop: "5%", textAlign: 'center', fontSize: 20 }}>Invite Friends</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 3, borderTopColor: 'rgb(245,245,245)', marginTop: 30, backgroundColor: '#fff', height: 60 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                        <Image source={require('../images/chat.png')} style={{ width: 30, height: 25, }} />
                        <Text style={{ fontSize: 18, marginLeft: 10 }}> Share link via SMS</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5, marginRight: 20 }}>
                        <Image source={require('../images/copy.png')} style={{ width: 60, height: 60, }} />
                        <Image source={require('../images/share.png')} style={{ width: 60, height: 60, }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 2, borderTopColor: 'rgb(245,245,245)', borderBottomWidth: 3, borderBottomColor: 'rgb(245,245,245)', backgroundColor: '#fff', height: 60 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                        <Image source={require('../images/emaill.png')} style={{ width: 30, height: 25, }} />
                        <Text style={{ fontSize: 18, marginLeft: 10 }}> Share link via email</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5, marginRight: 20 }}>
                        <Image source={require('../images/copy.png')} style={{ width: 60, height: 60, }} />
                        <Image source={require('../images/share.png')} style={{ width: 60, height: 60, }} />
                    </View>
                </View>

                <Text style={{ marginTop: 30, marginLeft: 20, fontSize: 20 }}>Share through social platfroms</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 3, borderTopColor: 'rgb(245,245,245)', marginTop: 20, backgroundColor: '#fff', height: 60 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                        <Image source={require('../images/facebookk.png')} style={{ width: 14, height: 25, }} />
                        <Text style={{ fontSize: 18, marginLeft: 10 }}> Share link via facebook</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5, marginRight: 20 }}>
                        <Image source={require('../images/copy.png')} style={{ width: 60, height: 60, }} />
                        <Image source={require('../images/share.png')} style={{ width: 60, height: 60, }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 2, borderTopColor: 'rgb(245,245,245)', backgroundColor: '#fff', height: 60 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                        <Image source={require('../images/googlee.png')} style={{ width: 20, height: 20, }} />
                        <Text style={{ fontSize: 18, marginLeft: 10 }}> Share link via google</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5, marginRight: 20 }}>
                        <Image source={require('../images/copy.png')} style={{ width: 60, height: 60, }} />
                        <Image source={require('../images/share.png')} style={{ width: 60, height: 60, }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 40, justifyContent: 'space-between', borderTopWidth: 2, borderTopColor: 'rgb(245,245,245)', backgroundColor: '#fff', height: 60 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                        <Image source={require('../images/twitterr.png')} style={{ width: 20, height: 16, }} />
                        <Text style={{ fontSize: 18, marginLeft: 10 }}> Share link via twitter</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5, marginRight: 20 }}>
                        <Image source={require('../images/copy.png')} style={{ width: 60, height: 60, }} />
                        <Image source={require('../images/share.png')} style={{ width: 60, height: 60, }} />
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("PreviousInvite")}
                    style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', bottom: 0, backgroundColor: 'rgb(252,252,252)', position: 'absolute', borderTopWidth: 1, width: '100%', borderTopColor: 'rgb(234,234,234)' }}>
                    <Image source={require('../images/invitation.png')} style={{ width: 25, height: 20, alignSelf: 'center',bottom:14 }} />
                    <Text style={{ color: 'rgb(40,50,98)', fontSize: 22, height: 60, textAlignVertical: 'center',top:4 }}>  Previous Invites</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
export default InviteFriends;