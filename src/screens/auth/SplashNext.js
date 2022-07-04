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

export default function SplashNext(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('SplashFinal');
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
            // resizeMode="contain"s
            source={ICONS.Top_next}
            style={{height: normalize(180), width: normalize(200)}}
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <Image
            // resizeMode="contain"s
            source={ICONS.text_next}
            style={{
              height: normalize(15),
              width: normalize(180),
              marginVertical: normalize(20),
            }}
          />
        </View>

        <Image
          // resizeMode="contain"s
          source={ICONS.power}
          style={{
            height: normalize(11),
            width: normalize(78),
            marginTop: normalize(110),
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: normalize(20),
            width: '90%',
            marginHorizontal: normalize(15),
          }}>
          <Image
            // resizeMode="contain"s
            source={ICONS.next_lef}
            style={{
              height: normalize(50),
              width: normalize(150),
            }}
          />
          <Image
            // resizeMode="contain"s
            source={ICONS.next_rig}
            style={{
              height: normalize(50),
              width: normalize(150),
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
