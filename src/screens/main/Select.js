import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES, COLORS, ICONS, FONTS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';

import SwitchSelector from 'react-native-switch-selector';
// import {CheckBox} from '@rneui/themed';
// import {Icon} from 'react-native-vector-icons/Icon';

const Select = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.neutral_4}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      <Image
        source={IMAGES.Cartop}
        style={{
          height: normalize(180),
          width: normalize(310),
          resizeMode: 'contain',
          position: 'absolute',
          marginTop: normalize(23),
          zIndex: 1,
          // bottom: Dimensions.get('screen').height / 1.63,
          // elevation: 8,
        }}
      />

      <View style={{height: Dimensions.get('screen').height / 3.9}}></View>

      <ScrollView
        style={{
          // flex: 2.5,
          height:
            Dimensions.get('screen').height -
            Dimensions.get('screen').height / 3.9,
          backgroundColor: COLORS.white,
          bottom: 0,
          borderTopLeftRadius: normalize(15),
          borderTopRightRadius: normalize(15),
        }}>
        <View
          style={{
            alignItems: 'center',
            marginTop: normalize(35),
            width: '100%',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Black',
              fontSize: normalize(18),
              color: 'rgba(0,0,0,0.5)',
            }}>
            TRAN 2GO provides a
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto-Black',
              fontSize: normalize(18),
              color: 'rgba(0,0,0,0.5)',
            }}>
            decentralised app for a
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto-Black',
              fontSize: normalize(18),
              color: 'rgba(0,0,0,0.5)',
            }}>
            driver to provide a service
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto-Black',
              fontSize: normalize(18),
              color: 'rgba(0,0,0,0.5)',
            }}>
            and a passenger to pay a fee
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto-Black',
              fontSize: normalize(18),
              color: 'rgba(0,0,0,0.5)',
            }}>
            for the service provided by
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto-Black',
              fontSize: normalize(18),
              color: 'rgba(0,0,0,0.5)',
            }}>
            the driver.
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            width: '100%',
            marginVertical: normalize(40),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: FONTS.Robot_700,
                fontSize: normalize(16),
                color: COLORS.black,
              }}>
              Are you the
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ProfileRe')}>
              <Text
                style={{
                  fontFamily: FONTS.Robot_700,
                  fontSize: normalize(16),
                  color: '#ED1C24',
                  marginHorizontal: normalize(5),
                }}>
                DRIVER
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontFamily: FONTS.Robot_700,
                fontSize: normalize(18),
                color: COLORS.black,
              }}>
              or the
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ProfileRe')}>
              <Text
                style={{
                  fontFamily: FONTS.Robot_700,
                  fontSize: normalize(18),
                  color: '#ED1C24',
                }}>
                passenger
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontFamily: FONTS.Robot_700,
                fontSize: normalize(18),
                color: COLORS.black,
              }}>
              ?
            </Text>
          </View>
        </View>
        <View
          style={{marginHorizontal: normalize(30), marginTop: normalize(50)}}>
          <SwitchSelector
            initial={0}
            textColor="#ffffff"
            // onPress={() => props.navigation.navigate('ProfileRe')}
            // selectedColor="#ffffff"
            backgroundColor="rgba(11, 121, 96, 0.5)"
            buttonColor="#AD1F1D"
            borderColor="#ffffff"
            height={normalize(40)}
            fontSize={normalize(17)}
            fontFamily={FONTS.Robot_700}
            borderRadius={15}
            hasPadding
            options={[
              {label: 'Driver', value: 'f'}, //images.feminino = require('./path_to/assets/img/feminino.png')
              {label: 'Passenger', value: 'm'}, //images.masculino = require('./path_to/assets/img/masculino.png')
            ]}
          />
        </View>

        {/* <TouchableOpacity
          onPress={() => props.navigation.navigate('ProfileRe')}
          style={{
            backgroundColor: '#0B7960',
            borderRadius: 15,
            marginHorizontal: normalize(30),
            marginTop: normalize(50),
            height: normalize(40),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.Robot_700,
              color: COLORS.white,
              fontSize: normalize(18),
            }}>
            Get code
          </Text>
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Select;

const styles = StyleSheet.create({});
