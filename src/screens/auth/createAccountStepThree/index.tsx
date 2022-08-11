import React, { FC, useState } from 'react';
import { Screen, SvgIcon } from '@components';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { appLogo, stepThreeBg } from '@assets/images';
import styles from './styles';
import { SizedBox } from '@components/sized-box';
import { Steps } from '@components';
import { Button } from '@components/buttons';
import useSelector from '@hooks/useSelector';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { AuthActionTypes } from '@redux/actionTypes';

export const CreateAccountThree: FC<NativeStackScreenProps<any>> = ({
  navigation,
}) => {
  const { signupData } = useSelector<any>(d => d.auth);
  const dispatch = useThunkDispatch();
  const data = [
    {
      tittle: 'Very Light',
      discription: 'Little to no exercise',
      img: 'VeryLight',
      off: 'VeryLightOff',
      value: 'veryLight',
    },
    {
      tittle: 'Light',
      discription:
        '1-2 hours per week, comfortable, easy breathing, low muscle load, light sweating      ',
      img: 'Light',
      off: 'LightOff',
      value: 'light',
    },
    {
      tittle: 'Moderate',
      discription:
        '3-4 hours per week, Light muscular fatigue, easy breathing, moderate sweating      ',
      img: 'Modrate',
      off: 'ModrateOff',
      value: 'moderate',
    },
    {
      tittle: 'Hard',
      discription: '4-5 hours per week, Muscular fatigue and heavy breathing ',
      img: 'Hard',
      off: 'HardOff',
      value: 'hard',
    },
    {
      tittle: 'Very Hard',
      discription:
        '6+ hours per week, Very exhausting for breathing and muscles      ',
      img: 'VeryHard',
      off: 'VeryHardOff',
      value: 'veryHard',
    },
  ];
  const [select, setSelect] = useState(null);
  const [exerciseLevel, setExerciseLevel] = useState('');

  return (
    <Screen>
      <Image source={stepThreeBg} style={styles.wrapper} />
      <View style={styles.container}>
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
          <Text style={styles.subText}>Step 3 of 5</Text>
          <SizedBox height={12} />
          <Steps count={3} />
          <SizedBox height={30} />
        </View>

        <Text style={styles.birthText}>
          What is your exercise activity level?
        </Text>
        <SizedBox height={24} />
        {data.map((item, index: any) => {
          return (
            <TouchableOpacity
              key={JSON.stringify(index)}
              style={[
                styles.genderBox,
                index === select && styles.altGenderBox,
              ]}
              disabled={index === select}
              onPress={() => {
                setExerciseLevel(item?.value);
                setSelect(index);
              }}>
              <View style={styles.inView}>
                <SvgIcon
                  name={index === select ? item?.img : item?.off}
                  size={39}
                  onPress={() => {}}
                />
              </View>
              <View style={styles.subView}>
                <Text
                  style={index === select ? styles.altSubText : styles.subText}>
                  {item?.tittle}
                </Text>
                <Text style={index === select ? styles.altText : styles.text}>
                  {item?.discription}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}

        <View style={styles.btnContainer}>
          <Button
            containerStyle={styles.button}
            title={'Next'}
            disabled={exerciseLevel === ''}
            onPress={() => {
              dispatch({
                type: AuthActionTypes.SET_SIGNUP_DATA,
                payload: {
                  ...signupData,
                  data: {
                    ...signupData.data,
                    exerciseLevel,
                  },
                },
              });
              navigation.navigate('CreateAccountFour');
            }}
          />
        </View>
      </View>
    </Screen>
  );
};
