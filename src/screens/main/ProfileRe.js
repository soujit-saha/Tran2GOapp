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
import {Dropdown} from 'react-native-element-dropdown';
// import {CheckBox} from '@rneui/themed';
// import {Icon} from 'react-native-vector-icons/Icon';

const ProfileRe = props => {
  const [value, setValue] = useState('');

  const [isFocus, setIsFocus] = useState(false);
  const [select, setSelect] = useState([]);

  const [data, setData] = useState([
    {label: 'Male', value: 'one'},
    {label: 'Female', value: 'two'},
    {label: 'Other', value: 'three'},
  ]);

  const renderLabel = label => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: '#92929D'}]}>
          {label}
        </Text>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.neutral_4}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      <Image
        source={IMAGES.Grtop}
        style={{
          height: normalize(90),
          width: normalize(325),
          resizeMode: 'contain',
          position: 'absolute',
          marginTop: normalize(26),
          zIndex: 1,
          // bottom: Dimensions.get('screen').height / 1.63,
          // elevation: 8,
        }}
      />

      <View style={{height: Dimensions.get('screen').height / 6.4}}></View>

      <ScrollView
        style={{
          // flex: 2.5,
          height:
            Dimensions.get('screen').height -
            Dimensions.get('screen').height / 5.9,
          backgroundColor: COLORS.white,
          bottom: 0,
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
              fontFamily: FONTS.Robot_600,
              fontSize: normalize(22),
              color: COLORS.black,
              lineHeight: normalize(22),
            }}>
            Your new profile
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <View style={styles.container1}>
            <TextInput
              value={value}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Email*"
              showIcon={false}
              // placeholder="Placeholder"
              placeholderTextColor="gray"
              onChangeText={text => {
                setValue(text);
              }}
            />
          </View>
          <View style={styles.container1}>
            <TextInput
              value={value}
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
                setValue(text);
              }}
            />
          </View>
        </View>
        <View
          style={{
            borderColor: '#D3D3E2',
            borderWidth: 1,
            margin: 20,
            // borderRadius: 15,
          }}>
          <View style={styles.container}>
            {renderLabel('Gender*')}
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: '#ffffff'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              //   search
              maxHeight={300}
              labelField="label"
              valueField="selet"
              placeholder={!isFocus ? 'Gender' : ''}
              //   searchPlaceholder="Search..."
              value={select}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setSelect(item.select);
                setIsFocus(false);
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={{
            backgroundColor: '#0B7960',
            borderRadius: 15,
            marginHorizontal: normalize(30),
            marginTop: normalize(180),
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
            Next
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileRe;

const styles = StyleSheet.create({
  container1: {
    padding: 2,
    // marginHorizontal: 10,
    width: '50%',
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

  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 30,
    borderColor: '#ffffff',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
