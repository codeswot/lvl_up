/* eslint-disable react-native/no-inline-styles */
import { SvgIcon } from '@components/svg-icon';
import { palette } from '@theme';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  checked: boolean;
  onPress?: () => void;
  disabled?: boolean;
}

export const Checkbox: FC<Props> = ({ checked, onPress, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.checkbox,
        checked && { backgroundColor: palette.white, borderWidth: 0 },
      ]}>
      {checked && <SvgIcon name="check" size={20} />}
    </TouchableOpacity>
  );
};
