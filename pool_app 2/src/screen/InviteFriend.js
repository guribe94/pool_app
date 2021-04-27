
import { arrayOf } from 'prop-types';
import React, {Component, useEffect} from 'react';
import { View, Text, Image, ScrollView, AsyncStorage, TouchableOpacity, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';  

class InviteFriend extends Component{
  constructor(props){
    super(props)
    this.state={
      listData: [],
      listItem: []

    }
    this.didFocus = props.navigation.addListener('focus', payload =>
    this.getData()
  );
  }

  getData(){
    console.log(global.arrayItem)
    this.setState({listData: global.listData})
  }

 async componentDidMount(){
  await AsyncStorage.setItem("errors", "false")
  
 }


 done = () =>{
      this.props.navigation.navigate('Pool')
 }

 
 dataList=(item,index)=>{
   console.log(item)
   return(
          <View style={{marginLeft: 20, flexDirection: 'row'}}>
            <Image source={{uri: item.profile_photo_path == null ? 'https://www.w3schools.com/howto/img_avatar.png' : 'http://112.196.64.118/poolapp/storage/app/public/users/'+item.profile_photo_path}} style={{width:50, height:50,marginTop:10,marginBottom: 20}}/>
            <Image source={require('../images/close.png')} style={{width:20, height:20,marginTop:-72,marginLeft: 30,marginBottom: 20}}/>
            <Text style={{color: 'rgb(22,137,146)', color: 'rgb(40,50,98)',fontSize: 14,marginTop:8}}>{item.name} </Text>
          </View> 
   )
 }

 removeData=(item,index)=>{
   let indexx
  Alert.alert(  
    'Are you sure you want to delete this user?',  
    '',  
    [  
        {  
            text: 'Cancel',  
            onPress: () => console.log('Cancel Pressed'),  
            style: 'cancel',  
        },  
        {text: 'Yes', onPress: () => {
          var array = [...this.state.listData]; // make a separate copy of the array
          

          var index = array.indexOf(item)
        

          
         
          if (index !== -1) {
            array.splice(index, 1);
            this.setState({listData: array});
          }
        console.log("item", this.state.listData, global.arrayItem)
        global.listData = this.state.listData
       
        }},  
    ]  
);  
 }

  render(){
  return (
    <View style={{ flex: 1 }}>
        <ScrollView style={{backgroundColor: '#fff',marginTop: '10%',flex: 1}}>
     

        <View style={{flexDirection: 'row',backgroundColor: 'rgb(250,250,250)',justifyContent: 'space-between',padding: 10,marginLeft: 20, marginRight: 20, borderRadius: 10, marginTop: 20}}>
            <View style={{marginTop: 20, marginBottom: 20}}>
               <Text style={{color: 'rgb(40,50,98)' ,fontSize: 24}}>INVITE FRIENDS </Text>
               <Text style={{fontSize: 24,color: 'rgb(22,137,146)', }}>TO YOUR </Text>
               <Text style={{color: 'rgb(22,137,146)', color: 'rgb(40,50,98)',fontSize: 24}}>POOL </Text>
             </View>
             <Image source={require('../images/pool.png')} style={{width:170, height:100,marginTop:20,marginBottom: 20}}/>
        </View>

        <View style={{flexDirection: 'row',backgroundColor: 'rgb(250,250,250)',marginBottom:20,padding: 10,marginLeft: 20, marginRight: 20, borderRadius: 10, marginTop: 20}}>
           <FlatList
           data={this.state.listData}
           horizontal
           renderItem={({item,index})=>(
            <View style={{marginLeft: 20,alignItems: 'center', alignSelf: 'center'}}>
              <Image source={{uri: item.profile_photo_path == null ? 'https://www.w3schools.com/howto/img_avatar.png' : 'http://112.196.64.118/poolapp/storage/app/public/users/'+item.profile_photo_path}} style={{width:50, height:50,borderRadius: 25,marginTop:10,marginBottom: 20,marginLeft: 10}}/>
              <TouchableOpacity style={{marginTop:-72,marginLeft: 50,}} onPress={()=>this.removeData(item,index)}>
              <Image source={require('../images/close.png')} style={{width:20, height:20,}}/>
              </TouchableOpacity>
              <Text style={{color: 'rgb(22,137,146)', color: 'rgb(40,50,98)',fontSize: 14,marginTop:30}}>{item.name} </Text>
           </View> 
          
           )}
           />
           

          <TouchableOpacity style={{marginLeft: 10}} onPress={()=>this.props.navigation.navigate('UserList')} >
            <Icon name="adduser" size={25} color="rgb(143,143,143)" style={{alignSelf: 'center',marginTop:10,width: 45, height: 45,backgroundColor: '#fff', borderRadius: 22, borderWidth: 2, borderColor: 'rgb(143,143,143)',padding: 8}} />
            <Text style={{color: 'rgb(22,137,146)', color: 'rgb(40,50,98)',fontSize: 12,}}> Add Friend </Text>
          </TouchableOpacity>

        </View>
        </ScrollView>
        
        {/* <View style={{flexDirection: 'row',padding: 5,justifyContent: 'center',backgroundColor: 'rgb(0,126,135)',width: '100%'}}>
            <Text onPress={()=>this.done()} style={{ color: '#fff',fontSize: 24,height: 50,textAlignVertical: 'center' }}>DONE </Text>
            <FontAwesome name="check" size={24} color="#fff" style={{alignSelf: 'center'}} />
        </View> */}

        
      </View>
  
  );
}
}
export default  InviteFriend;