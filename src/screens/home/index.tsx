import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenWrapper, SizedBox, AnimatedView, SvgIcon } from '@components';
import { resultMale, resultFemale, appLogo } from '@images';
import useSelector from '@hooks/useSelector';
import { INITIAL_STATE_TYPE } from '@redux/reducers/AuthReducer';
import { Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { AuthActionTypes } from '@redux/actionTypes';

export const Home: FC<NativeStackScreenProps<any>> = ({ navigation }) => {
  const { signupData } = useSelector<INITIAL_STATE_TYPE>((d: any) => d.auth);
  const dispatch = useThunkDispatch();

  const menu = [
    {
      label: 'Create Recipe',
      icon: 'doc',
      action: () => navigation.navigate('CreateRecipe'),
    },
    {
      label: 'Meal Plan',
      icon: 'rest',
      action: () => navigation.navigate('MealPlan'),
    },
    { label: 'Food Search', icon: 'food-search' },
    { label: 'My Meals', icon: 'meal' },
    { label: 'Profile', icon: 'profile-icon' },
    {
      label: 'TEMP LOGOUT',
      icon: 'profile-icon',
      action: () => {
        console.log('here');

        dispatch({ type: AuthActionTypes.USER_LOGGED_OUT, payload: false });
      },
    },
  ];

  return (
    <ScreenWrapper
      img={signupData?.data?.sex === 'male' ? resultMale : resultFemale}>
      <AnimatedView animation={'bounceIn'} duration={1000} easing="ease-in">
        <Image source={appLogo} style={styles.logo} />
      </AnimatedView>

      <SizedBox height={70} />
      {menu.map((el: any, i: number) => {
        return (
          <TouchableOpacity key={i} style={styles.button} onPress={el?.action}>
            <SvgIcon name={el.icon} size={30} />
            <SizedBox width={30} />
            <Text style={styles.buttonText}>{el.label}</Text>
          </TouchableOpacity>
        );
      })}

      <SizedBox height={50} />
      <SizedBox height={30} />
    </ScreenWrapper>
  );
};
