/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, ImageWrapper, ScreenWrapper, SizedBox } from '@components';
import { resultMale, resultFemale, scale, scale2 } from '@images';
import { Header } from '@components/header';
import useSelector from '@hooks/useSelector';
import { INITIAL_STATE_TYPE } from '@redux/reducers/AuthReducer';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Popover, { PopoverPlacement } from 'react-native-popover-view';
import { family } from '@theme';
import { RF, RH } from '@helpers/responsive';
import { AuthActionTypes } from '@redux/actionTypes';
import useThunkDispatch from '@hooks/useThunkDispatch';
import {
  BODY_FAT_METHOD,
  POUNDS_TO_KG,
  UNIT_PREFERENCE,
} from '@helpers/consts';

interface Props {
  onPress?: () => void;
  title?: string;
  unit?: string;
}
export const ButtonContent: FC<Props> = ({ onPress, title, unit }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonContent}
      disabled={true}>
      <View style={styles.btnContent}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <SizedBox width={10} />
      <Text style={styles.unit}>{unit}</Text>
    </TouchableOpacity>
  );
};
export const Result: FC<NativeStackScreenProps<any>> = ({
  navigation,
  route: { params },
}) => {
  const dispatch = useThunkDispatch();
  const stats = params?.stats;
  const { signupData, unitPreference, weightInResults } =
    useSelector<INITIAL_STATE_TYPE>((d: any) => d.auth);
  const isMetric = unitPreference === UNIT_PREFERENCE.METRIC;

  const data = [
    { title: 'Body Fat Category', unit: weightInResults?.bodyFatCategory },
    {
      title: 'Body Fat Mass',
      unit: isMetric
        ? `${weightInResults?.bodyFatMass.toFixed(1)} kg`
        : // @ts-ignore
          `${(weightInResults?.bodyFatMass / POUNDS_TO_KG).toFixed(1)} lbs`,
    },
    {
      title: 'Lean Body Mass',
      unit: isMetric
        ? `${weightInResults?.leanBodyMass.toFixed(1)} kg`
        : // @ts-ignore
          `${(weightInResults?.leanBodyMass / POUNDS_TO_KG).toFixed(1)} lbs`,
    },
    {
      title: 'Ideal Body Fat for Given Age (Jackson & Pollard)',
      unit: `${weightInResults?.idealBodyFatPercent} %`,
    },
    {
      title: `Body Fat to ${
        Number(stats?.toLose) < 0 ? 'Gain' : 'Lose'
      } to Reach Ideal`,
      unit: isMetric
        ? `${(Number(Math.abs(stats?.toLose)) * POUNDS_TO_KG).toFixed(1)} kg`
        : `${Math.abs(stats?.toLose).toFixed(1)}lbs`,
    },
  ];

  const bodyFatCat = ['Essential', 'Athletes', 'Fitness', 'Average', 'Obese'];

  const [show, setShow] = useState('');

  useEffect(() => {
    setShow(stats.category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScreenWrapper
      img={signupData?.data?.sex === 'male' ? resultMale : resultFemale}>
      <Header title="Results" navigation={navigation} />

      <SizedBox height={60} />
      <View>
        <View style={styles.row}>
          {bodyFatCat.map((el: any, i: number) => {
            return (
              <Popover
                key={i}
                // mode={PopoverMode.JS_MODAL}
                onRequestClose={() => {
                  setShow('');
                }}
                placement={PopoverPlacement.TOP}
                isVisible={el.toLowerCase() === show.toLowerCase()}
                from={
                  <TouchableOpacity
                    // onPress={() => setShow(true)}
                    style={{ marginBottom: 4, marginRight: 12 }}>
                    <Text style={styles.rowItem}>{el}</Text>
                  </TouchableOpacity>
                }>
                <View style={{ padding: 10 }}>
                  <Text style={[styles.rowItem, { color: '#260940' }]}>
                    Body Fat
                  </Text>
                  <Text
                    style={[
                      styles.rowItem,
                      {
                        color: '#260940',
                        fontSize: RF(14),
                        textAlign: 'center',
                        fontFamily: family.MulishExtraBold,
                      },
                    ]}>
                    {(Number(stats?.fat) / 100).toFixed(1)}%
                  </Text>
                </View>
              </Popover>
            );
          })}
        </View>
        <View>
          <ImageWrapper
            resizeMode="cover"
            source={scale}
            imageStyles={{
              width: '100%',
              height: RH(15),
            }}
          />
          <SizedBox height={5} />
          <ImageWrapper
            resizeMode="contain"
            source={scale2}
            imageStyles={{
              width: '100%',
              height: RH(45),
            }}
          />
        </View>
      </View>

      <SizedBox height={50} />
      {data.map((el, i) => (
        <ButtonContent key={i} title={el?.title} unit={el?.unit} />
      ))}

      <SizedBox height={30} />
      <Button
        title="Add Weigh In"
        containerStyle={styles.button}
        onPress={() => {
          dispatch({
            type: AuthActionTypes.SET_SIGNUP_DATA,
            payload: {
              ...signupData,
              data: {
                ...signupData?.data,
                initialWeighIn: {
                  ...signupData?.data?.initialWeighIn,
                  bodyFatMethod: BODY_FAT_METHOD.NAVY,
                },
              },
            },
          });
          navigation.navigate('CreateAccountFive');
        }}
      />
    </ScreenWrapper>
  );
};
