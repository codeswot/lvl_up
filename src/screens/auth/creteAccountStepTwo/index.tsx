import React, { FC, useState } from 'react';
import { Screen, SvgIcon } from '@components';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { appLogo, stepTwoBg } from '@assets/images';
import styles from './styles';
import { SizedBox } from '@components/sized-box';
import { Steps } from '@components';
import { Button } from '@components/buttons';
import useSelector from '@hooks/useSelector';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { AuthActionTypes } from '@redux/actionTypes';

export const CreateAccountTwo: FC<NativeStackScreenProps<any>> = ({
  navigation,
}) => {
  const { signupData } = useSelector<any>(d => d.auth);
  const dispatch = useThunkDispatch();
  const data = [
    {
      tittle: 'Not Very Active',
      discription: 'Spend most of the day sitting (E.g. Desk job)',
      img: 'SitingTable',
      off: 'SitingTableOff',
      value: 'notActive',
    },
    {
      tittle: 'Lightly Active',
      discription:
        'Spend a good part of the day on your feet (E.g. Real estate agent, hair stylist) ',
      img: 'LightActive',
      off: 'LightActiveOff',
      value: 'lightlyActive',
    },
    {
      tittle: 'Active',
      discription:
        'Spend a good part of the day doing some physical activity (E.g. Food server, Teacher)',
      img: 'Active',
      off: 'ActiveOff',
      value: 'active',
    },
    {
      tittle: 'Very Active',
      discription:
        'Spend a good part of the day doing heavy physical activity (E.g. Construction worker, postal worker)',
      img: 'VeryActive',
      off: 'VeryActiveOff',
      value: 'veryActive',
    },
  ];
  const [select, setSelect] = useState(null);
  const [baselineActivityLevel, setBaselineActivityLevel] = useState('');

  return (
    <Screen>
      <Image source={stepTwoBg} style={styles.wrapper} />
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
          <Text style={styles.subText}>Step 2 of 5</Text>
          <SizedBox height={12} />
          <Steps count={2} />
          <SizedBox height={30} />
        </View>

        <Text style={styles.birthText}>
          What is your baseline activity level?
        </Text>
        <SizedBox height={24} />
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={JSON.stringify(index)}
              style={[
                styles.genderBox,
                index === select && styles.altGenderBox,
              ]}
              disabled={index === select}
              onPress={() => {
                setBaselineActivityLevel(item?.value);
                // @ts-ignore
                setSelect(index);
              }}>
              <View style={styles.inView}>
                <SvgIcon
                  name={index === select ? item?.img : item?.off}
                  size={39}
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
            disabled={baselineActivityLevel === ''}
            onPress={() => {
              dispatch({
                type: AuthActionTypes.SET_SIGNUP_DATA,
                payload: {
                  ...signupData,
                  data: {
                    ...signupData.data,
                    baselineActivityLevel,
                  },
                },
              });
              navigation.navigate('CreateAccountThree');
            }}
          />
        </View>
      </View>
    </Screen>
  );
};
