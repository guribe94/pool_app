import React, {Component} from 'react';
import { View, SafeAreaView,StatusBar} from 'react-native';
import AppNavigator from './src/navigation/AppNavigation';
console.disableYellowBox = true;

const App = () =>{
  return (
    <View style={{ flex: 1, backgroundColor: 'black'}}>
       <StatusBar   barStyle={'dark-content'} />
      {/* <Text>hel/lo</Text> */}
     <AppNavigator /> 
    </View>
  
  );
}
export default  App;