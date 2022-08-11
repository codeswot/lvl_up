/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState, useRef, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { appLogo, stepFourBg } from '@assets/images';
import {
  Screen,
  SizedBox,
  Steps,
  Button,
  SvgIcon,
  UnitPreference,
  InputBox,
} from '@components';
import styles from './styles';
import {
  BODY_FAT_METHOD,
  POUNDS_TO_KG,
  UNIT_PREFERENCE,
} from '@helpers/consts';
import useSelector from '@hooks/useSelector';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { INITIAL_STATE_TYPE } from '@redux/reducers/AuthReducer';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { AuthActionTypes } from '@redux/actionTypes';
import { color } from '@theme';

export const CreateAccountFour: FC<NativeStackScreenProps<any>> = ({
  navigation,
}) => {
  const scrollViewRef = useRef();
  const { signupData, unitPreference } = useSelector<INITIAL_STATE_TYPE>(
    (d: any) => d.auth,
  );

  const dispatch = useThunkDispatch();
  const [weightLb, setWeightLb] = useState('');
  const [weightKg, setWeightKg] = useState('');

  const [selectedIndex, setSelectedIndex] = useState(0);

  const weights = [
    { type: 'weight-1' },
    { type: 'weight-4' },
    { type: 'weight-3' },
    { type: 'weight-2' },
    { type: 'weight' },
    { type: 'fat' },
    { type: 'fat-1' },
    { type: 'fat-2' },
    { type: 'fat-3' },
  ];

  const handleConversion = (val: any) => {
    if (unitPreference === UNIT_PREFERENCE.METRIC) {
      console.log('here');
      setWeightLb(Math.round(val / POUNDS_TO_KG) + '');
      return setWeightKg(val);
    }
    setWeightLb(val);
    setWeightKg(Math.round(val * POUNDS_TO_KG) + '');
  };

  useEffect(() => {
    // @ts-ignore
    scrollViewRef.current?.scrollTo({ x: 568, y: 0, animated: true });
  }, []);

  return (
    <Screen>
      <Image source={stepFourBg} style={styles.wrapper} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
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
            <Text style={styles.subText}>Step 4 of 5</Text>
            <SizedBox height={12} />
            <Steps count={4} />
            <SizedBox height={30} />
          </View>

          <Text style={styles.birthText}>
            Let's create your first weigh-in. First, enter your weight.
          </Text>
          <SizedBox height={15} />
          <Text style={styles.birthText}>Weight</Text>
          <SizedBox height={12} />
          <UnitPreference />
          <SizedBox height={24} />

          <InputBox
            keyboardType="phone-pad"
            maxLength={6}
            rightComponent={
              <Text style={styles.subText}>
                {' '}
                {unitPreference === UNIT_PREFERENCE.US_STANDARD ? 'lbs' : 'kg'}
              </Text>
            }
            value={
              unitPreference === UNIT_PREFERENCE.US_STANDARD
                ? weightLb
                : weightKg
            }
            onChangeText={handleConversion}
          />

          <SizedBox height={34} />
          <Text style={styles.birthText}>
            Now we need an estimate of your body fat percentage. Swipe through
            the pictures below to find the one that most closely matches your
            body type.
          </Text>
          <SizedBox height={24} />

          <ScrollView
            horizontal={true}
            style={{ flexGrow: 0 }}
            // @ts-ignore
            ref={scrollViewRef}
            showsHorizontalScrollIndicator={false}>
            {weights.map((el, i: number) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.weightBox,
                    selectedIndex === i + 1 && { borderColor: color.primary },
                  ]}
                  onPress={() => {
                    setSelectedIndex(i + 1);
                  }}>
                  <SvgIcon name={el.type} size={200} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <SizedBox height={40} />
          <Text style={styles.accountText}>Have a tape measurement?</Text>
          <SizedBox height={15} />
          <Button
            title="Get a more accurate estimate"
            onPress={() => {
              navigation.navigate('WeightIn', { weight: weightKg });
            }}
          />
          <SizedBox height={30} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <SizedBox
              height={2}
              backgroundColor="rgba(255, 255, 255, 0.25)"
              flex={1}
            />
            <SizedBox width={8} />
            <Text style={styles.accountText}>OR</Text>
            <SizedBox width={8} />
            <SizedBox
              height={2}
              backgroundColor="rgba(255, 255, 255, 0.25)"
              flex={1}
            />
          </View>

          <SizedBox height={30} />
          <Button title={`Enter your body fat percentage ${'\n'}manually`} />

          <SizedBox height={24} />
          <Button
            containerStyle={styles.button}
            disabled={weightKg === '' || !selectedIndex}
            title={'Next'}
            onPress={() => {
              dispatch({
                type: AuthActionTypes.SET_SIGNUP_DATA,
                payload: {
                  ...signupData,
                  data: {
                    ...signupData?.data,
                    initialWeighIn: {
                      ...signupData?.data?.initialWeighIn,
                      bodyFatMethod: BODY_FAT_METHOD.IMG_SELECTION,
                      imageSelectionMethod: 'slim',
                      weight: Number(weightKg),
                    },
                  },
                },
              });
              navigation.navigate('CreateAccountFive');
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
};
