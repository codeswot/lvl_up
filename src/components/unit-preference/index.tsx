import { UNIT_PREFERENCE } from '@helpers/consts';
import useSelector from '@hooks/useSelector';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { AuthActionTypes } from '@redux/actionTypes';
import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export const UnitPreference: FC = () => {
  const { unitPreference } = useSelector<any>(d => d.auth);
  const dispatch = useThunkDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.unitBox,
          unitPreference === UNIT_PREFERENCE.US_STANDARD &&
            styles.unitBoxActive,
        ]}
        onPress={() => {
          dispatch({
            type: AuthActionTypes.SET_UNIT_PREFERENCE,
            payload: UNIT_PREFERENCE.US_STANDARD,
          });
        }}>
        <Text
          style={[
            styles.subText,
            unitPreference === UNIT_PREFERENCE.US_STANDARD &&
              styles.subTextActive,
          ]}>
          U.S. standard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.unitBox,
          unitPreference === UNIT_PREFERENCE.METRIC && styles.unitBoxActive,
        ]}
        onPress={() => {
          dispatch({
            type: AuthActionTypes.SET_UNIT_PREFERENCE,
            payload: UNIT_PREFERENCE.METRIC,
          });
        }}>
        <Text
          style={[
            styles.subText,
            unitPreference === UNIT_PREFERENCE.METRIC && styles.subTextActive,
          ]}>
          {' '}
          Metric
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const RecipeUnitPreference: FC = () => {
  const { unitPreference } = useSelector<any>(d => d.auth);
  const dispatch = useThunkDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.unitBox,
          unitPreference === UNIT_PREFERENCE.US_STANDARD &&
            styles.unitBoxActive,
        ]}
        onPress={() => {
          dispatch({
            type: AuthActionTypes.SET_UNIT_PREFERENCE,
            payload: UNIT_PREFERENCE.US_STANDARD,
          });
        }}>
        <Text
          style={[
            styles.subText,
            unitPreference === UNIT_PREFERENCE.US_STANDARD &&
              styles.subTextActive,
          ]}>
          Imperial
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.unitBox,
          unitPreference === UNIT_PREFERENCE.METRIC && styles.unitBoxActive,
        ]}
        onPress={() => {
          dispatch({
            type: AuthActionTypes.SET_UNIT_PREFERENCE,
            payload: UNIT_PREFERENCE.METRIC,
          });
        }}>
        <Text
          style={[
            styles.subText,
            unitPreference === UNIT_PREFERENCE.METRIC && styles.subTextActive,
          ]}>
          {' '}
          Metric
        </Text>
      </TouchableOpacity>
    </View>
  );
};
