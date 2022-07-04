import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigatior from './src/navigator/StackNavigator';
import {LogBox} from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs();
  return <StackNavigatior />;
}
