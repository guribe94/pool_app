import React, {useEffect} from 'react';
import { View, Image, StatusBar} from 'react-native';

const SplashScreen = (props) =>{

    useEffect(() => {
        setTimeout(() => {props.navigation.navigate('Login')}, 3000)
      });

  return (
    <View style={{ flex: 1, backgroundColor: 'black'}}>
         <StatusBar hidden />
      <Image source={require('../images/splash.jpg')} style={{width: '100%', height: '100%'}}/>
     
    </View>
  
  );
}
export default  SplashScreen;