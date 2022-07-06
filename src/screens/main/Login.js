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
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES, COLORS, ICONS, FONTS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import {TextInput} from 'react-native-element-textinput';
// import {CheckBox} from '@rneui/themed';
// import {Icon} from 'react-native-vector-icons/Icon';

const Login = props => {
  const [email, onChangeEmail] = useState('');

  const [password, onChangePassword] = useState('');

  // const submit = () => {
  //   if (email === 'soujit' && password === 'saha') {
  //     props.navigation.navigate('Register');
  //   } else {
  //     ToastAndroid.show('Email & Password is not correct');
  //   }
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.neutral_4}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      <Image
        source={IMAGES.Topcar}
        style={{
          height: normalize(255),
          width: normalize(315),
          resizeMode: 'contain',
          position: 'absolute',
          marginTop: normalize(-21),
          zIndex: 1,
          // bottom: Dimensions.get('screen').height / 1.645,
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
          borderTopLeftRadius: normalize(15),
          borderTopRightRadius: normalize(15),
        }}>
        <View
          style={{
            marginTop: normalize(20),
            width: '100%',
            height: normalize(30),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: normalize(19),
              color: COLORS.black,
            }}>
            Login to your account
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginHorizontal: normalize(90),
            marginVertical: normalize(1),
          }}>
          <TouchableOpacity>
            <Image
              source={IMAGES.fb}
              style={{width: normalize(28), height: normalize(28)}}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={IMAGES.google}
              style={{width: normalize(28), height: normalize(28)}}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={IMAGES.apple}
              style={{width: normalize(28), height: normalize(28)}}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: FONTS.Robot_400,
              fontSize: 14,
              color: COLORS.neutral_4,
            }}>
            or use your email account
          </Text>
        </View>

        <View style={{marginTop: normalize(25)}}>
          <View style={styles.container}>
            <TextInput
              value={email}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Email"
              showIcon={false}
              // placeholder="Placeholder"
              placeholderTextColor="gray"
              onChangeText={text => {
                onChangeEmail(text);
              }}
            />
          </View>
          <View style={styles.container}>
            <TextInput
              value={password}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Password"
              // placeholder="Placeholder"
              placeholderTextColor="gray"
              secureTextEntry
              onChangeText={text => {
                onChangePassword(text);
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical: normalize(3),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
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
              Remember me?
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ForgotPs')}>
            <Text
              style={{
                fontFamily: FONTS.Robot_400,
                fontSize: 14,
                color: '#ED1C24',
              }}>
              Forgotten your password?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Register')}
          style={{
            backgroundColor: '#0B7960',
            borderRadius: 15,
            marginHorizontal: normalize(30),
            marginTop: normalize(100),
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
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: normalize(60),
            marginVertical: normalize(15),
          }}>
          <Text
            style={{
              fontFamily: FONTS.Robot_400,
              fontSize: 14,
              color: '#92929D',
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Register')}>
            <Text
              style={{
                fontFamily: FONTS.Robot_700,
                fontSize: 14,
                color: '#ED1C24',
                marginHorizontal: normalize(4),
              }}>
              Register here
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
