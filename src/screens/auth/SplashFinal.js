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
      props.navigation.navigate('Login');
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
      <View style={{marginVertical: normalize(30)}}>
        <View style={{alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            source={ICONS.Top_fin}
            style={{height: normalize(130), width: normalize(110)}}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: normalize(6)}}>
          {/* <Image
            resizeMode="contain"
            source={ICONS.TxTop_fin}
            style={{
              height: normalize(14),
              width: normalize(230),
            }}
          /> */}
          <Text
            style={{
              fontFamily: 'PlayfairDisplay-ExtraBoldItalic',
              fontSize: 20,
              color: '#FF961C',
            }}>
            Your business is our business
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: normalize(20)}}>
          {/* <Image
            resizeMode="contain"
            source={ICONS.Txbottom_fin}
            style={{height: normalize(15), width: normalize(98)}}
          /> */}
          <Text
            style={{
              fontFamily: 'PlayfairDisplay-ExtraBoldItalic',
              fontSize: 20,
              color: 'rgba(0,0,0,0.5)',
            }}>
            Sponsored by
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: normalize(6)}}>
          <Image
            resizeMode="contain"
            source={ICONS.bottom_fin}
            style={{height: normalize(380), width: normalize(300)}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
