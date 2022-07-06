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

const ChangePs = props => {
  const [value, setValue] = useState('');
  const [valuep, setValuep] = useState('');
  const [valuec, setValuec] = useState('');

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
            Change Password
          </Text>
        </View>

        <View style={{marginTop: normalize(40)}}>
          <View style={styles.container}>
            <TextInput
              value={value}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Verifying code"
              // placeholder="Placeholder"
              placeholderTextColor="gray"
              onChangeText={text => {
                setValue(text);
              }}
            />
          </View>
          <View style={styles.container}>
            <TextInput
              value={valuep}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="New password"
              // placeholder="Placeholder"
              placeholderTextColor="gray"
              secureTextEntry
              onChangeText={text => {
                setValuep(text);
              }}
            />
          </View>
          <View style={styles.container}>
            <TextInput
              value={valuec}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Confirm new password"
              // placeholder="Placeholder"
              placeholderTextColor="gray"
              secureTextEntry
              onChangeText={text => {
                setValuec(text);
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Select')}
          style={{
            backgroundColor: '#0B7960',
            borderRadius: 15,
            marginHorizontal: normalize(30),
            marginTop: normalize(70),
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
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePs;

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
