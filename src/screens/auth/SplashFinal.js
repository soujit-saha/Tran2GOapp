import React, {useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Image,
  Text,
  View,
  StatusBar,
} from 'react-native';
import {IMAGES, COLORS, ICONS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
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
      <View style={{marginVertical: normalize(25)}}>
        <View style={{alignItems: 'center'}}>
          <Image
            // resizeMode="contain"
            source={ICONS.Top_fin}
            style={{height: normalize(155), width: normalize(118)}}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: normalize(6)}}>
          <Image
            // resizeMode="contain"
            source={ICONS.TxTop_fin}
            style={{
              height: normalize(14),
              width: normalize(230),
            }}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: normalize(30)}}>
          <Image
            // resizeMode="contain"
            source={ICONS.Txbottom_fin}
            style={{height: normalize(15), width: normalize(98)}}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: normalize(6)}}>
          <Image
            resizeMode="cover"
            source={ICONS.bottom_fin}
            style={{height: normalize(360), width: normalize(295)}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
