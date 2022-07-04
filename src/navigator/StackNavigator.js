import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/main/Home';
import Splash from '../screens/auth/Splash';
import SplashNext from '../screens/auth/SplashNext';
import SplashFinal from '../screens/auth/SplashFinal';

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
      </StackNav.Navigator>
    </NavigationContainer>
  );
}
