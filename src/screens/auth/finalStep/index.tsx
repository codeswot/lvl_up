/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { appLogo, finalStep } from '@assets/images';
import { ScreenWrapper, SizedBox, Button, ImageWrapper } from '@components';
import styles from './styles';
import { BREAKDOWN_THEME } from '@helpers/consts';
import { AuthActionTypes } from '@redux/actionTypes';
import useThunkDispatch from '@hooks/useThunkDispatch';

export const FinalStep: FC<NativeStackScreenProps<any>> = (
  {
    //   navigation,
  },
) => {
  const dispatch = useThunkDispatch();

  const breakdown = [
    { label: 'Protein', value: 33 },
    { label: 'Carbs', value: 33 },
    { label: 'Fat', value: 33 },
  ];

  return (
    <ScreenWrapper img={finalStep}>
      <Image source={appLogo} style={styles.logo} />
      <View style={styles.mainView}>
        <Text style={styles.Welcome}>
          Your daily calorie requirement is {'\n'} 1500 calories.
        </Text>
        <SizedBox height={50} />
        <Text style={styles.breakdown}>Your macro breakdown is</Text>
        <SizedBox height={24} />
      </View>

      {/* <SizedBox height={25} /> */}
      <View style={styles.breakdownContainer}>
        {breakdown.map((el: typeof breakdown[0], i: number) => {
          return (
            <View
              key={i}
              style={[
                styles.breakdownBox,
                {
                  borderColor:
                    //   @ts-ignore
                    BREAKDOWN_THEME.borderColor[el.label.toLowerCase()],
                },
              ]}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.val}>{el.value}%</Text>
                <Text style={styles.label}>{el.label}</Text>
              </View>

              <ImageWrapper
                resizeMode="contain"
                //   @ts-ignore
                source={BREAKDOWN_THEME.img[el.label.toLowerCase()]}
                imageStyles={styles.imgStyles}
              />
            </View>
          );
        })}
      </View>

      <SizedBox height={30} />
      <Text style={styles.text}>
        You can change these values at any time from your profile page in the
        main menu.
      </Text>
      <SizedBox height={30} />
      <Button
        containerStyle={styles.finishButton}
        title={'Get Started'}
        onPress={() => {
          dispatch({ type: AuthActionTypes.USER_LOGGED_IN, payload: {} });
        }}
      />
    </ScreenWrapper>
  );
};
