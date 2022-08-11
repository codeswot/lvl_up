import React, { FC, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  InputBox,
  ScreenWrapper,
  SizedBox,
  UnitPreference,
} from '@components';
import { stepFour2Bg } from '@images';
import { Header } from '@components/header';
import useSelector from '@hooks/useSelector';
import { CM_TO_INCH, UNIT_PREFERENCE } from '@helpers/consts';
import styles from './styles';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { INITIAL_STATE_TYPE } from '@redux/reducers/AuthReducer';
import { BODY_FAT, getAge } from '@utils/bmf';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { AuthActionTypes } from '@redux/actionTypes';
import { AuthActions } from '@redux/actions';

const INITIAL_STATS = {
  weight: '',
  neck: '',
  waist: '',
  weightP: '',
  neckFt: '',
  neckIn: '',
  waistFt: '',
  waistIn: '',
  hip: '',
  hipFt: '',
  hipIn: '',
};

export const WeightIn: FC<NativeStackScreenProps<any>> = ({
  navigation,
  route: { params },
}) => {
  const weight = params?.weight;
  const { unitPreference, signupData } = useSelector<INITIAL_STATE_TYPE>(
    (d: any) => d.auth,
  );
  const [stats, setStats] = useState(INITIAL_STATS);

  const dispatch = useThunkDispatch();

  useEffect(() => {
    console.log({ stats });
    handleChange('weight', weight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (
    key:
      | 'weight'
      | 'weightP'
      | 'neck'
      | 'waist'
      | 'neckFt'
      | 'neckIn'
      | 'waistFt'
      | 'waistIn'
      | 'hip'
      | 'hipFt'
      | 'hipIn',
    val: string,
  ) => {
    setStats(d => ({ ...d, [key]: val }));
    console.log(key);

    switch (key) {
      case 'weightP':
        let kg = Number(val) * 0.45359237;
        console.log({ kg, val });
        // @ts-ignore
        setStats(d => ({ ...d, weight: Math.round(kg) + '' }));
        break;
      case 'weight':
        let p = Number(val) / 0.45359237;
        console.log({ p, val });
        // @ts-ignore
        setStats(d => ({ ...d, weightP: Math.round(p) + '' }));
        break;
      case 'neck':
        let inches = Number(val) / 2.54;
        let feet = Math.floor(inches / 12).toFixed(0);
        // @ts-ignore
        // let inch = (inches - 12 * feet).toFixed(0);
        let inInch = Number(val) * CM_TO_INCH.toFixed(2);
        setStats(d => ({ ...d, neckFt: feet + '', neckIn: inInch + '' }));
        break;
      case 'neckFt':
      case 'neckIn':
        let inCm = (Number(val) / CM_TO_INCH).toFixed(2);
        setStats(d => ({ ...d, neck: inCm + '' }));
        break;
      case 'waist':
        let waistInch = Number(val) / 2.54;
        let waistFeet = Math.floor(waistInch / 12).toFixed(0);
        // @ts-ignore
        let totalInch = Number(val) * CM_TO_INCH.toFixed(2);
        setStats(d => ({
          ...d,
          waistFt: waistFeet + '',
          waistIn: totalInch + '',
        }));
        break;
      case 'waistFt':
      case 'waistIn':
        let waistCm = (Number(val) / CM_TO_INCH).toFixed(2);
        setStats(d => ({ ...d, waist: waistCm + '' }));
        break;
      case 'hip':
        let hipInch = Number(val) / 2.54;
        let hipFeet = Math.floor(hipInch / 12).toFixed(0);
        // @ts-ignore
        let totalHipInch = Number(val) * CM_TO_INCH.toFixed(0);
        setStats(d => ({
          ...d,
          hipFt: hipFeet + '',
          hipIn: totalHipInch + '',
        }));
        break;
      case 'hipFt':
      case 'hipIn':
        let hipCm = (Number(val) / CM_TO_INCH).toFixed(2);
        setStats(d => ({ ...d, hip: hipCm + '' }));
        break;
    }
  };

  const handleClick = async () => {
    const data = {
      age: getAge(signupData?.data?.birthdate + ''),
      sex: signupData?.data?.sex.charAt(0).toLocaleLowerCase(),
      weight: Number(stats.weight),
      height: signupData?.data.height,
      neck: Number(stats.neck),
      waist: Number(stats.neck),
      hips: stats.hip || 0,
    };
    let fat = await BODY_FAT({
      stats: {
        ...stats,
        height: signupData?.data.height + '',
      },
      // @ts-ignore
      gender: signupData?.data?.sex,
      age: signupData?.data?.birthdate + '',
    });
    dispatch(
      AuthActions.tapeMeasure(data, () => {
        dispatch({
          type: AuthActionTypes.SET_SIGNUP_DATA,
          payload: {
            ...signupData,
            data: {
              ...signupData?.data,
              initialWeighIn: {
                ...signupData?.data?.initialWeighIn,
                weight: Number(stats.weight),
                usNavyMethod: {
                  ...signupData?.data?.initialWeighIn?.usNavyMethod,
                  neck: Number(stats.neck),
                  waist: Number(stats.waist),
                  hips: Number(stats.hip || 0),
                },
              },
            },
          },
        });
        navigation.navigate('Result', { stats: fat });
      }),
    );
  };
  return (
    <ScreenWrapper img={stepFour2Bg}>
      <Header title="Weight In" navigation={navigation} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <SizedBox height={30} />
        <UnitPreference />
        <SizedBox height={30} />

        {unitPreference === UNIT_PREFERENCE.METRIC ? (
          <View>
            <InputBox
              value={stats.weight}
              keyboardType="phone-pad"
              onChangeText={val => handleChange('weight', val)}
              label="Weight"
              maxLength={3}
              rightComponent={<Text style={styles.title}>kg</Text>}
            />
            <SizedBox height={25} />
            <InputBox
              label="Neck"
              maxLength={2}
              value={stats.neck}
              keyboardType="phone-pad"
              onChangeText={val => handleChange('neck', val)}
              rightComponent={<Text style={styles.title}>cm</Text>}
            />
            <SizedBox height={25} />
            <InputBox
              label="Waist"
              value={stats.waist}
              maxLength={3}
              keyboardType="phone-pad"
              onChangeText={val => handleChange('waist', val)}
              rightComponent={<Text style={styles.title}>cm</Text>}
            />
            {signupData?.data.sex === 'female' && (
              <View>
                <SizedBox height={25} />
                <InputBox
                  label="Hip"
                  maxLength={3}
                  value={stats.hip}
                  keyboardType="phone-pad"
                  onChangeText={val => handleChange('hip', val)}
                  rightComponent={<Text style={styles.title}>cm</Text>}
                />
              </View>
            )}
          </View>
        ) : (
          <View>
            <InputBox
              value={stats.weightP}
              onChangeText={val => handleChange('weightP', val)}
              label="Weight"
              maxLength={3}
              keyboardType="phone-pad"
              rightComponent={<Text style={styles.title}>Pounds</Text>}
            />
            <SizedBox height={30} />
            <Text style={styles.label}>Neck</Text>
            <View style={styles.row}>
              <View style={styles.flex}>
                <InputBox
                  value={stats.neckIn}
                  keyboardType="phone-pad"
                  maxLength={2}
                  onChangeText={val => handleChange('neckIn', val)}
                  rightComponent={<Text style={styles.title}>in</Text>}
                />
              </View>
            </View>
            <SizedBox height={30} />
            <Text style={styles.label}>Waist</Text>
            <View style={styles.row}>
              <View style={styles.flex}>
                <InputBox
                  value={stats.waistIn}
                  keyboardType="phone-pad"
                  maxLength={2}
                  onChangeText={val => handleChange('waistIn', val)}
                  rightComponent={<Text style={styles.title}>in</Text>}
                />
              </View>
            </View>
            {signupData?.data.sex === 'female' && (
              <View>
                <SizedBox height={30} />
                <Text style={styles.label}>Hip</Text>
                <View style={styles.row}>
                  <View style={styles.flex}>
                    <InputBox
                      value={stats.hipIn}
                      keyboardType="phone-pad"
                      maxLength={2}
                      onChangeText={val => handleChange('hipIn', val)}
                      rightComponent={<Text style={styles.title}>in</Text>}
                    />
                  </View>
                </View>
              </View>
            )}
          </View>
        )}

        <SizedBox height={30} />
        <Button
          title="Calculate"
          containerStyle={styles.button}
          onPress={handleClick}
          disabled={
            stats.weight === '' || (stats.waist === '' && stats.neck === '')
          }
        />
        <SizedBox height={30} />
        <TouchableOpacity
          onPress={() => {
            setStats(INITIAL_STATS);
          }}>
          <Text style={styles.title}>Clear</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};
