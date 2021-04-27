import React, {Component} from 'react';
import { View, Text, Image, ScrollView, AsyncStorage} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';  
import Ionicons from 'react-native-vector-icons/Ionicons';  
import ImagePicker from 'react-native-image-picker';
import { createIconSetFromFontello } from 'react-native-vector-icons';
const options = {
  title: 'Select Image',
  maxWidth: 500,
  maxHeight: 500,
  quality: 0.7,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
class ConfigurePool extends Component{
  constructor(props) {
    super(props);
    this.state = {
     
    userImg: require('../images/friend.png'),
    poolName: '',
    purpose: ''
    };

   
  }
  async componentDidMount(){
    await AsyncStorage.setItem("errors", "false")
    console.log("global.arrayItem===", global.arrayItem)
  }
      next = async() =>{
        // await AsyncStorage.setItem("errors", "true")
       this.props.navigation.navigate('Pool')
     }

     addImage=()=>{
      ImagePicker.launchImageLibrary(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri, fileName: response.fileName };
    
          this.setState({userImg: source})
          global.image = source
          console.log(source)
          
          global.Uri = response.uri
          global.imageName= response.fileName
          global.type = 'image/jpeg'
         
        }
      });
     }
     

     purpose= async(text)=>{
      this.setState({purpose: text})
      global.purpose = text
      
     }

     poolName=(text)=>{
      this.setState({poolName: text})
      global.poolName = text
      this.props.values(text)
     }
      
     render(){
   return (
    <View style={{ flex: 1 }}>
        <ScrollView style={{backgroundColor: '#fff',flex: 1}}>
        {/* <View >
            <Text style={{textAlign: 'center', marginTop:10,  fontSize: 24}}>Configure your Pool</Text>
          
        </View> */}

        <View style={{marginLeft: 30,elevation: 1, marginRight:30, height: 220,   borderRadius: 20}}>
           
            <View style={{backgroundColor: 'rgb(250,250,250)',borderTopLeftRadius:12,borderTopRightRadius:12,height: 120,justifyContent: 'center',alignSelf: 'center'}}>
            <Image style={{width: 100, height: 100}} source={this.state.userImg}/>
             {/* <Ionicons name="ios-images" size={60} color="rgb(143,143,143)" style={{marginTop:0,marginRight: 20,alignSelf: 'center'}} /> */}
        </View> 

       <TouchableOpacity onPress={()=>this.addImage()}>
          <Text style={{backgroundColor: 'rgb(22,137,146)',width: 150, height: 35,marginTop:15, borderRadius:15, color: '#fff',textAlignVertical: 'center',alignSelf: 'center',textAlign: 'center'}}>ADD GROUP PHOTO</Text>
          </TouchableOpacity>
        </View>

          <TextInput  style={{ height: 35, borderRadius: 14,marginTop: 20,padding: 10,marginLeft: 30, marginRight: 30,backgroundColor: '#f9f9f9',color: '#a9a9a9'}}
            placeholder="Set your purpose"
            value={this.state.purpose}
            placeholderTextColor ='rgb(170, 171, 173)'
            onChangeText = {(text)=>this.purpose(text)}
            keyboardType= 'email-address'
          />

         <TextInput  style={{ height: 35, borderRadius: 14,marginTop: 10,padding: 10,marginLeft: 30, marginRight: 30,backgroundColor: '#f9f9f9',color: '#a9a9a9'}}
            placeholder="Pool name"
            value={this.state.poolName}
            placeholderTextColor ='rgb(170, 171, 173)'
            onChangeText = {(text)=>this.poolName(text)}
            keyboardType= 'email-address'
          />
        

        
   <View style={{marginTop: 40}}/>
        </ScrollView>

    
      </View>
  
  );
}
}
export default  ConfigurePool;