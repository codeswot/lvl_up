import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';

interface Props {
  size?: number;
  children?: React.ReactNode;
  containerStyle?: any;
  backgroundColor?: string;
}
export const Round: FC<Props> = ({
  size,
  children,
  containerStyle,
  backgroundColor,
}) => {
  return (
    // @ts-ignore
    <View
      style={[
        styles.container,
        // @ts-ignore
        size && { height: size, width: size },
        backgroundColor && { backgroundColor },
        containerStyle,
      ]}>
      {children}
    </View>
  );
};
