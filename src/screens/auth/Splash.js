import React, {useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Image,
  View,
  StatusBar,
} from 'react-native';
import {IMAGES, COLORS, ICONS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('SplashNext');
    }, 3000);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      <View style={{marginVertical: normalize(135)}}>
        <View style={{alignItems: 'center'}}>
          <Image
            resizeMode="cover"
            source={ICONS.Top_logo}
            style={{height: normalize(190), width: normalize(280)}}
          />
        </View>
        <View style={{marginTop: normalize(-20)}}>
          <Image
            source={ICONS.texts}
            style={{height: normalize(20), width: normalize(50)}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            source={ICONS.Bottom_logo}
            style={{height: normalize(200), width: normalize(240)}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
