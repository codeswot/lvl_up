/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { appLogo, stepFiveBg } from '@assets/images';
import { ScreenWrapper, SizedBox, Steps, Button } from '@components';
import styles from './styles';
import { DropDowns } from '@components/dropdowns';
import useSelector from '@hooks/useSelector';
import { INITIAL_STATE_TYPE } from '@redux/reducers/AuthReducer';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { AuthActionTypes } from '@redux/actionTypes';
import { AuthActions } from '@redux/actions';
import { UNIT_PREFERENCE } from '@helpers/consts';

const GOAL_VALUES = {
  'lose body fat': 'loseFat',
  maintain: 'maintain',
  'muscle gain': 'gainMuscle',
};
export const CreateAccountFive: FC<NativeStackScreenProps<any>> = ({
  navigation,
}) => {
  const { signupData, isLoading, unitPreference } =
    useSelector<INITIAL_STATE_TYPE>((d: any) => d.auth);
  const isMetric = unitPreference === UNIT_PREFERENCE.METRIC;

  const dispatch = useThunkDispatch();
  const fitnessPurpose = [
    {
      category: 'Lose Body Fat',
      items: [
        {
          label: !isMetric
            ? 'Lose 0.5 pounds per week'
            : 'Lose 0.25 kilograms per week',
          value: !isMetric
            ? 'Lose 0.5 pounds per week'
            : 'Lose 0.25 kilograms per week',
        },
        {
          label: !isMetric
            ? 'Lose 1 pounds per week'
            : 'Lose 0.5 kilograms per week',
          value: !isMetric
            ? 'Lose 1 pounds per week'
            : 'Lose 0.5 kilograms per week',
        },
        {
          label: !isMetric
            ? 'Lose 1.5 pounds per week'
            : 'Lose 0.75 kilograms per week',
          value: !isMetric
            ? 'Lose 1.5 pounds per week'
            : 'Lose 0.75 kilograms per week',
        },
        {
          label: !isMetric
            ? 'Lose 2 pounds per week'
            : 'Lose 1 kilograms per week',
          value: !isMetric
            ? 'Lose 2 pounds per week'
            : 'Lose 1 kilograms per week',
        },
        {
          label: !isMetric
            ? 'Lose 2.5 pounds per week'
            : 'Lose 1.25 kilograms per week',
          value: !isMetric
            ? 'Lose 2.5 pounds per week'
            : 'Lose 1.25 kilograms per week',
        },
        {
          label: !isMetric
            ? 'Lose 3 pounds per week'
            : 'Lose 1.5 kilograms per week',
          value: !isMetric
            ? 'Lose 3 pounds per week'
            : 'Lose 1.5 kilograms per week',
        },
        {
          label: !isMetric
            ? 'Lose 3.5 pounds per week'
            : 'Lose 1.75 kilograms per week',
          value: !isMetric
            ? 'Lose 3.5 pounds per week'
            : 'Lose 1.75 kilograms per week',
        },
        {
          label: !isMetric
            ? 'Lose 4 pounds per week'
            : 'Lose 2 kilograms per week',
          value: !isMetric
            ? 'Lose 4 pounds per week'
            : 'Lose 2 kilograms per week',
        },
      ],
    },
    {
      category: 'Maintain',
      items: [],
    },
    {
      category: 'Muscle Gain',
      items: [
        {
          label: !isMetric
            ? 'Gain 0.5 lbs per week'
            : 'Gain 0.25 kilograms per week',
          value: !isMetric
            ? 'Gain 0.5 lbs per week'
            : 'Gain 0.25 kilograms per week',
        },
        {
          label: !isMetric
            ? 'Gain 1 lbs per week'
            : 'Gain 0.5 kilograms per week',
          value: !isMetric
            ? 'Gain 1 lbs per week'
            : 'Gain 0.5 kilograms per week',
        },
      ],
    },
  ];
  const [catItems, setCatItems] = useState<any>([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedCat, setSelectedCat] = useState('');

  return (
    <ScreenWrapper img={stepFiveBg}>
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
        <Text style={styles.subText}>Step 5 of 5</Text>
        <SizedBox height={12} />
        <Steps count={5} />
        <SizedBox height={30} />
      </View>

      <SizedBox height={15} />
      <Text style={styles.purposeText}>I want to</Text>
      <SizedBox height={15} />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}>
        {fitnessPurpose.map((el: any, i) => (
          <TouchableOpacity
            onPress={() => {
              dispatch({
                type: AuthActionTypes.SET_SIGNUP_DATA,
                payload: {
                  ...signupData,
                  data: {
                    ...signupData?.data,
                    //   @ts-ignore
                    dietGoal: GOAL_VALUES[el.category.toLocaleLowerCase()],
                  },
                },
              });
              setSelectedCat(el.category.toLocaleLowerCase());
              setCatItems(el.items);
            }}
            key={i}
            style={[
              styles.button,
              selectedCat === el.category.toLocaleLowerCase() &&
                styles.buttonActive,
            ]}>
            <Text
              style={[
                styles.buttonText,
                selectedCat === el.category.toLocaleLowerCase() &&
                  styles.buttonTextActive,
              ]}>
              {el.category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <SizedBox height={25} />
      {selectedCat !== '' && selectedCat !== 'maintain' && (
        <DropDowns
          value={selectedItem}
          setValue={setSelectedItem}
          placeholder={catItems[0].label}
          items={catItems}
          setItems={setCatItems}
          styles={styles.dropDown}
          textStyle={styles.buttonText}
          parentLabelStyles={styles.parentLabel}
          // onChangeValue={() => {}}
        />
      )}
      <SizedBox height={25} />
      {selectedCat !== '' && (
        <Button
          containerStyle={styles.finishButton}
          title={'Finish'}
          loading={isLoading}
          onPress={() => {
            dispatch(
              AuthActions.signUpUser(signupData, () => {
                navigation.navigate('FinalStep');
              }),
            );
          }}
        />
      )}
    </ScreenWrapper>
  );
};
