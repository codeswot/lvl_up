import React, { FC, useState } from 'react';
import { InputBox, Screen, SvgIcon, UnitPreference } from '@components';
import { View, Image, Text, TouchableOpacity, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { appLogo, registerBg } from '@assets/images';
import styles from './styles';
import { SizedBox } from '@components/sized-box';
import { Steps } from '@components';
import { DropDowns } from '@components/dropdowns';
// import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Button } from '@components/buttons';
import { UNIT_PREFERENCE } from '@helpers/consts';
import useSelector from '@hooks/useSelector';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { AuthActionTypes } from '@redux/actionTypes';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';

export const RegistrationForm: FC<NativeStackScreenProps<any>> = ({
  navigation,
}) => {
  const dispatch = useThunkDispatch();
  const { unitPreference, signupData } = useSelector<any>(d => d.auth);
  const [items, setItems] = useState([
    { label: '1 ft', value: 1 },
    { label: '2 ft', value: 2 },
    { label: '3 ft', value: 3 },
    { label: '4 ft', value: 4 },
    { label: '5 ft', value: 5 },
    { label: '6 ft', value: 6 },
    { label: '7 ft', value: 7 },
    { label: '8 ft', value: 8 },
  ]);
  const [inchItems, setinchItems] = useState([
    { label: '0 inch', value: 0 },
    { label: '1 inch', value: 1 },
    { label: '2 inch', value: 2 },
    { label: '3 inch', value: 3 },
    { label: '4 inch', value: 4 },
    { label: '5 inch', value: 5 },
    { label: '6 inch', value: 6 },
    { label: '7 inch', value: 7 },
    { label: '8 inch', value: 8 },
    { label: '9 inch', value: 9 },
    { label: '10 inch', value: 10 },
    { label: '11 inch', value: 11 },
  ]);
  const [dob, setDob] = useState('');
  const [height, setHeight] = useState('2.54');
  const [value, setValue] = useState(0);
  const [inchValue, setInchValue] = useState(0);
  const [date, setDate] = useState(new Date(2008, 11, 31, 0, 0, 0));
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState<'male' | 'female' | ''>('male');

  const heightCalculation = (val = null) => {
    if (unitPreference === UNIT_PREFERENCE.METRIC) {
      // @ts-ignore
      let inches = val / 2.54;
      let feet = Math.floor(inches / 12).toFixed(0);
      // @ts-ignore
      let inch = (inches - 12 * feet).toFixed(0);
      setValue(Number(feet));
      setInchValue(Number(inch));
      return;
    }
    let totalInches = value * 30.48 + inchValue * 2.54;
    setHeight(totalInches.toFixed(2) + '');
  };

  const onSubmit = () => {
    let newData = {
      ...signupData,
      data: {
        ...signupData.data,
        birthdate: dob || new Date(2008, 11, 31, 0, 0, 0).toISOString(),
        sex: gender,
        height: Number(height),
        unitPreference,
      },
    };
    dispatch({ type: AuthActionTypes.SET_SIGNUP_DATA, payload: newData });
    navigation.navigate('CreateAccountTwo');

  };
  

  return (
    <Screen style={styles.scroll}>
      <Image source={registerBg} style={styles.wrapper} />
      <KeyboardAwareScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text onPress={()=>{
            navigation.goBack();
          }}>Back</Text>
          
          <Image source={appLogo} style={styles.logo} />
          <View style={styles.mainView}>
            <Text style={styles.Welcome}>Tell us about yourself</Text>
            <SizedBox height={9} />
            <Text style={styles.pSignin}>
              This info helps us to estimate your caloric needs
            </Text>
            <SizedBox height={24} />
          </View>
          <View style={styles.stepContainer}>
            <Text style={styles.subText}>Step 1 of 5</Text>
            <SizedBox height={12} />
            <Steps count={1} />
            <SizedBox height={9} />
          </View>
          <View style={styles.dateOver}>
            <Text style={styles.birthText}>Birthday</Text>
            <SizedBox height={12} />
            <TouchableOpacity
              style={styles.dateBox}
              onPress={() => {
                setOpen(true);
              }}>
              <Text style={styles.subText}>
                {moment(date).format('MMM DD YYYY')}
              </Text>
              <SvgIcon name="calender" size={25} />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={open}
              mode="date"
              onConfirm={dateVal => {
                setOpen(false);
                setDate(dateVal);
                setDob(dateVal.toISOString());
              }}
              onCancel={() => {
                setOpen(false);
              }}
              maximumDate={new Date(2008, 11, 31, 0, 0, 0)}
              isDarkModeEnabled={true}
              // pickerStyleIOS={{ backgroundColor: palette.black, color: 'red' }}
            />

            <SizedBox height={24} />
            <Text style={styles.subText}>
              Please select which sex we should use to calculate your calorie
              needs:
            </Text>
            <SizedBox height={24} />
            <View style={styles.genderBoxContainer}>
              <TouchableOpacity
                style={[
                  styles.genderBox,
                  gender === 'male' && styles.altGenderBox,
                ]}
                onPress={() => {
                  setGender('male');
                }}>
                <SvgIcon
                  name={gender === 'male' ? 'male' : 'male-off'}
                  size={29}
                />
                <Text
                  style={
                    gender === 'male' ? styles.altSubText : styles.subText
                  }>
                  Male
                </Text>
              </TouchableOpacity>
              <SizedBox width={20} />
              <TouchableOpacity
                style={[
                  styles.genderBox,
                  gender === 'female' && styles.altGenderBox,
                ]}
                onPress={() => {
                  setGender('female');
                }}>
                <SvgIcon
                  name={gender === 'female' ? 'female' : 'female-off'}
                  size={29}
                />
                <Text
                  style={
                    gender === 'female' ? styles.altSubText : styles.subText
                  }>
                  Female
                </Text>
              </TouchableOpacity>
            </View>
            <SizedBox height={12} />
            <Text style={styles.birthText}>Height</Text>
            <SizedBox height={12} />
            <UnitPreference />
            <SizedBox height={24} />
            {unitPreference === UNIT_PREFERENCE.US_STANDARD ? (
              <View style={styles.subHeightContainer}>
                <View style={styles.dropContainer}>
                  <DropDowns
                    listMode={Platform.OS === 'ios' ? 'SCROLLVIEW' : 'MODAL'}
                    value={value}
                    setValue={setValue}
                    placeholder="1 ft"
                    items={items}
                    setItems={setItems}
                    styles={styles.dropDown}
                    onChangeValue={heightCalculation}
                  />
                </View>
                <SizedBox width={18} />
                <View style={styles.dropContainer}>
                  <DropDowns
                    listMode={Platform.OS === 'ios' ? 'SCROLLVIEW' : 'MODAL'}
                    value={inchValue}
                    setValue={setInchValue}
                    placeholder="1 inch"
                    items={inchItems}
                    setItems={setinchItems}
                    styles={styles.dropDown}
                    onChangeValue={heightCalculation}
                  />
                </View>
              </View>
            ) : (
              <InputBox
                value={height}
                maxLength={6}
                keyboardType="phone-pad"
                onChangeText={(val: any) => {
                  setHeight(val);
                  heightCalculation(val);
                }}
                rightComponent={<Text style={styles.subText}>cm</Text>}
              />
            )}
            <SizedBox height={24} />
            <View style={styles.btnContainer}>
              <Button
                containerStyle={styles.button}
                title={'Next'}
                onPress={onSubmit}
              />
            </View>
            <SizedBox height={24} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
};
