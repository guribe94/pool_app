import React, { useState } from "react";
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';
import Interest from '../screen/Interest';
import Contribution from '../screen/Contribution';
import ConfigurePool from '../screen/ConfigurePool'
import Pool from '../screen/Pool';
import InviteFriend from '../screen/InviteFriend';
import Dashboard from '../screen/Dashboard';
import InviteFriends from '../screen/InviteFriends';
import Confirmation from '../screen/Confirmation';
import Setting from '../screen/Setting';
import AddPayment from '../screen/AddPayment';
import EditProfile from '../screen/EditProfile';
import PoolLIst from '../screen/PoolList'
import PreviousInvite from '../screen/PreviousInvites';
import PoolDetails from '../screen/PoolDetails';
import ForgotPassword from '../screen/ForgotPassword';
import ChangePassword from '../screen/ChangePassword';
import JoinNow from '../screen/JoinNow';
import UserList from '../screen/UserList';
import JoinFriendPool from '../screen/JoinFriendPool';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const AppNavigation = () => {



  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Interest" component={Interest} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Contribution" component={Contribution} options={{ gestureEnabled: false }} />
        <Stack.Screen name="ConfigurePool" component={ConfigurePool} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Pool" component={Pool} options={{ gestureEnabled: false }} />
        <Stack.Screen name="InviteFriend" component={InviteFriend} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ gestureEnabled: false }} />
        <Stack.Screen name="InviteFriends" component={InviteFriends} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Confirmation" component={Confirmation} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Setting" component={Setting} options={{ gestureEnabled: false }} />
        <Stack.Screen name="AddPayment" component={AddPayment} options={{ gestureEnabled: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ gestureEnabled: false }} />
        <Stack.Screen name="PoolLIst" component={PoolLIst} options={{ gestureEnabled: false }} />
        <Stack.Screen name="PreviousInvite" component={PreviousInvite} options={{ gestureEnabled: false }} />
        <Stack.Screen name="PoolDetails" component={PoolDetails} options={{ gestureEnabled: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ gestureEnabled: false }} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ gestureEnabled: false }} />
        <Stack.Screen name="JoinNow" component={JoinNow} options={{ gestureEnabled: false }} />
        <Stack.Screen name="UserList" component={UserList} options={{ gestureEnabled: false }} />
        <Stack.Screen name="JoinFriendPool" component={JoinFriendPool} options={{ gestureEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;