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
import {TextInput} from 'react-native-element-textinput';
// import {CheckBox} from '@rneui/themed';
// import {Icon} from 'react-native-vector-icons/Icon';

const VerifyEmail = props => {
  const [valuep, setValuep] = useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.neutral_4}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      <Image
        source={IMAGES.world}
        style={{
          height: normalize(200),
          width: normalize(325),
          resizeMode: 'contain',
          position: 'absolute',
          marginTop: normalize(30),
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
            marginTop: normalize(35),
            width: '100%',
            height: normalize(30),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: normalize(18),
              color: COLORS.black,
            }}>
            Verify email account
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: FONTS.Robot_400,
              fontSize: normalize(12),
              color: '#3B3D41',
            }}>
            Please enter the verification code that TRAN 2GO
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Robot_400,
              fontSize: normalize(12),
              color: '#3B3D41',
            }}>
            has sent to your email address.
          </Text>
        </View>

        <View style={{marginTop: normalize(8)}}>
          <View style={styles.container}>
            <TextInput
              value={valuep}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Verifying code"
              // placeholder="Placeholder"
              placeholderTextColor="gray"
              secureTextEntry
              onChangeText={text => {
                setValuep(text);
              }}
            />
          </View>
        </View>
        <View
          style={{
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical: normalize(3),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.Robot_700,
              fontSize: normalize(10.5),
              color: COLORS.black,
              marginHorizontal: normalize(3),
            }}>
            I acknowledge that I have read, and do hereby accept
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Robot_700,
              fontSize: normalize(10.5),
              color: COLORS.black,
              marginHorizontal: normalize(3),
            }}>
            the terms and conditions provided by TRAN 2GO.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            marginHorizontal: normalize(25),
            marginVertical: normalize(20),
          }}>
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#D3D3E2',
              borderRadius: 4,
            }}></TouchableOpacity>
          <Text
            style={{
              fontFamily: FONTS.Robot_400,
              fontSize: normalize(11),
              color: COLORS.black,
              marginHorizontal: normalize(5),
            }}>
            Terms and conditions
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('ForgotPs')}
          style={{
            backgroundColor: '#0B7960',
            borderRadius: 15,
            marginHorizontal: normalize(30),
            marginTop: normalize(105),
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
            Done
          </Text>
        </TouchableOpacity>
        <View
          style={{
            // flexDirection: 'row',
            // marginHorizontal: normalize(60),
            marginVertical: normalize(5),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.Robot_400,
              fontSize: 14,
              color: '#ED1C24',
            }}>
            Didn't receive verification code?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: FONTS.Robot_700,
                fontSize: 14,
                color: '#172B85',
                marginHorizontal: normalize(4),
              }}>
              Resend new code
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 10,
  },
  input: {
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: 'white',
    borderColor: '#D3D3E2',
    borderWidth: 1,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
  },
  inputStyle: {fontSize: 14},
  labelStyle: {fontSize: 12, color: '#92929D'},
  placeholderStyle: {fontSize: 16},
  textErrorStyle: {fontSize: 16},
});
