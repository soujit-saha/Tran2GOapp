import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/main/Home';
import Splash from '../screens/auth/Splash';
import SplashNext from '../screens/auth/SplashNext';
import SplashFinal from '../screens/auth/SplashFinal';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import VerifyEmail from '../screens/main/VerifyEmail';
import ForgotPs from '../screens/main/ForgotPs';
import ResetPs from '../screens/main/ResetPs';
import ChangePs from '../screens/main/ChangePs';
import Select from '../screens/main/Select';
import ProfileRe from '../screens/main/ProfileRe';

export default function Stack() {
  const StackNav = createStackNavigator();
  return (
    <NavigationContainer>
      <StackNav.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <StackNav.Screen name="Splash" component={Splash} />
        <StackNav.Screen name="SplashNext" component={SplashNext} />
        <StackNav.Screen name="SplashFinal" component={SplashFinal} />
        <StackNav.Screen name="Home" component={Home} />
        <StackNav.Screen name="Login" component={Login} />
        <StackNav.Screen name="Register" component={Register} />
        <StackNav.Screen name="VerifyEmail" component={VerifyEmail} />
        <StackNav.Screen name="ForgotPs" component={ForgotPs} />
        <StackNav.Screen name="ResetPs" component={ResetPs} />
        <StackNav.Screen name="ChangePs" component={ChangePs} />
        <StackNav.Screen name="Select" component={Select} />
        <StackNav.Screen name="ProfileRe" component={ProfileRe} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}
