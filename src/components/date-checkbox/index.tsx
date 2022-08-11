import { Checkbox } from '@components/checkbox';
import { SizedBox } from '@components/sized-box';
import { palette } from '@theme';
import React, { FC, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  label?: string;
}
export const DateCheckBox: FC<Props> = ({ label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <SizedBox height={15} />
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setChecked(!checked)}>
        <Checkbox checked={checked} disabled={true} />
        <SizedBox width={16} />
        <View style={styles.content}>
          <Text style={styles.title}>Monday</Text>
          <SizedBox width={12} />
          <SizedBox height={20} backgroundColor={palette.white} width={2} />
          <SizedBox width={12} />
          <Text style={styles.date}>23 May 2022</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
