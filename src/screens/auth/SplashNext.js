import React, {useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  Text,
} from 'react-native';
import {IMAGES, COLORS, ICONS, FONTS} from '../../themes/Themes';
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

        <View style={{alignItems: 'center', marginTop: normalize(10)}}>
          <Text
            style={{
              fontFamily: FONTS.Mina_bold,
              fontSize: 24,
              color: COLORS.black,
            }}>
            A ride like no other
          </Text>
        </View>

        <Text
          style={{
            fontFamily: FONTS.RobotoCondensed_bold,
            fontSize: 16,
            textAlign: 'center',
            marginTop: normalize(110),
          }}>
          POWERED BY
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: normalize(20),
            width: '90%',
            marginHorizontal: normalize(15),
          }}>
          <Image
            resizeMode="contain"
            source={ICONS.next_lef}
            style={{
              height: normalize(50),
              width: normalize(150),
            }}
          />
          <Image
            resizeMode="cover"
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
