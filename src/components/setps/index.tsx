import { RH } from '@helpers/responsive';
import React from 'react';
import { View } from 'react-native';
import { palette } from '@theme';

interface StepsProps {
  count?: number;
}
export const Steps = ({ count = 1 }: StepsProps) => {
  return (
    <View
      style={{
        backgroundColor: palette.darkGray,
        height: RH(8),
        borderRadius: 5,
      }}>
      <View
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            width: `${20 * count}%`,
            height: '100%',
            backgroundColor: palette.purple,
            borderRadius: 5,
          },
        ]}
      />
    </View>
  );
};
