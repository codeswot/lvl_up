/* eslint-disable react-native/no-inline-styles */
import { SvgIcon } from '@components/svg-icon';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { SizedBox } from '@components/sized-box';

interface Props {
  title: string;
  navigation: any;
  rightContent?: any;
}
export const Header: FC<Props> = ({ title, navigation, rightContent }) => {
  return (
    <View style={styles.header}>
      <SvgIcon
        name="arr-left"
        size={25}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <View style={{ flex: 1 }}>
        <SizedBox width={20} />
        <Text style={styles.title}>{title}</Text>
      </View>
      {rightContent ? rightContent : <SizedBox width={25} />}
    </View>
  );
};
