import React, { Component } from 'react';
import {
  Text, TouchableOpacity, Image, FlatList
} from 'react-native'
import View from 'react-native-view'
import BouncyDrawer from 'react-native-bouncy-drawer'
import MAIcon from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler';
import Accordion from 'react-native-collapsible/Accordion';
import { AsyncStorage } from 'react-native';

const SECTIONS = [
  {
    title: 'Notifications',
    content: 'Important notification',
    image: require('../images/notification.png')
  },

];

var name;
var age;
var date;
var gender;
var bio;
var image;

const arrayItems = [
  {
    id: 0,
    name: "CREATE A NEW POOL",
    color: "#fff",
    icon: "business",
    value: false
  },
  {
    id: 1,
    name: "DASHBOARD",
    color: "#fff",
    icon: "view-headline",
    value: false
  },
  {
    id: 2,
    name: "YOUR POOLS",
    color: "#fff",
    icon: "public",
    value: false
  },
  {
    id: 3,
    name: "YOUR PROFILE",
    color: "#fff",
    icon: "person-outline",
    value: false
  },
  {
    id: 4,
    name: "INVITE FRIENDS",
    color: "#fff",
    icon: "people-outline",
    value: false
  },
  {
    id: 5,
    name: "SETTINGS",
    color: "#fff",
    icon: "settings",
    value: false
  },
  {
    id: 5,
    name: "LOGOUT",
    color: "#fff",
    icon: "logout",
    value: false
  }
]
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
      activeSections: [],
      name: 'Buddy Pool',
      value: 0,
      arrayItems: [
        {
          id: 0,
          name: "CREATE A NEW POOL",
          color: "#fff",
          icon: "business",
          value: false
        },
        {
          id: 1,
          name: "DASHBOARD",
          color: "#fff",
          icon: "view-headline",
          value: false
        },
        {
          id: 2,
          name: "YOUR POOL",
          color: "#fff",
          icon: "public",
          value: false
        },
        {
          id: 3,
          name: "YOUR PROFILE",
          color: "#fff",
          icon: "person-outline",
          value: false
        },
        {
          id: 4,
          name: "INVITE FRIENDS",
          color: "#fff",
          icon: "people-outline",
          value: false
        },
        {
          id: 5,
          name: "SETTINGS",
          color: "#fff",
          icon: "settings",
          value: false
        },
        {
          id: 5,
          name: "LOGOUT",
          color: "#fff",
          icon: "logout",
          value: false
        }
      ],
      show: false
    }
    this.didFocus = props.navigation.addListener('focus', payload =>
      this.setState({ show: true })
    );
  }

  
  _renderSectionTitle = section => {
    return (
      <View >
        <Text>{section.content}</Text>
      </View>
    );
  };

  _renderHeader = section => {
    return (
      <View  >
        <Text style={{ fontSize: 24, marginLeft: 20, }}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View>
        <View style={{ flexDirection: 'row', marginLeft: 20, }}>
          <Image style={{ width: 22, height: 30, marginTop: 20, marginLeft: 10 }} source={section.image} />
          <View style={{ width: '100%', marginLeft: 30, }}>
            <Text style={{ marginTop: 20, fontSize: 18, }}>{section.content}</Text>
            <Text style={{ borderBottomWidth: 2, borderBottomColor: '#f9f9f9', width: '100%', marginTop: 5 }}></Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginLeft: 20, }}>
          <Image style={{ width: 22, height: 30, marginTop: 20, marginLeft: 10 }} source={section.image} />
          <View style={{ width: '100%', marginLeft: 30, }}>
            <Text style={{ marginTop: 20, fontSize: 18, }}>{section.content}</Text>
            <Text style={{ borderBottomWidth: 2, borderBottomColor: '#f9f9f9', width: '100%', marginTop: 5 }}></Text>
          </View>
        </View>
      </View>

    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  async anotherScreen(index) {
    await this.setState({ value: index })
    if (index == 0) {
      this.props.navigation.navigate('Pool')
    }
    else if (index == 1) {
      this.props.navigation.navigate('Dashboard')
    }
    else if (index == 2) {
      this.props.navigation.navigate('PoolLIst')
    }
    else if (index == 3) {
      this.props.navigation.navigate('EditProfile')
    }
    else if (index == 4) {
      this.props.navigation.navigate('InviteFriends')
    }
    else if (index == 5) {
      this.props.navigation.navigate('Setting')
    }
    else if (index == 6) {
      await AsyncStorage.setItem("token", '')
      this.props.navigation.navigate('Login')
    }

  }

  renderItem = (text, color, iconName, index) => {
    return (
      <TouchableOpacity onPress={() => this.anotherScreen(index)}>
        <View smp row vcenter>
          <View lgpr>
            <MAIcon name={iconName} color={color} size={26} />
          </View>
          <Text style={{ fontSize: 16, color: color, fontWeight: '600' }}>{text}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderContent = () => {

    return (
      <View flex hcenter mdpr style={{ backgroundColor: '#3F3C4C' }}>
        <View flex>
          <View style={{ flex: 1 }} />
          {this.renderItem("CREATE A NEW POOL", this.state.value == 0 ? "rgb(53,200,177)" : '#fff', "business", 0)}
          {this.renderItem("DASHBOARD", this.state.value == 1 ? "rgb(53,200,177)" : '#fff', "view-headline", 1)}
          {this.renderItem("YOUR POOL", this.state.value == 2 ? "rgb(53,200,177)" : '#fff', "public", 2)}
          {this.renderItem("YOUR PROFILE", this.state.value == 3 ? "rgb(53,200,177)" : '#fff', "person-outline", 3)}
          {this.renderItem("INVITE FRIENDS", this.state.value == 4 ? "rgb(53,200,177)" : '#fff', "people-outline", 4)}
          <View mdp />
          {this.renderItem("SETTINGS", this.state.value == 5 ? "rgb(53,200,177)" : '#fff', "settings", 5)}
          {this.renderItem("LOGOUT", this.state.value == 6 ? "rgb(53,200,177)" : '#fff', "logout", 6)}
          <View style={{ flex: 3 }} />
        </View>
      </View>
    )
  }
  
  setting() {

    this.props.navigation.navigate('Setting')
  }


  render() {
    return (
      <View flex>

        <BouncyDrawer
          willOpen={() => this.setState({ drawer: true })}
          didOpen={() => console.log('did open')}
          willClose={() => this.setState({ drawer: false })}
          didClose={() => this.setState({ drawer: false })}
          title="Dashboard"
          titleStyle={{ color: '#fff', fontFamily: 'Helvetica Neue', fontSize: 20, marginLeft: -3, paddingTop: 30 }}
          closedHeaderStyle={{ backgroundColor: '#fff' }}
          defaultOpenButtonIconColor="#fff"
          defaultCloseButtonIconColor="#fff"
          renderContent={this.renderContent}
        // openedHeaderStyle={{ backgroundColor: '#3F3C4C' }}
        />
        {this.state.drawer == false ?
          <TouchableOpacity onPress={() => this.setting()} style={{ alignSelf: 'flex-end', marginTop: 20, marginRight: 8 }}>
            <Image style={{ width: 50, height: 50 }} source={require('../images/setting.png')} />
          </TouchableOpacity> : null
        }
        {this.state.drawer == false ? <ScrollView style={{ marginTop: -10 }}>
          <View style={{ backgroundColor: 'rgb(1,128,137)', height: '15%', marginTop: -10 }}>
            <Text style={{ textAlignVertical: 'center', textAlign: 'center', marginTop: 40, fontSize: 30, color: '#fff' }}>Welcome Back Name!</Text>
          </View>



          <View style={{ marginLeft: 20, marginRight: 20, width: '90%', position: 'absolute', elevation: 5, borderRadius: 20, top: '16%', backgroundColor: '#fff' }}>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#e9e9e9' }}>
              <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, marginBottom: 18, }}>
                <Text style={{ textAlign: 'center', fontSize: 18, }}>You are participating in </Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('PoolLIst')} ><Text style={{ fontSize: 18, color: 'rgb(1,128,137)' }}>5</Text></TouchableOpacity>
                <Text style={{ fontSize: 18, }}> pools with</Text>

              </View>
              <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: -18 }}>
                <TouchableOpacity> 
                <Text style={{ fontSize: 18, color: 'rgb(1,128,137)' }}> 36</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 18, marginBottom: 10 }}> friends</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30, }}>
              <Text style={{ textAlign: 'center', fontSize: 20, color: 'rgb(31,46,96)' }}>You will receive</Text>
              <Text style={{ textAlign: 'center', fontSize: 20, color: 'rgb(1,128,137)' }}> {global.amount ? global.amount : "Amount"}</Text>
              <Text style={{ textAlign: 'center', fontSize: 20, color: 'rgb(31,46,96)' }}> from</Text>
            </View>


            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10, marginBottom: 30 }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('PoolDetails', { name: global.poolName })}><Text style={{ textAlign: 'center', fontSize: 20, marginTop: 0, color: 'rgb(0,122,134)' }}>{global.poolName ? global.poolName : "Pool Name"} </Text></TouchableOpacity>
              <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 0, color: 'rgb(31,46,96)' }}> in </Text>
              <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 0, color: 'rgb(0,122,134)' }}>{global.month ? global.month : "Month"} </Text>
            </View>

          </View>
          
          <View style={{ marginTop: '53%' }}>
            {/* <Accordion
              sections={SECTIONS}
              activeSections={this.state.activeSections}
              // renderSectionTitle={this._renderSectionTitle}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              onChange={this._updateSections}

            /> */}
          </View>

          <Text style={{ marginTop: 20, fontSize: 24, marginLeft: 20, }}>Other Options</Text>
          <View style={{ marginBottom: '40%', marginTop: 20 }}>
            <View style={{ flexDirection: 'row', marginLeft: 20, }}>
              <Image style={{ width: 30, height: 30, marginTop: 20, marginLeft: 10 }} source={require('../images/active.png')} />
              <View style={{ width: '100%', marginLeft: 30, }}>
                <Text onPress={() => this.props.navigation.navigate("PoolLIst")} style={{ marginTop: 20, fontSize: 18, }}>See your active pools</Text>
                <Text style={{ borderBottomWidth: 2, borderBottomColor: '#f9f9f9', width: '100%', marginTop: 5 }}></Text>
              </View>
            </View>

            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 20, }} onPress={() => this.props.navigation.navigate('Pool')}>
              <Image style={{ width: 30, height: 30, marginTop: 20, marginLeft: 10 }} source={require('../images/newPool.png')} />
              <View style={{ width: '100%', marginLeft: 30, }}>
                <Text style={{ marginTop: 20, fontSize: 18, }}>Start a new pool</Text>
                <Text style={{ borderBottomWidth: 2, borderBottomColor: '#f9f9f9', width: '100%', marginTop: 5 }}></Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 30 }} onPress={() => this.props.navigation.navigate('JoinFriendPool')}>
              <Image style={{ width: 30, height: 30, marginTop: 20, marginLeft: 10 }} source={require('../images/join.png')} />
              <View style={{ width: '100%', marginLeft: 30, }}>
                <Text style={{ marginTop: 20, fontSize: 18, }}>Join a friends pool</Text>
                {/* <Text style={{borderBottomWidth: 1, borderBottomColor: '#e9e9e9',width: '100%',marginTop: 5 }}></Text> */}
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView> : null}
      </View>
    );
  }
}


